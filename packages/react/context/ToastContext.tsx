import { ReactNode, createContext, useContext } from 'react'
import * as Toast from '@radix-ui/react-toast'

interface ToastContextProps {
  teste: string
}

interface ToastProviderProps {
  children: ReactNode
}

export const ToastContext = createContext({} as ToastContextProps)

export function ToastProvider({ children }: ToastProviderProps) {
  return (
    <ToastContext.Provider value={{ teste: 'testando' }}>
      <Toast.Provider swipeDirection="right">{children}</Toast.Provider>
    </ToastContext.Provider>
  )
}

export function useToast() {
  const context = useContext(ToastContext)

  return context
}
