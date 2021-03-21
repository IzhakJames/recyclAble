import SignUp from './components/SignUp.vue'
import Login from './components/Login.vue'
import Reward from './components/Reward.vue'
import ContactUs from './components/ContactUs.vue'
import InputForm from './components/InputForm.vue'

export default[
    { path: '/signup', component: SignUp},
    { path: '/login', component: Login},
    { path: '/reward', component: Reward},
    { path: '/contact_us', component: ContactUs},
    { path: '/input_form', component: InputForm}

]