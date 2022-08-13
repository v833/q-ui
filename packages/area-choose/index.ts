import { App } from 'vue';
import AreaChoose from './src/index.vue';

export default (app: App) => {
  app.component('q-area-choose', AreaChoose);
}