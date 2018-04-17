import Vue from "vue";
import Router from "vue-router";
import routes from "./routes";
import store from '../store/store'
Vue.use(Router);

let router = new Router({
  routes
});
 router.beforeEach((to, from, next) => {
 	/*console.log(to)
 	console.log(from)*/
 	let isLogin = CheckTheLoginStatus()
 	if(to.name=='login'){
 		next()
 	} else {
 		if(!isLogin){
 			next({
 				name:'login'
 			})
 		} else {
 			next()
 		}
 	}
 });
 function CheckTheLoginStatus(){
 	 let tk = localStorage.getItem('token') 
 	  if(tk){
       store.commit('saveUser',localStorage.getItem('username'))
      }
 	 return !!tk;
 }
export default router;
