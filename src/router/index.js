import Vue from 'vue'
import VueRouter from 'vue-router'
const home =()=>import('../views/home/home.vue')
const category =()=>import('../views/category/category.vue')
const cart =()=>import('../views/cart/cart.vue')
const profile =()=>import('../views/profile/profile.vue')
const detail =()=>import('../views/detail/detail.vue')

Vue.use(VueRouter)

  const routes = [
	{
		path:'',
		redirect:'/home'
	},
	{
		path:'/home',
		component:home
	},
	{
		path:'/category',
		component:category
	},
	{
		path:'/cart',
		component:cart
	},
	{
		path:'/profile',
		component:profile
	},
  {
  	path:'/detail/:iid',
  	component:detail
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
