import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Donut from "vue-css-donut-chart";
import "vue-css-donut-chart/dist/vcdonut.css";

createApp(App).use(router).use(Donut).mount("#app");
