import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createVuetify } from 'vuetify'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'

const vuetify = createVuetify({
  theme: {
    themes: {
      light: {
        variables: {
          '--body-background': '#ffffff',
          '--main-text': '#000000',
          '--link-color': '#0451a5',
          '--border': '1px solid black',
        },
      },
      dark: {
        variables: {
          '--body-background': '#1c1c1e',
          '--main-text': '#d4d4d4',
          '--link-color': '#9cdcfe',
          '--border': '1px solid white',
        },
      },
    },
    options: { customProperties: true },
    defaultTheme: 'light', // デフォルトはライトモード
  },
})

createApp(App).use(router).use(vuetify).mount('#app')