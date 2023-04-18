import { Box, Button, Tooltip, TooltipProps } from '@components-ui/react'
import { Meta, StoryObj } from '@storybook/react'

const TooltipDemo = (props: TooltipProps) => {
  return (
    <Box
      css={{
        padding: '$16',
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '$gray700',
      }}
    >
      <Tooltip {...props}>
        <Button>Hove me</Button>
      </Tooltip>
    </Box>
  )
}

export default {
  title: 'Form/Tooltip',
  component: TooltipDemo,
  args: {
    content: 'Testando',
  },
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {
  args: {
    content: '26 de Outubro - Disponível',
  },
}
