<template>
    <div class="px-6 py-3">
                    <div class="flex items-center justify-between">
                    <h1 class="pl-2 text-2xl font-semibold text-white tracking-wider hover:underline truncate">Hecho para Yazmin Luna</h1>
                    <h2 class="pr-8 pt-4 mb-3 text-xs font-semibold text-lightest uppercase tracking-wider hover:underline">Ver más</h2>
                    </div>
                    <div class="w-full flex flex-wrap">
                        <div v-for="(mix, index) in playlist" :key="index" class="p-4 w-60 relative">
                            <div class="absolute w-full h-full flex items-end justify-end p-8 opacity-0 hover:opacity-100">
                                <div class="bg-green rounded-full h-10 w-10 flex items-center justify-center">
                                    <i class="material-icons text-white text-2xl">play_arrow</i>
                                </div>
                            </div>
                            <div class="bg-light rounded-lf shadow-md w-full h-auto p-5">
                                <img :src="mix.src" class="h-auto w-full shadow mb-2">
                                <h1 class="text-sm font-semibold text-white tracking-wide">{{mix.title}}</h1>
                                <h2 class="text-xs line-clamp-2 text-lightest tracking-wide pt-2">{{mix.artist}}</h2>
                            </div>
                        </div>
                    </div>
                </div>
</template>

<script>
    export default {
        props:{
            playlist: Array
        }
    }
</script>
