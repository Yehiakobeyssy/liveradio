class Changecolor{
    constructor(){
        this.color1=document.getElementById("color1");
        this.color2=document.getElementById("color2");
        this.color3=document.getElementById("color3");
        this.color4=document.getElementById("color4");

        this.color1.addEventListener("click",()=>{
            this.selectColor("color1");
        });
        this.color2.addEventListener("click",()=>{
            this.selectColor("color2");
        });
        this.color3.addEventListener("click",()=>{
            this.selectColor("color3");
        });
        this.color4.addEventListener("click",()=>{
            this.selectColor("color4");
        });
        if(localStorage.getItem("back")==null){
            document.body.style.background="red";
        }
        this.selectColor(localStorage.getItem("back"));
    }
    selectColor(color){
            switch(color){
                case "color1" : 
                                document.body.style.background="red";
                                break;
                case "color2" : 
                                document.body.style.background="yellow";
                                break;
                case "color3" : 
                                document.body.style.background="green";
                                break;
                case "color4" : 
                                document.body.style.background="black";
                                break;
            } 
            localStorage.setItem("back",color);                              
        }
    }


onload=new Changecolor();

