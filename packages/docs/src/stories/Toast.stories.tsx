import { Box, Button, Toast, ToastProps } from '@components-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

const ToastDemo = (props: ToastProps) => {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <Button onClick={() => setOpen(true)}>Click me</Button>
      <Toast open={open} onOpenChange={setOpen} {...props} />
    </div>
  )
}

export default {
  title: 'Form/Toast',
  component: ToastDemo,
  decorators: [
    (Story) => {
      return <Box css={{ padding: '$12' }}>{Story()}</Box>
    },
  ],
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {
  args: {
    title: 'Agendamento realizado',
    description: 'Quarta-feira, 23 de Outubro às 16h',
    duration: 3000,
  },
}
