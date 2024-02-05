import type { Meta, StoryObj } from '@storybook/vue3';

import TheHeader from '../components/TheHeader.vue';

const meta = {
  title: 'Example/TheHeader',
  component: TheHeader,
  tags: ['autodocs'],
} satisfies Meta<typeof TheHeader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
