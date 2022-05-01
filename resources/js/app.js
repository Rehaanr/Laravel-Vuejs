require("./bootstrap");

window.Vue = require("vue").default;
import { createApp } from "vue";
import example from "./components/ExampleComponent.vue";
import employee from "./components/employee/EmployeeForm.vue";

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import { store } from "./store/index";

let app = createApp({});

app.use(ElementPlus);

app.component("example-component", example);
app.component("employee-form", employee);

app.mount(store);
app.mount("#app");
