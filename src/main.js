import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as Sentry from "@sentry/vue";

Vue.config.productionTip = false
Sentry.init({
  Vue,
  dsn: "https://259d4266a31a2bb0e84d61c1a617a3c7@o4506386921619456.ingest.sentry.io/4506386975686657",
  integrations: [
    new Sentry.BrowserTracing({
      routingInstrumentation: Sentry.vueRouterInstrumentation(router),
      tracePropagationTargets: [],
    }),
  ],
  tracesSampleRate: 1.0,
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
