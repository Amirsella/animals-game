let runners = {
    dog: {
        "name": "dog",
        "id": "dog",
        "voice": "woof",
        "img": "https://beyond.hackampus.com/canvas/general/general-hRZJZ-2021.06.28.08.22.59-dog.gif",
        "step": 50
    },
    horse: {
        "name": "horse",
        "id": "horse",
        "voice": "neigh",
        "img": "https://beyond.hackampus.com/canvas/general/general-aEkOV-2021.06.28.08.22.59-horse.gif",
        "step": 70
    },
    duck: {
        "name": "duck",
        "id": "duck",
        "voice": "quack",
        "img": "https://beyond.hackampus.com/canvas/general/general-FIXAF-2021.06.28.08.22.59-duck.gif",
        "step": 40
    },
    chick: {
        "name": "chick",
        "id": "chick",
        "voice": "cheap",
        "img": "https://beyond.hackampus.com/canvas/general/general-qPu2r-2021.06.28.08.19.50-chick.gif",
        "step": 30
    }
    };

    renderRunners()
function renderRunners(){
let str=''
for(runner in runners){
    console.log(runner);
    str+=`<div class="runner ${runner}">
    <img class="gif" src="${runners[runner].img}" alt="">
    </div>`
}
document.querySelector(".runners").innerHTML=str
}

function reset(){
for(runner in runners){
    document.querySelector(`.${runner}`).style.left=0
}
}

// function setChances(){
    
//     for (runner in runners){ //190
//         runners[runner].chance=runners[runner].step /190
//     }
// }

function run(){
   const num= Math.random()

   let choosenRunner=''
  
   if(num<=0.25){
    choosenRunner='chick'
   }else if( num<=0.50&&num>0.25){
    choosenRunner='duck'
   }else if(num>0.50&&num<=0.75){
    choosenRunner='horse'
   }else{
    choosenRunner='dog'
   }
   document.querySelector(`.${choosenRunner}`).classList.add('marker')
   
   setTimeout(()=>{
    const left= document.querySelector(`.${choosenRunner}`).style.left
    document.querySelector(`.${choosenRunner}`).style.left= `${+left.split('px')[0]+runners[choosenRunner].step}px`

 document.querySelector(`.${choosenRunner}`).classList.remove('marker')
},1000)
}