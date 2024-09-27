import {createRouter, createWebHistory} from "vue-router";
import HomeComponent from "../tukun-tech/components/home.component.vue";
import RegistrationComponent from "../tukun-tech/components/registration.component.vue";
import PatientRegistrationComponent from "../tukun-tech/components/patient-registration.component.vue";
import MedicalRegistrationComponent from "../tukun-tech/components/medical-registration.component.vue";
import DoctorsComponent from "../tukun-tech/components/doctors.component.vue";
import PatientsComponent from "../tukun-tech/components/patients.component.vue";
import PostPatComponent from "../tukun-tech/components/post-pat.component.vue";
import IcuPatComponent from "../tukun-tech/components/icu-pat.component.vue";
import loginComponent from "../tukun-tech/components/login.component.vue";
import createComponent from "../tukun-tech/components/create-account.component.vue";
import loginElderComponent from "../tukun-tech/components/login-elder.component.vue";
import createElderComponent from "../tukun-tech/components/create-account-elder.component.vue";
import updateAppointmentsComponent from "../tukun-tech/components/update-appointments.component.vue";
import scheduleAppointmentsComponent from "../tukun-tech/components/schedule-appointments.component.vue";
import rescheduleAppointmentsComponent from "../tukun-tech/components/reschedule-appointments.component.vue";
import AppointmentsComponent from "../tukun-tech/components/appointments.component.vue";
import homeElderComponent from "../tukun-tech/components/home-elder.component.vue";
import VsPanelComponent from "../tukun-tech/components/vs-panel.component.vue";
import EmergencyNumbersComponent from "../tukun-tech/components/emergency-numbers.component.vue";
import TechnicalSupportComponent from "../tukun-tech/components/technical-support.component.vue";
import OlderAdultComponent from "../tukun-tech/components/elder-profile.component.vue"
import RemindersComponent from "../tukun-tech/components/reminder.component.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/login'},
        { path: '/home', component: HomeComponent, meta: { title: 'Home' } },
        { path: '/registration', component: RegistrationComponent, meta: { title: 'Registration'}},
        { path: '/patient-registration', component: PatientRegistrationComponent, meta: { title: 'Patient Registration' } },
        { path: '/medical-registration', component: MedicalRegistrationComponent, meta: { title: 'Medical Registration' } },
        { path: '/doctors', component: DoctorsComponent, meta: { title: 'Doctors' } },
        { path: '/patients', component: PatientsComponent, meta: { title: 'Patients' } },
        { path: '/postoperative', component: PostPatComponent, meta: { title: 'Postoperative Patients' } },
        { path: '/icu', component: IcuPatComponent, meta: { title: 'Icu Patients' } },
        { path: '/login', component: loginComponent, meta: { title: 'Log in' } },
        { path: '/create', component: createComponent, meta: { title: 'Create Account' } },
        { path: '/login-elder', component: loginElderComponent, meta: { title: 'Log in Elder' } },
        { path: '/create-elder', component: createElderComponent, meta: { title: 'Create Account Elder' } },
        { path: '/appointments', component: AppointmentsComponent, meta: { title: 'Appointments' } },
        { path: '/reschedule', component: rescheduleAppointmentsComponent, meta: { title: 'Reschedule Appointments' } },
        { path: '/schedule', component: scheduleAppointmentsComponent, meta: { title: 'Schedule Appointments' } },
        { path: '/update', component: updateAppointmentsComponent, meta: { title: 'Update Appointments' } },
        { path: '/home-elder', component: homeElderComponent, meta: { title: 'Home Elder' } },
        { path: '/elder-profile',component: OlderAdultComponent, meta:{title:'Elder Profile'}},
        { path: '/vs-panel',component:VsPanelComponent, meta:{title:'Elder VS Panel'}},
        { path: '/emergency-number',component:EmergencyNumbersComponent, meta:{title:'Emergency Numbers'}},
        { path: '/reminders',component: RemindersComponent, meta:{title:'Reminders'}},
        { path: '/technical-support',component: TechnicalSupportComponent, meta:{title:'Technical Support'}},


    ],
});

router.beforeEach((to, from, next) => {
    let baseTitle = 'ACME Learning Center';
    document.title = `${baseTitle} | ${to.meta['title']}`;
    next();
});
export default router;