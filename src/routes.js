import SignUp from './components/SignUp.vue'
import Login from './components/Login.vue'
import Homepage from './components/Homepage/Homepage.vue'
import Reward from './components/RewardPage/Reward.vue'
import Form from './components/Homepage/PopUp.vue'

export default[
    { path: '/signup', component: SignUp},
    { path: '/login', component: Login},
    { path: '/home', component: Homepage, name:'Home', meta: {requiresAuth: true}},
    { path: '/form', component: Form,name:'Form', props:true, meta: {requiresAuth: true}},
    { path: '/reward', component: Reward, meta: {requiresAuth: true}}
]




