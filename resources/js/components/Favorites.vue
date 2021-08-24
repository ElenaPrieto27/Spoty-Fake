<template>
<div class="bg-black text-gray-300 min-h-screen p-10">

  <!-- header -->
  <div class="flex">
    <img class="mr-6" src="/images/favorites.png">
    <div class="flex flex-col justify-center">
      <h1 class="pl-2 text-5xl font-semibold text-white tracking-wider hover:underline truncate">Canciones que te gustan</h1>
      <a href="" class="flex items-center">
        <img :src="$page.props.user.profile_photo_url" :alt="$page.props.user.name" class="rounded-full h-6 w-6 mr-2" />
        <p class="text-white font-semibold truncate mr-3">{{ $page.props.user.name }} • {{lista.length}} canciones</p>
      </a>
    </div>
  </div>
  <div class="mt-6 flex justify-between">
    <div class="flex">
      <div class="bg-green rounded-full h-10 w-10 flex items-center justify-center">
                                    <i class="material-icons text-white text-2xl">play_arrow</i>
                                </div>
    </div>
  </div>

  <!-- Lista de canciones   -->
  <div class="mt-10">
    <div class="flex text-gray-600">
      <div class="p-2 w-8 flex-shrink-0">#</div>
      <div class="p-2 w-full">TÍTULO</div>
      <div class="p-2 w-full">ALBUM</div>
      <div class="p-2 w-full">FECHA INCORPORACIÓN</div>
      <div class="p-2 w-12 flex-shrink-0 text-right">⏱</div>
    </div>

    <div v-for="(cancion, index) in lista" @click="playSong(cancion)" :key="index" class="flex border-b border-gray-800 hover:bg-gray-800 cursor-pointer select-none">
      <div class="p-3 w-8 flex-shrink-0 cursor-pointer">{{index + 1}}</div>
      <div class="p-3 flex w-1/3">
          <a href="#"><img :src="`images/playlists/${cancion.imagen}.jfif`" alt="album cover" class="h-10" style="width:100%;"></a>
                <div class="ml-3" style="width:60%;">
                    <h1 class="text-sm text-white tracking-wide truncate">{{ cancion.name }}</h1>
                    <h2 class="text-xs text-lightest tracking-wide">{{ cancion.artist }}</h2>
                </div>
      </div>
      <div class="p-3 w-1/3">{{ cancion.album }}</div>
      <div class="p-3 w-1/6">{{ cancion.incorporacion }}  </div>
      <div class="p-3 w-1/6 flex-shrink-0 text-right">{{ cancion.duracion }}</div>
    </div>
  </div>
</div>
</template>
<script>
import { inject } from "vue";

export default {
    data() {
        return {
            lista:[
                {name: 'La Niña del Volcán (Polocorp Remix)',
                artist: 'YoSoyMatt, Polocorp',
                album: 'La Niña del Volcán (Polocorp Remix)',
                incorporacion: 'Hace 2 meses',
                duracion: '5:24',
                imagen: 'lanina',
                audio: '1.m4a'},
                {name: 'Love Tonight',
                artist: 'Shouse',
                album: 'Love Tonight',
                incorporacion: '15 may 2021',
                duracion: '8:13',
                imagen: 'shouse',
                audio: '2.m4a'},
                {name: 'Around - Solomun Vox',
                artist: 'Noir, Hayze, Solomun',
                album: 'Around',
                incorporacion: '11 mar 2021',
                duracion: '6:58',
                imagen: 'around',
                audio: '3.m4a'},
                {name: 'Instant Destiny',
                artist: 'Tame Impala',
                album: 'The Slow Rush',
                incorporacion: '03 ene 2021',
                duracion: '3:14',
                imagen: 'instant',
                audio: '4.m4a'},
                {name: 'Áfrika',
                artist: 'CLUBZ',
                album: 'Destellos',
                incorporacion: '13 dic 2020',
                duracion: '4:03',
                imagen: 'afrika',
                audio: '5.m4a'},
            ],
            user: ''
        }
    },
    setup() {
    const emitter = inject("emitter")
    const playSong = (cancion) => {
      emitter.emit("play", cancion)
    }
    return { playSong };
  },
}
</script>
