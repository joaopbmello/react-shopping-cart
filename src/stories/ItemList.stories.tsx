import { Meta, StoryObj } from "@storybook/react"
import ItemList from "../lib/ItemList"

const meta = {
  title: 'Lib/ItemList',
  component: ItemList
} satisfies Meta<typeof ItemList>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}