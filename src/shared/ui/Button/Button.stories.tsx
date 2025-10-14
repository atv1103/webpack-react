import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { fn } from 'storybook/test';
import { Button, ThemeButton } from './Button';
import { ThemeDecorator } from '../../config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '../../../app/providers/ThemeProvider/lib/ThemeContext';

const meta = {
  title: 'shared/Button',
  component: Button,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Text'
  },
};
// Primary.decorators = [ThemeDecorator(Theme.LIGHT)]

export const Clear: Story = {
  args: {
    children: 'Text',
    theme: ThemeButton.CLEAR
  },
};
// Clear.decorators = [ThemeDecorator(Theme.LIGHT)]

export const Outline: Story = {
  args: {
    children: 'Text',
    theme: ThemeButton.OUTLINE
  },
};
// Outline.decorators = [ThemeDecorator(Theme.LIGHT)]

export const OutlineDark: Story = {
  args: {
    children: 'Text',
    theme: ThemeButton.OUTLINE
  },
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)]
