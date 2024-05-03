import { Meta, StoryObj } from "@storybook/react"
import Quantity from "../lib/Quantity"

const meta = {
  title: 'Lib/Quantity',
  component: Quantity
} satisfies Meta<typeof Quantity>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    value: 1,
    min: 1,
    max: 10
  }
}