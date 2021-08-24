<template>
 <div>
     <Playlist :playlist="mixes" >
         <template name="usuario">hola</template>
     </Playlist>
     <Playlist :playlist="recents" />
 </div>
</template>
<script>
import Playlist from './Playlist'

export default {
    components: {
        Playlist
    },
    data() {
        return {
            mixes: [
                {src: 'images/playlists/daily1.jfif', title: 'Daily Mix 1', artist: 'BonHaus, Mr. Pig, Zoé y más.'},
                {src: 'images/playlists/daily2.jfif', title: 'Daily Mix 2', artist: 'Bronco, Juan Gabriel, Lucero y más'},
                {src: 'images/playlists/daily3.jfif', title: 'Daily Mix 3', artist: 'Daniella Babbitt, Gina Ordonieva, Bernadette Boulet y más'},
                {src: 'images/playlists/daily4.jfif', title: 'Daily Mix 4', artist: 'GRGE, Boris Brejcha, Zeds Dead y más'},
                {src: 'images/playlists/daily5.jfif', title: 'Daily Mix 5', artist: 'Chus & Ceballos, Sofi Tuker, Route 94 y más'},
            ],
            recents: [
                {src: 'images/playlists/recent1.jfif', title: 'mamá cool', artist: 'Lo más alternativo para una mamá muy mo-der-na.'},
                {src: 'images/playlists/recent2.jfif', title: 'Club Electropical', artist: 'Deja a tu cuerpo cibrar con el sabor electropical de distintas latitudes.'},
                {src: 'images/playlists/recent3.jfif', title: 'Club de Playa', artist: 'Sabor tropical multicolor para disfrutar junto al mar.'},
                {src: 'images/playlists/recent4.jfif', title: 'Onda Indietrónica', artist: 'La orilla donde el indie se fusiona con la electrónica.'},
                {src: 'images/playlists/recent5.jfif', title: 'Pulso Latino', artist: 'Desde México hasta Argentina, el hogar de los beats latinoamericanos. Foto: Tom & Collins, Cato Anaya'},
            ]
        }
    }
}
</script>
