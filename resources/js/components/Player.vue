<template>
    <div
        id="audio-player-container"
        class="w-3/4 flex items-center justify-center mt-3"
    >
        <audio style="display:none;" preload="metadata" loop ref="audio">
            <source :src="song.audio" type="audio/mpeg" />
        </audio>
        <p class="text-xs text-lightest mr-1" v-html="elapsedTime()">0:00</p>
        <input
            type="range"
            id="seek-slider"
            min="0"
            v-model="playbackTime"
            :max="audioDuration"
        />
        <p class="text-xs text-lightest ml-1" v-html="totalTime()">0:00</p>
    </div>
</template>
<script>
export default {
    props: {
        playState: String,
        song: Object
    },
    watch: {
        song: function(){
            this.$refs.audio.load();
        },
        playState: function() {
            this.toggleAudio();
        },
        isPlaying: function() {
            var audio = this.$refs.audio;
            this.initSlider();
            if (!this.listenerActive) {
                this.listenerActive = true;
                audio.addEventListener("timeupdate", this.playbackListener);
            }
        },
        playbackTime: function() {
            var audio = this.$refs.audio;
            var diff = Math.abs(this.playbackTime - audio.currentTime);
            if (diff > 0.01) {
                audio.currentTime = parseFloat(this.playbackTime);
            }
        }
    },
    data() {
        return {
            audioDuration: 100,
            audioLoaded: false,
            isPlaying: false,
            playbackTime: 0.0
        };
    },
    methods: {
        initSlider() {
            var audio = this.$refs.audio;
            if (audio) {
                this.audioDuration = Math.round(audio.duration);
            }
        },
        calculateTime(secs) {
            const minutes = Math.floor(secs / 60);
            const seconds = Math.floor(secs % 60);
            const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
            return `${minutes}:${returnedSeconds}`;
        },
        totalTime() {
            var audio = this.$refs.audio;
            if (audio) {
                var seconds = audio.duration;
                return this.calculateTime(seconds);
            } else {
                return "00:00";
            }
        },
        elapsedTime() {
            var audio = this.$refs.audio;
            if (audio) {
                var seconds = audio.currentTime;
                return this.calculateTime(seconds);
            } else {
                return "00:00";
            }
        },
        playbackListener(e) {
            var audio = this.$refs.audio;
            this.playbackTime = parseFloat(audio.currentTime);

            //console.log("update: " + audio.currentTime);
            audio.addEventListener("ended", this.endListener);
            audio.addEventListener("pause", this.pauseListener);
        },
        pauseListener() {
            this.isPlaying = false;
            this.listenerActive = false;
            this.cleanupListeners();
        },
        endListener() {
            this.isPlaying = false;
            this.listenerActive = false;
            this.cleanupListeners();
        },
        cleanupListeners() {
            var audio = this.$refs.audio;
            audio.removeEventListener("timeupdate", this.playbackListener);
            audio.removeEventListener("ended", this.endListener);
            audio.removeEventListener("pause", this.pauseListener);
        },
        toggleAudio() {
            var audio = this.$refs.audio;
            if (audio.paused) {
                audio.play();
                this.isPlaying = true;
            } else {
                audio.pause();
                this.isPlaying = false;
            }
        }
    },
    mounted() {
        this.$nextTick(function() {
            var audio = this.$refs.audio;
            audio.addEventListener(
                "loadedmetadata",
                function(e) {
                    this.initSlider();
                }.bind(this)
            );
            audio.addEventListener(
                "canplay",
                function(e) {
                    this.audioLoaded = true;
                }.bind(this)
            );
        });
    }
};
</script>
