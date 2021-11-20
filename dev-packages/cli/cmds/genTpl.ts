import { CommandModule } from 'yargs'
import * as path from 'path'
import * as fs from 'fs-extra'
import * as mustache from 'mustache'
import * as Metalsmith from 'metalsmith'
import * as inquirer from 'inquirer'
import * as chalk from 'chalk'
import * as os from 'os'
import { execSync } from 'child_process'
import * as moment from 'moment'

module.exports = {
    command: 'add <filePath>',
    describe: '添加模板文件到项目中',
    builder: {
        name: {
            alias: 'n',
            default: '',
            description: '文件名'
        },
        comment: {
            alias: 'c',
            default: '',
            description: '注释',
        },
    },
    handler(args) {
        const targetPath = args.filePath as string
        const targetName = args.name as string
        const tplFileDir = path.join(__dirname, `../tpl`)

        // 生成模板
        generator(tplFileDir, targetPath, targetName, {
            FileName: targetName,
            comment: args.comment,
            author: getGitUserName(),
            date: moment().format('YYYY-MM-DD HH:mm'),
            version: getPkgVersion(),
        })
    },
    help: {
        alias: 'h',
    },
    getGitUserName,
} as CommandModule

/**
 * @param src 模板路径
 * @param dest 目标路径
 * @param targetName 文件名
 * @param metadata 元数据
 */
async function generator(src: string, dest: string, targetName: string, metadata: object) {
    const fullName = dest + '/' + targetName + '.vue'
    if (fs.existsSync(fullName)) {
        const answer = await inquirer.prompt({
            type: 'confirm',
            name: 'shouldOverride',
            message: `文件 ${fullName} 已存在，是否覆盖？`,
        })
        if (!answer.shouldOverride) return
    }

    Metalsmith(process.cwd())
        .metadata(metadata)
        .clean(false)
        .source(src)
        .destination(dest)
        .use((files, metalsmith, done: Function) => {
            const meta = metalsmith.metadata()
            const fileName = 'tpl.vue.txt'
            const vueFile = files[fileName]
            // 渲染模版
            const content = vueFile.contents.toString()
            vueFile.contents = Buffer.from(
                mustache.render(content, meta)
            )
            // 文件重命名
            const rename = targetName + '.vue'
            files[rename] = vueFile
            delete files[fileName]
            done()
        })
        .build(err => {
            if (err) {
                console.error(
                    `${chalk.bgRed.white(' ERROR ')} ${chalk.red(err.message)}`
                )
            } else {
                console.log(
                    chalk.bold(chalk.green(`🎉  ${dest}/${targetName}.vue is generated.`))
                )
            }
        })
}

/**
 * 获取 `git` user.name
 */
function getGitUserName() {
    let username = ''
    try {
        username = execSync('git config --get user.name', { encoding: 'utf8' })
    } catch (error) {
        username = os.userInfo().username
    }
    return username.trim()
}

/**
 * 获取项目根目录下 `package.json` 版本号
 */
function getPkgVersion() {
    return require(path.join(process.cwd(), 'package.json')).version
}
