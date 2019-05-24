import Vue from "vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faPowerOff,
  faAngleDown,
  faCog,
  faEllipsisV
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// Add the required icons to keep the bundle small.
library.add(faPowerOff, faAngleDown, faCog, faEllipsisV);

Vue.component("font-awesome-icon", FontAwesomeIcon);
