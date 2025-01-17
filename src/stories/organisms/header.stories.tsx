import type { Meta, StoryObj } from '@storybook/react';
import { HeaderComponent } from '../../components/organisms/HeaderComponent/HeaderComponent';


const meta: Meta<typeof HeaderComponent> = {
  title: 'Organisms/Header',
  component: HeaderComponent,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof HeaderComponent>;

export const Header: Story = {};
