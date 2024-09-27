import { createApp } from 'vue'
import './style.css'
import App from './app.vue'
// Import router
// PrimeVue
import PrimeVue from 'primevue/config';
// PrimeVue CSS
import 'primeflex/primeflex.css';
// PrimeVue Icons
import 'primeicons/primeicons.css';
// PrimeVue Material Design Theme
// PrimeVue Services
import ToastService from 'primevue/toastservice';
import ConfirmationService from "primevue/confirmationservice";
// main.js o App.vue
import '@fortawesome/fontawesome-free/css/all.css';

// PrimeVue Components
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Row from "primevue/row";
import Toolbar from "primevue/toolbar";
import InputText from "primevue/inputtext";
import Textarea from "primevue/textarea";
import Button from "primevue/button";
import Sidebar from "primevue/sidebar";
import Menu from "primevue/menu";
import Dialog from "primevue/dialog";
import Toast from "primevue/toast";
import Dropdown from "primevue/dropdown";
import Tag from "primevue/tag";
import Card from "primevue/card";
import FileUpload from "primevue/fileupload";
import IconField from "primevue/iconfield";
import InputIcon from "primevue/inputicon";
import InputNumber from "primevue/inputnumber";
import FloatLabel from "primevue/floatlabel";
import Checkbox from "primevue/checkbox";
import Rating from "primevue/rating";
import ConfirmDialog from "primevue/confirmdialog";
import router from "./router/index.js";
createApp(App)
    .use(router)
    .use(PrimeVue, { ripple: true })
    .use(ConfirmationService)
    .use(ToastService)
    .component('pv-button', Button)
    .component('pv-card', Card)
    .component('pv-column', Column)
    .component('pv-confirm-dialog', ConfirmDialog)
    .component('pv-checkbox', Checkbox)
    .component('pv-data-table', DataTable)
    .component('pv-dialog', Dialog)
    .component('pv-dropdown', Dropdown)
    .component('pv-file-upload', FileUpload)
    .component('pv-float-label', FloatLabel)
    .component('pv-icon-field', IconField)
    .component('pv-input-icon', InputIcon)
    .component('pv-input-text', InputText)
    .component('pv-input-number', InputNumber)
    .component('pv-menu', Menu)
    .component('pv-rating', Rating)
    .component('pv-row', Row)
    .component('pv-sidebar', Sidebar)
    .component('pv-tag', Tag)
    .component('pv-textarea', Textarea)
    .component('pv-toolbar', Toolbar)
    .component('pv-toast', Toast)
    .mount('#app')