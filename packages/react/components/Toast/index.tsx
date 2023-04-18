import { X } from 'phosphor-react'
import * as ToastRadix from '@radix-ui/react-toast'
import {
  ToastClose,
  ToastContainer,
  ToastDescription,
  ToastTitle,
  ToastViewport,
} from './styles'
import { ComponentProps } from 'react'

export interface ToastProps extends ComponentProps<typeof ToastContainer> {
  title: string
  description: string
}

export function Toast({ description, title, ...rest }: ToastProps) {
  return (
    <ToastRadix.Provider>
      <ToastContainer {...rest}>
        <ToastClose>
          <X weight="bold" />
        </ToastClose>
        <ToastTitle>{title}</ToastTitle>
        <ToastDescription>{description}</ToastDescription>
      </ToastContainer>
      <ToastViewport />
    </ToastRadix.Provider>
  )
}
