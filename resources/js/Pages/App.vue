<template>
    <div class="bg-dark h-screen">
        <div class="flex" style="height: 88vh;">
            <!-- Sidebar  -->
            <div class="w-56 bg-black h-full flex-none">
                <div class="p-6">
                    <img src="/images/Spotify_Logo_RGB_White.png" class="h-10">
                </div>
                <div class="mx-2 mb-5">
                    <button v-for="(page,index) in pages" @click="setID = page.id" :key="index" :class="`w-full text-sm font-semibold rounded px-3 py-2 flex items-center hover:text-white justify-start ${setID === page.id ? 'bg-light text-white' : 'text-lightest'}`">
                        <i class="material-icons mr-3"> {{ page.icon }} </i>
                        <p> {{page.name }}</p>
                    </button>
                </div>
                <div class="mx-5">
                    <button class="mb-2 flex text-sm items-center justify-start text-white opacity-75 hover:opacity-100">
                        <i class="material-icons h-8 w-8 mr-3"> add_box </i>
                        <p> Crear lista</p>
                    </button>
                    <button @click="setID = 'favs'" class="flex text-sm items-center justify-start text-white opacity-75 hover:opacity-100">
                        <img src="/images/favorites.png" class="h-8 w-8 mr-3" />
                        <p class="truncate"> Canciones que te gustan</p>
                    </button>
                    <div class="h-px w-full bg-light my-3">
                    </div>
                </div>
                <div class="mx-5">
                    <div class="w-full h-64 overflow-y-scroll">
                        <p v-for="(album, index) in albums" :key="index" class="text-lightest hover:text-white text-sm py-2">{{ album.name }}</p>
                    </div>
                    <button class="flex items-center justify-start text-lightest hover:text-white py-2">
                        <i class="material-icons mr-3 rounded-full border text-sm border-lightest">arrow_downward</i>
                        <p class="text-sm font-semibold">Instalar app</p>
                    </button>
                </div>
            </div>
            <!-- Main -->
            <div class="w-full h-full relative overflow-y-scroll">
                <!-- Header -->
                <div class="w-full sticky top-0 py-4 px-6 flex items-center justify-between bg-dark z-50">
                    <div class="flex items-center">
                        <button class="rounded-full bg-black w-8 h-8 text-white mr-3">
                            <i class="material-icons text-3xl">keyboard_arrow_left</i>
                        </button>
                        <button class="rounded-full bg-black w-8 h-8 text-white">
                            <i class="material-icons text-3xl">keyboard_arrow_right</i>
                        </button>
                    </div>
                    <div class="relative">
                        <button @click="showDropdown=!showDropdown" class="bg-light rounded-full py-1 px-2 flex items-center">
                            <img src="/images/me.jpg" class="rounded-full h-6 w-6 mr-2" />
                            <p class="text-white font-semibold truncate mr-3">{{usuario.name}}</p>
                            <i v-if="!showDropdown" class="material-icons text-white">arrow_drop_down</i>
                            <i v-else class="material-icons text-white">arrow_drop_up</i>
                        </button>
                        <div v-if="showDropdown" class="absolute bg-light w-full rounded mt-1 z-50">
                            <button @click="showDropdown=!showDropdown" class="w-full py-2 pl-3 text-white text-left hover:bg-lightest text-sm opacity-75 hover:opacity-100">Cuenta</button>
                            <button @click="showDropdown=!showDropdown" class="w-full py-2 pl-3 text-white text-left hover:bg-lightest text-sm opacity-75 hover:opacity-100">Perfil</button>
                            <button @click="showDropdown=!showDropdown" class="w-full py-2 pl-3 text-white text-left hover:bg-lightest text-sm opacity-75 hover:opacity-100">Cerrar sesión</button>

                        </div>
                    </div>
                </div>
                <!-- Playlists -->
                <Mainwindow v-if="setID == 'home'" />
                <Favorites v-if="setID == 'favs'">
                    <template :usuario="usuario.name"></template>
                </Favorites>
            </div>
        </div>
        <!-- Play skip etc -->
        <div class="w-full flex items-center justify-between px-3 bg-light border-t border-dark" style="height:12vh">
            <div class="flex items-center w-1/4">
            <a href="#"><img src="images/playlists/lanina.jfif" alt="album cover" class="h-14" style="width:100%;"></a>
                <div class="ml-3" style="width:60%;">
                    <h1 class="text-sm text-white tracking-wide truncate">La Niña del Volcán (Polocorp Remix)</h1>
                    <h2 class="text-xs text-lightest tracking-wide">YoSoyMatt, Polocorp</h2>
                </div>
                <i class="material-icons text-green mx-4">favorite</i>
                <i class="material-icons text-xl text-lightest hover:text-white">picture_in_picture_alt</i>
            </div>
            <div class="flex flex-col justify-center w-2/4 items-center">
                <div class="flex items-center">
                    <button class="mx-3 text-lightest hover:text-white"><i class="material-icons text-base">shuffle</i></button>
                    <button class="text-lightest hover:text-white"><i class="material-icons text-base">skip_previous</i></button>
                    <button @click="playSong()" class="rounded-full h-8 w-8 flex items-center justify-center mx-3 boder-lightest border text-lightest hover:text-white"><i class="material-icons">{{ (playState === 'play')?'play_arrow':'pause' }}</i></button>
                    <button class="text-lightest hover:text-white"><i class="material-icons text-base">skip_next</i></button>
                    <button class="mx-3 text-lightest hover:text-white"><i class="material-icons text-base">repeat</i></button>
                </div>
                <Player :song="playing" :playState="playState" />
            </div>
            <div class="flex items-center w-1/4 justify-end">
                <i class="material-icons text-lightest hover:text-white">playlist_play</i>
                <i class="material-icons text-xl text-lightest hover:text-white mx-3">important_devices</i>
                <i class="material-icons text-xl text-lightest hover:text-white">volume_up</i>
                <div class="w-12 ml-1 bg-lightest hover:text-white rounded-full h-1"></div>
            </div>
        </div>
    </div>
