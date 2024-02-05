import type { Meta, StoryObj } from '@storybook/vue3';

import TheFooter from '../components/TheFooter.vue';

const meta = {
  title: 'Example/TheFooter',
  component: TheFooter,
  tags: ['autodocs'],
} satisfies Meta<typeof TheFooter>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
