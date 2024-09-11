import type { Environment } from 'vitest/environments'

export default <Environment>{
  name: 'prisma',
  transformMode: 'ssr',
  setup() {
    console.log('Setup')

    return {
      teardown() {
        console.log('Teardown')
      },
    }
  },
}
