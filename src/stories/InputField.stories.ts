import type { Meta, StoryObj } from '@storybook/vue3';

import InputField from '../components/InputField.vue';

const meta = {
  title: 'Example/InputField',
  component: InputField,
  tags: ['autodocs'],
} satisfies Meta<typeof InputField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
      label: 'Email',
      value: '',
      placeholder: 'Enter your email'
    },
  };

