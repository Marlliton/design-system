import { keyframes, styled } from '../../styles'
import * as Toast from '@radix-ui/react-toast'

const VIEWPORT_PADDING = 32

const hide = keyframes({
  '0%': { opacity: 1 },
  '100%': { opacity: 0 },
})

const slideIn = keyframes({
  from: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
  to: { transform: 'translateX(0)' },
})

const swipeOut = keyframes({
  from: { transform: 'translateX(0)' },
  to: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
})

export const ToastContainer = styled(Toast.Root, {
  backgroundColor: '$gray800',
  color: '$white',
  borderRadius: '$sm',
  border: '1px solid $gray600',
  padding: '$3 $5',
  fontFamily: '$default',
  display: 'flex',
  flexDirection: 'column',

  position: 'relative',

  '&[data-state="open"]': {
    animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
  '&[data-state="closed"]': {
    animation: `${hide} 100ms ease-in`,
  },
  '&[data-swipe="move"]': {
    transform: 'translateX(var(--radix-toast-swipe-move-x))',
  },
  '&[data-swipe="cancel"]': {
    transform: 'translateX(0)',
    transition: 'transform 200ms ease-out',
  },
  '&[data-swipe="end"]': {
    animation: `${swipeOut} 100ms ease-out`,
  },
})

export const ToastTitle = styled(Toast.Title, {
  fontSize: '$md',
  fontWeight: '$bold',
  paddingBottom: '$1',
})

export const ToastDescription = styled(Toast.Description, {
  color: '$gray400',
  fontSize: '$sm',
})

export const ToastClose = styled(Toast.Close, {
  all: 'unset',
  lineHeight: 0,
  cursor: 'pointer',

  position: 'absolute',
  right: 16,
  top: 16,
})

export const ToastViewport = styled(Toast.Viewport, {
  position: 'fixed',
  bottom: '$8',
  right: '$8',
  padding: VIEWPORT_PADDING,
  listStyle: 'none',
  width: 360,
  maxWidth: '100vw',

  zIndex: 999999,
})
