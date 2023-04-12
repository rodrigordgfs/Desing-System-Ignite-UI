import { ComponentProps } from 'react'
import { styled } from './styles'

export const Button = styled('button', {
  fontFamily: '$default',
  backgroundColor: '$ignite300',
  borderRadius: '$sm',
  border: 0,
  fontWeight: 'bold',
  color: '$white',
  transition: 'all 0.2s ease-in-out',
  cursor: 'pointer',

  '&:hover': {
    backgroundColor: '$ignite500',
  },

  variants: {
    size: {
      small: {
        fontSize: 14,
        padding: '$2 $4',
      },
      medium: {
        fontSize: 16,
        padding: '$4 $6',
      },
      large: {
        fontSize: 18,
        padding: '$6 $8',
      },
    },
  },

  defaultVariants: {
    size: 'medium',
  },
})

export type ButtonProps = ComponentProps<typeof Button>
