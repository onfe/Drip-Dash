import Vue from "vue";
import Vuex from "vuex";
import user from "./stores/user.js";
// import devices from "./stores/devices.js";
import device from "./stores/device.js";
import settings from "./stores/settings.js";
import nav from "./stores/nav.js";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user: user,
    // devices: devices,
    device: device,
    settings: settings,
    nav: nav
  },
  strict: process.env.NODE_ENV !== "production"
});
