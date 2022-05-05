/* eslint-disable */
import  { Store } from "@store";
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
 
  export default component
}

declare module "vue-css-donut-chart";

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $store: Store;
  }
}
