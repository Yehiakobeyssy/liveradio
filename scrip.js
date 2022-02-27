class Player{
    constructor(){
        var heightmain= document.getElementById("player");
        var heightcon=document.getElementById("radio")
        heightmain.style.height= screen.height + "px";
        if (screen.width<500){
            heightmain.style.width=screen.width+"px";
        }
        heightcon.style.height= screen.height-80 + "px";
    }
}
onload = new Player();


class Audio{
    constructor(){
        this.audio_file= document.getElementById("srcAudio");
        this.title_audio=document.getElementById("title_audio");
        this.back_audio=document.getElementById("back");
        this.play_audio=document.getElementById("play");
        this.next_audio=document.getElementById("next");
        this.isplay;
        this.play_audio.addEventListener("click",()=>{
           this.play();
        });
        this.names_radio=[];
        this.names_radio[0]="Ahla Radio";
        this.names_radio[1]="HAVIN FM";
        this.names_radio[2]="AMED FM";
        this.names_radio[3]="ARTA FM";

        this.src_radio=[];
        this.src_radio[0]="https://live.ifm.tn/radio/8000/ifmlive?1585267848";
        this.src_radio[1]="http://radyolar.yayindinle.net:7764/;audio.mp3";
        this.src_radio[2]="http://95.173.162.182:9992/;stream.mp3";
        this.src_radio[3]="http://edge.mixlr.com/channel/qtgru";

        this.server=0;
        this.setserver();

        this.next_audio.addEventListener("click",()=>{
            if(this.server < this.src_radio.length-1 ){
                ++this.server;
                this.isplay=false;
            }else{
                this.server=0;
            }
            localStorage.setItem("server",this.server)
            this.setserver();
        })

        this.back_audio.addEventListener("click",()=>{
            if(this.server > 0 ) {
                --this.server;
                this.isplay=false;
            }else{
                this.server=this.src_radio.length-1;
            }
            localStorage.setItem("server",this.server)
            this.setserver();
        })
    }

    setserver(){
        if(localStorage.getItem("server")!=null){
            this.server=localStorage.getItem("server");
        }
        this.audio_file.src=this.src_radio[this.server];
        this.title_audio.innerHTML=this.names_radio[this.server];
        this.play();
    }
    play(){
        if(this.isplay==false){
            this.play_audio.src="img/pause.png"
            this.audio_file.play();
            this.isplay=true;
        }else{
            this.play_audio.src="img/play.png"
            this.audio_file.pause();
            this.isplay=false;
        }
    }
}
onload=new Audio();