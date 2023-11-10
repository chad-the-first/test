import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faComments, faImages, faThumbsUp, faThumbsDown, faTimesCircle } from '@fortawesome/free-regular-svg-icons'
import { faPen, faCameraRetro, faChevronDown } from '@fortawesome/free-solid-svg-icons'


/* add icons to the library */
library.add(faPen, faComments, faImages, faCameraRetro, faThumbsUp, faThumbsDown, faTimesCircle, faChevronDown)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
