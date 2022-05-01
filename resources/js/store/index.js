import Vue from 'vue';
import Vuex from 'vuex';
import { createStore } from "vuex";
window.Vue = require("vue").default;
import { createApp } from "vue";
import getters from './getters'
import actions from './actions'
import mutations from './mutations'




let app = createApp({});

app.use(Vuex);

export const store = createStore({
    modules:{

    },

    state: {

    },

    mutations,
    actions,
    getters
})

