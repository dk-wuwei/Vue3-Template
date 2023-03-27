// World/__test__/index.spec.ts
import { shallowMount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'

import World from '../index.vue'

describe('World', () => {
  test('renders a message and responds correctly to user input', async () => {
    const wrapper = shallowMount(World, {
      props: {
        message: 'Hello World',
        username: '',
      },
    })

    // 确认是否渲染了 `message`
    expect(wrapper.find('.message').text()).toEqual('Hello World')

    // 断言渲染了错误信息
    expect(wrapper.find('.error').exists()).toBeTruthy()

    // 更新 `username` 并断言错误信息不再被渲染
    await wrapper.setProps({ username: '张三李四王五赵六' })
    expect(wrapper.find('.error').exists()).toBeFalsy()
  })
})
