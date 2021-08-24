require('./bootstrap');

import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/inertia-vue3';
import { InertiaProgress } from '@inertiajs/progress';
import mitt from 'mitt'
const emitter = mitt()

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Reproductor web';


createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    emitter,
    resolve: (name) => require(`./Pages/${name}.vue`),
    setup({ el, app, props, plugin }) {
        return createApp({ render: () => h(app, props) })
            .use(plugin)
            .mixin({ methods: { route } })
            .provide('emitter', emitter)
            .mount(el);
    },
});

InertiaProgress.init({ color: '#4B5563' });