</template>
<script>
import Player from './components/Player'
import Mainwindow from './components/Mainwindow'
import Favorites from './components/Favorites'
//import { EventBus } from '../event-bus.js';

export default {
    name: 'Spotify',
    props:[
        'usuario'
    ],
    components: {
        Player, Mainwindow, Favorites
    },
    data() {
        return {
            playing: {},
            playState: 'play',
            setID: 'home',
            pages: [
                {id: 'home', name: 'Inicio', icon: 'home'},
                {id: 'search', name: 'Buscar', icon: 'search'},
                {id: 'library', name: 'Tu Biblioteca', icon: 'bar_chart'}
            ],
            albums: [
                {name: 'Mix de Glass Animals'},
                {name: 'Mix de Tame Impala'},
                {name: 'mamá cool'},
                {name: 'One Punch Man'},
                {name: 'Pulso Latino'},
                {name: 'Indie Mexicano: Clásicos'},
                {name: 'Dance/Alternativa'},
                {name: 'Fisherprice'},
                {name: 'Gold'},
                {name: 'Indiespensables'},
                {name: 'Panic Botanic by deLarge'},
                {name: 'Bohemias'},
                {name: 'Cool\'s'},
                {name: 'Starred'},
                {name: 'Mexican Nortechno'},
            ],
            showDropdown:false,
        }
    },
    mounted(){
        //EventBus.$on('play', this.changeSong);
    },
    methods: {
        changeSong(cancion){
            let self = this
            this.playing = cancion
            setTimeout(function(){
             self.playSong()
            }, 1000);

        },
        playSong(){
            let ctx = this
            if(ctx.playState === 'play') {
              ctx.playState = 'pause';
            } else {
              ctx.playState = 'play';
            }
        }
    },
}
</script>
