import preactRefresh from '@prefresh/vite'
import type { UserConfig } from 'vite'

const config: any = {
  jsx: {
    factory: 'h',
    fragment: 'Fragment',
  },
  plugins: [preactRefresh()],
}

export default config