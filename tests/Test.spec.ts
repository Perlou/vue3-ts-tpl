import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import Test from '../src/views/Test.vue'

describe('Test.vue', () => {
    it('renders and increments', async () => {
        const wrapper = mount(Test)
        expect(wrapper.html()).toContain('Unit Test Page')
        expect(wrapper.html()).toContain('count is: 0')
        await wrapper.find('button').trigger('click')
        expect(wrapper.html()).toContain('count is: 1')
    })
})
