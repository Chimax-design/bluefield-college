/**
 * router/index.ts
 *
 * Manual routes for ./src/pages/*.vue
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router'
import Aboutus from '@/pages/aboutus.vue'
import Academicevents from '@/pages/academicevents.vue'
import administraoff from '@/pages/administraoff.vue'
import Admission from '@/pages/admission.vue'
import announcement from '@/pages/announcement.vue'
import calendar from '@/pages/calendar.vue'
import contact from '@/pages/contact.vue'
import documents from '@/pages/documents.vue'
import Index from '@/pages/index.vue'
import payment from '@/pages/payment.vue'
import philosphy from '@/pages/philosophy.vue'
import profile from '@/pages/profile.vue'
import registration from '@/pages/registration.vue'
import result from '@/pages/result.vue'
import Schactivity from '@/pages/schactivity.vue'
import Schooloutings from '@/pages/schooloutings.vue'
import services from '@/pages/services.vue'
import Signin from '@/pages/signin.vue'
import staff from '@/pages/staff.vue'
import strategy from '@/pages/strategy.vue'
import StudentLogin from '@/pages/studentlogin.vue'
import StudentPortal from '@/pages/studentportal.vue'
import teacherannouncement from '@/pages/teacherannouncement.vue'
import teacherdocuments from '@/pages/teacherdocuments.vue'
import TeacherLogin from '@/pages/teacherlogin.vue'
import TeacherPortal from '@/pages/teacherportal.vue'
import teacherprofile from '@/pages/teacherprofile.vue'
import TeacherResult from '@/pages/teacherresult.vue'
import teachertimetable from '@/pages/teachertimetable.vue'
import timetable from '@/pages/timetable.vue'
import tution from '@/pages/tution.vue'
import Update from '@/pages/update.vue'
import upload from '@/pages/upload.vue'
import vandm from '@/pages/vandm.vue'
import whyus from '@/pages/whyus.vue'
const routes = [
  {
    path: '/',
    component: Index,
  },
  {
    path: '/studentlogin',
    component: StudentLogin,
  },

  {
    path: '/studentportal',
    component: StudentPortal,
  },

  {
    path: '/teacherlogin',
    component: TeacherLogin,
  },

  {
    path: '/teacherportal',
    component: TeacherPortal,
  },
  {
    path: '/signin',
    component: Signin,
  },

  {
    path: '/update',
    component: Update,
  },
  {
    path: '/aboutus',
    component: Aboutus,
  },
  {
    path: '/admission',
    component: Admission,
  },
  {
    path: '/schooloutings',
    component: Schooloutings,
  },
  {
    path: '/schactivity',
    component: Schactivity,
  },
  {
    path: '/academicevents',
    component: Academicevents,
  },
  {
    path: '/vandm',
    component: vandm,
  },
  {
    path: '/philosophy',
    component: philosphy,
  },
  {
    path: '/strategy',
    component: strategy,
  },
  {
    path: '/tuition',
    component: tution,
  },
  {
    path: '/whyus',
    component: whyus,
  },
  {
    path: '/administraoff',
    component: administraoff,
  },
  {
    path: '/staff',
    component: staff,
  },
  {
    path: '/calendar',
    component: calendar,
  },
  {
    path: '/contact',
    component: contact,
  },
  {
    path: '/upload',
    component: upload,
  },
  {
    path: '/services',
    component: services,
  },
  {
    path: '/profile',
    component: profile,
  },
  {
    path: '/payment',
    component: payment,
  },
  {
    path: '/result',
    component: result,
  },
  {
    path: '/teacherresult',
    component: TeacherResult,
  },
  {
    path: '/teachertimetable',
    component: teachertimetable,
  },
  {
    path: '/timetable',
    component: timetable,
  },
  {
    path: '/teacherannouncement',
    component: teacherannouncement,
  },
  {
    path: '/announcement',
    component: announcement,
  },
  {
    path: '/documents',
    component: documents,
  },
  {
    path: '/teacherdocuments',
    component: teacherdocuments,
  },
  {
    path: '/teacherprofile',
    component: teacherprofile,
  },
  {
    path: '/studentregister',
    component: registration,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
