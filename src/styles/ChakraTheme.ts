// libs
import { extendTheme } from "@chakra-ui/react"

// styles 
import config from "tailwind.config"

export const chakraTheme = extendTheme({
  styles: {
    global: {
      '*': {
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
      },

      body: {
        backgroundColor: 'var(--background)',
      }
    }
  },
  fonts: {
    heading: 'Montserrat, sans-serif',
    body: 'Roboto, sans-serif',
  },
  colors: {
    ...config.theme?.extend?.colors
  },
  layerStyles: {
    card: {
      p: 4,
      borderRadius: 'md',
      borderWidth: '1px',
      borderColor: 'border',
      bgColor: 'background-secondary',
    }
  },

  components: {
    Divider: {
      baseStyle: {
        borderColor: 'border'
      }
    },
    Heading: {
      baseStyle: {
        color: 'text'
      }
    },
    Text: {
      baseStyle: {
        color: 'text'
      }
    }
  }
});