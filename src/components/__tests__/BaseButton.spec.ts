import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import BaseButton from '../BaseButton.vue'

describe('Base Button', () => {
  it('renders properly', () => {
    const wrapper = mount(BaseButton, { props: { text: 'Button' } })
    expect(wrapper.text()).toContain('Button')
  })

  it('disabled button', () => {
    const wrapper = mount(BaseButton, { props: { text: 'Button', disabled: true } })
    expect(wrapper.attributes('disabled')).toBeDefined()
  })
})
