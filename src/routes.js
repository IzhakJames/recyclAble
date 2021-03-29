import SignUp from './components/SignUp.vue'
import Login from './components/Login.vue'
import Homepage from './components/Homepage/Homepage.vue'
import Reward from './components/RewardPage/Reward.vue'
import ContactUs from './components/ContactUs.vue'
import InputForm from './components/InputForm.vue'
import Map from './components/Map.vue'
import LandingPage from './components/LandingPage.vue'
import DataPage from './components/DataPage/DataPage.vue'

export default[
    { path: '/signup', component: SignUp},
    { path: '/login', component: Login},
    { path: '/home', component: Homepage, name:'Home', meta: {requiresAuth: true}},
    { path: '/reward', component: Reward, meta: {requiresAuth: true}},
    { path: '/contact_us', component: ContactUs},
    { path: '/input_form', component: InputForm},
    { path: '/map', component: Map},
    { path: '/', component: LandingPage},
    { path: '/info', component: DataPage}
]

