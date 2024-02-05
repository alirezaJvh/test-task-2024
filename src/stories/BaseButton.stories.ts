import type { Meta, StoryObj } from '@storybook/vue3';

import BaseButton from '../components/BaseButton.vue';

const meta = {
  title: 'Example/Button',
  component: BaseButton,
  tags: ['autodocs'],
} satisfies Meta<typeof BaseButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: 'Button',
  },
};

export const DisabledButton: Story = {
  args: {
    text: 'Button',
    disabled: true,
  },
};