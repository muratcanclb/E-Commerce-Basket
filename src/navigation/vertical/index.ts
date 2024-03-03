import type { VerticalNavItems } from '@/@layouts/types'

export default [
  {
    title: 'Home',
    to: { name: 'index' },
    icon: { icon: 'tabler-smart-home' },
  },
  {
    title: 'Ödeme Sayfası',
    to: { name: 'second-page' },
    icon: { icon: 'mdi-cart' },
  },
  {
    title: 'Sepet',
    to: { name: 'odeme-sayfasi' },
    icon: { icon: 'mdi-cart' },
  },
] as VerticalNavItems
