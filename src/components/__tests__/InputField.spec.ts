import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import InputField from '../InputField.vue'

describe('Input Field', () => {
    it('renders properly', () => {
      const wrapper = mount(InputField, { props: { label: 'Test', value: '', placeholder: 'Test' } })
      expect(wrapper.props('label')).toBe('Test')
      expect(wrapper.props('placeholder')).toBe('Test')
    })
  })