import SignUp from './components/SignUp.vue'
import Login from './components/Login.vue'
import Homepage from './components/Homepage/Homepage.vue'
import Reward from './components/Reward.vue'
import Form from './components/Homepage/PopUp.vue'

export default[
    { path: '/signup', component: SignUp},
    { path: '/login', component: Login},
    { path: '/home', component: Homepage },
    { path: '/form', component: Form,name:'Form', props:true },
    { path: '/reward', component: Reward}
]


