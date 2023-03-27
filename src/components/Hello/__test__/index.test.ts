import { mount } from '@vue/test-utils'
import { describe, test, expect } from 'vitest'

import Hello from '../index.vue'
describe('Hello', () => {
  test('挂载组件', async () => {
    expect(Hello).toBeTruthy()

    const wrapper = mount(Hello, {
      props: {
        count: 4,
      },
    })

    // get('xxx') tagName、class、id
    // trigger('xxx') click... 触发事件
    await wrapper.get('button').trigger('click')

    // .text() 获取文本
    expect(wrapper.text()).toContain('4 x 3 = 12')

    await wrapper.get('button').trigger('click')

    expect(wrapper.text()).toContain('4 x 4 = 16')
  })
})
