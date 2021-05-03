import { createApp } from 'vue'
// TypeScript error? Run VSCode command
// TypeScript: Select TypeScript version - > Use Workspace Version
import App from './App.vue'
import store from './store/index.js;
import router from './router'

createApp(App).use(router).use(store).mount('#app')

