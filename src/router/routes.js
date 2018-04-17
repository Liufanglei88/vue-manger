import Home from "./../views/home/home";
import Administration from "./../views/administration/administration";
import Plan from "./../views/plan/plan";
import Setup from "./../views/setup/setup";
import Unit from "./../views/unit/unit";
import Originality from "./../views/originality/originality";
import Login from "./../views/login/login";
import NewAdvertisement from './../views/NewAdvertisement/newAdvertisement'
import CreateionCreativity from  './../views/NewAdvertisement/creationCreativity/creationCreativity'
import Calendar from  './../views/home/calendar'

let routes = [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/home",
    name: "home",
    component: Home,
  },
  {
    path: "/calendar",
    name: "Calendar",
    component: Calendar,
  },
  {
    path: "/administration",
    name: "administration",
    component: Administration
  },
  {
    path: "/plan",
    name: "plan",
    component: Plan
  },
  {
    path: "/unit",
    name: "unit",
    component: Unit
  },
  {
    path: "/setup",
    name: "setup",
    component: Setup
  },
  {
    path: "/originality",
    name: "originality",
    component: Originality
  },
  {
    path:'/NewAdvertisement',
    name:'newAdvertisement',
    component:NewAdvertisement,
    redirect:{name:'createionCreativity'},
    children:[
       {
        path:'/NewAdvertisement/createionCreativity',
        name:'createionCreativity',
        component:CreateionCreativity
       }
    ]
  }
];
export default routes;
