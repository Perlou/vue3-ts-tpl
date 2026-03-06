import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import Header from '../src/components/Header.vue'

describe('Header.vue', () => {
    it('renders', () => {
        const wrapper = mount(Header)
        expect(wrapper.html()).toContain('Vite + Vue3 + TypeScript + Element Plus')
    })
})
