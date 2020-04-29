import Vue from 'vue'
import Router from 'vue-router'
import Form from '@/components/Form'
import Login from '@/components/Login'
import Dashboard from '@/components/Dashboard'
import Upload from '@/components/Upload'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Form',
      component: Form
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/upload',
      name: 'Upload',
      component: Upload
    }
  ]
})
