window.Vue = require("vue").default;
import { createApp } from "vue";
import getters from "./getters";
import mutations from "./mutations";
import axios from "axios";
import { ElNotification } from "element-plus";
import { ElLoading } from "element-plus";

let app = createApp({});

let loader = null;

function displayLoader(loadingText = "Loading...") {
    loader = ElLoading.service({
        lock: true,
        text: loadingText,
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.7)",
    });
}

function removeLoader() {
    loader.close();
}

export default function saveEmployee({ commit }, payload) {
    displayLoader();

    axios(`/save-employee`, payload).then((res) => {
        ElNotification({
            title: "Success",
            message: "This is a success message",
            type: "success",
        });
        removeLoader();

        setTimeout(() => {
            window.location.href = "/employees";
        }, 2000);
    });
}
