import { createRouter, createWebHistory } from 'vue-router';
import Home from "@/views/Home.vue";
import Housing from "@/views/Housing.vue";
import Work from "@/views/Work.vue";
import Management from "@/views/Management.vue";
import Shuttle from "@/views/Shuttle.vue";
import Administration from "@/views/Administration/Administration.vue";
import Contacts from "@/views/Administration/Contacts.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/wohnen',
      name: 'housing',
      component: Housing
    },
    {
      path: '/arbeiten',
      name: 'work',
      component: Work
    },
    {
      path: '/stab',
      name: 'management',
      component: Management
    },
    {
      path: '/fahrdienst',
      name: 'shuttle',
      component: Shuttle
    },
    {
      path: '/administration',
      name: 'administration',
      component: Administration
    },
    {
      path: '/ansprechpartner',
      name: 'contacts',
      component: Contacts
    }
  ]
})
export default router;
