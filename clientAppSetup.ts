import { defineClientAppSetup } from '@vuepress/client'
import { useRouter } from 'vue-router'
import { createApp, onMounted, onUpdated, watchEffect } from 'vue'
import CodeCopy from './CodeCopy.vue'
import './style.css'
const selector = __SELECTOR__
const align = __ALIGN__
const color = __COLOR__
const backgroundColor = __BACKGROUNDCOLOR__
const backgroundTransition = __BACKGROUNDTRANSITION__
const staticIcon = __STSTICICON__
const successText = __SUCCESSTEXT__
export default defineClientAppSetup(() => {
  const router = useRouter()
  router.afterEach(() => {    
    update()
  })
  onMounted(() => {
    update()
  })
  const update = () => {
    setTimeout(() => {
      document.querySelectorAll(selector).forEach((el) => {
        if (el.classList.contains('code-copy-added')) return
        let options = {
          align: align,
          color: color,
          backgroundTransition: backgroundTransition,
          backgroundColor: backgroundColor,
          successText: successText,
          staticIcon: staticIcon,
        }
        const app = createApp(CodeCopy, {
          options: { ...options },
          code: el.innerText,
          parent: el,
        })
        let vnode = document.createElement('div')
        app.mount(vnode)
        el.classList.add('code-copy-added')
        el.appendChild(vnode)
      })
    }, 380)
  }
})

// import CodeCopy from './CodeCopy.vue'
// import {createApp} from 'vue'

// export default {
//     updated() {
//         this.update()
//     },
//     methods: {
//         update() {
//             setTimeout(() => {
//                 document.querySelectorAll(selector).forEach(el => {
//                     if (el.classList.contains('code-copy-added')) return
//                     // let ComponentClass = Vue.extend(CodeCopy)
//                     const app = createApp(CodeCopy)
//                     // let instance = new ComponentClass()

//                     let options = {
//                         align: align,
//                         color: color,
//                         backgroundTransition: backgroundTransition,
//                         backgroundColor: backgroundColor,
//                         successText: successText,
//                         staticIcon: staticIcon
//                     }
//                     app.options = { ...options }
//                     app.code = el.innerText
//                     app.parent = el
//                     app.mount()
//                     el.classList.add('code-copy-added')
//                     el.appendChild(app.$el)
//                 })
//             }, 100)
//         }
//     }
// }
