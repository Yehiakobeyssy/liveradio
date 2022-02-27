class Volume{
    constructor(){
        this.audio = document.getElementById("srcAudio");
        this.volume_audio=document.getElementById("volume");
        this.speed_audio=document.getElementById("speed");

        this.audio.volume=0.5;
        this.audio.playbackRate=1;

        this.volume_audio.addEventListener("change",()=>{
            this.audio.volume=this.volume_audio.value/100;

        });
        this.speed_audio.addEventListener("change",()=>{
            this.audio.playbackRate =this.speed_audio.value/100;
            
        });
    }
}
onload= new Volume();