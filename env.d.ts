/// <reference types="vite/client" />

declare module '*.vue' {
  import { DefineComponet } from 'vue'
  const component: DefineComponet
  export default component
}
