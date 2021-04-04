import SignUp from './components/AuthPage/SignUp.vue'
import Login from './components/AuthPage/Login.vue'
import Homepage from './components/Homepage/Homepage.vue'
import Reward from './components/RewardPage/Reward.vue'
import ContactUs from './components/ContactUs.vue'
import Map from './components/Map.vue'
<<<<<<< HEAD
import LandingPage from './components/LandingPage.vue'
import Discussion from './components/Forum/DiscussionApp.vue'
=======
import LandingPage from './components/LandingPage/LandingPage.vue'
import DataPage from './components/DataPage/DataPage.vue'
>>>>>>> origin/main

export default[
    { path: '/signup', component: SignUp},
    { path: '/login', component: Login},
    { path: '/home', component: Homepage, name:'Home', meta: {requiresAuth: true}},
    { path: '/reward', component: Reward, meta: {requiresAuth: true}},
    { path: '/contact_us', component: ContactUs},
    { path: '/map', component: Map},
    { path: '/', component: LandingPage},
<<<<<<< HEAD
    { path: '/discussion', component: Discussion}
=======
    { path: '/data', component: DataPage}
>>>>>>> origin/main
]

