import type { Meta, StoryObj } from '@storybook/vue3';

import Card from '../components/Card.vue';

const meta = {
  title: 'Example/Card',
  component: Card,
  tags: ['autodocs'],
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const CardWithTitle: Story = {
  args: {
    title: 'This is card',
  },
};

export const CardWithTitleAndAction: Story = {
    args: {
      title: 'This is card',
      action: 'Add book'
    },
};

