<template>
    <div>
        <button type="submit" class="w-full py-2 pl-3 text-white text-left hover:bg-lightest text-sm opacity-75 hover:opacity-100" v-if="as == 'button'">
            <slot></slot>
        </button>

        <a :href="href" class="block px-4 py-2 text-sm leading-5 text-white hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition" v-else-if="as =='a'">
            <slot></slot>
        </a>

        <Link :href="href" class="block px-4 py-2 text-sm leading-5 text-white hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition" v-else>
            <slot></slot>
        </Link>
    </div>
</template>

<script>
    import { Link } from '@inertiajs/inertia-vue3';

    export default {
        components: {
            Link,
        },
        props: ['href', 'as']
    }
</script>
