/*
 * @Description: 
 * @Author: v833
 * @Date: 2022-08-09 11:11:34
 * @LastEditors: v833
 * @LastEditTime: 2022-08-10 23:11:58
 */
import { App } from 'vue';

import qIconChoose from './icon-choose';
import qAreaChoose from './area-choose';
import qTrend from './trend';
import qMenu from './menu'
import qProgress from './progress'
import qCitySelect from './city-select'
import qForm from './form';
import qModelForm from './model-form';

const components = [
  qIconChoose,
  qAreaChoose,
  qTrend,
  qMenu,
  qProgress,
  qCitySelect,
  qForm,
  qModelForm
]


export default (app: App) => {
  components.forEach(component => {
    app.use(component);
  })
}