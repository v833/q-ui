
import { App } from 'vue';
import Trend from './src/index.vue';


export default (app: App) => {
  app.component('q-trend', Trend);
}