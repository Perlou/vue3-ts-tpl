/* eslint-disable @typescript-eslint/no-unused-expressions */
import * as yargs from 'yargs'

yargs
    .commandDir('cmds', {
        extensions: ['ts']
    })
    .help().argv
