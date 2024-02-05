import type { Meta, StoryObj } from '@storybook/vue3';

import BaseCard from '../components/BaseCard.vue';

const meta = {
  title: 'Example/BaseCard',
  component: BaseCard,
  tags: ['autodocs'],
} satisfies Meta<typeof BaseCard>;

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

