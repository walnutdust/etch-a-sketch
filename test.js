const container = document.querySelector('#container');

const num = 16;

let col = 'black';
let rand = false;


for(let i = 0; i<num;i++){
  for(let j = 0; j<num;j++){
    let content = document.createElement('div');
    content.classList.add('content');
    content.addEventListener('mouseleave',function (e){
      console.log(e);
      if (rand === true) {
        e.target.style.background = "rgb("+Math.floor(Math.random()*256) + ","+
        Math.floor(Math.random()*256) + "," + Math.floor(Math.random()*256) + ")";
      }
      else e.target.style.background = col;
    })
    container.appendChild(content);
  }
}


const blackbutton = document.querySelector('#blackbutton');
const randombutton = document.querySelector('#randombutton');
const custombutton = document.querySelector('#custombutton');
const clearbutton = document.querySelector('#clearbutton');

const buttons = document.querySelectorAll('.but');

function resetColor(){
  buttons.forEach(function (element){
    element.style.backgroundColor = 'white';
    element.style.border = 'solid black 2px';
    element.style.color = 'black';
  })
}


blackbutton.addEventListener('click', function (e){
  console.log(e);
  col = 'black';
  rand = false;
  resetColor();
  e.target.style.backgroundColor = 'black';
  e.target.style.border = 'solid white 2px';
  e.target.style.color = 'white';
})

randombutton.addEventListener('click', function (e){
  console.log(e);
  rand = true;
  resetColor();
  e.target.style.backgroundColor = 'black';
  e.target.style.border = 'solid white 2px';
  e.target.style.color = 'white';
})

custombutton.addEventListener('click', function (e){
  console.log(e);

  blabel: try{
    let r = prompt("Please enter the R value of the RGB of your desired colour", -1);
    if(r==null) break blabel;
    while(!(0<= r && r< 256)){
      r = prompt("Please enter the R value of the RGB of your desired colour", -1);
    }
    let g = prompt("Please enter the G value of the RGB of your desired colour", -1);
    if(g==null) break blabel;
    while(!(0<= g && g< 256)){
      g = prompt("Please enter the G value of the RGB of your desired colour", -1);
    }
    let b = prompt("Please enter the B value of the RGB of your desired colour", -1);
    if(b==null) break blabel;
    while(!(0<= b && b< 256)){
      if(b==null) break blabel;
      b = prompt("Please enter the B value of the RGB of your desired colour", -1);
    }

    col = "rgb("+ r+ ","+ g + "," + b+ ")";
    rand = false;
    resetColor();
    e.target.style.backgroundColor = col;
    e.target.style.border = 'solid white 2px';
    e.target.style.color = 'white';
  }

  catch(err){

  }
})

clearbutton.addEventListener('click', function (e){
  console.log(e);

  size = Math.floor(prompt("Please enter the number of squares per side of the grid:"));
  while(size <0 || size == null){
    size = Math.floor(prompt("Invalid entry. Please enter the number of squares per side of the grid: "));
  }

  let contents = document.querySelectorAll('.content');
  contents.forEach(function(element){
    element.style.backgroundColor = 'white';
    container.removeChild(element);
  })

  container.style.setProperty("--rowNum",size);
  container.style.setProperty("--colNum",size);

  for(let i = 0; i<size;i++){
    for(let j = 0; j<size;j++){
      let content = document.createElement('div');
      content.classList.add('content');
      content.addEventListener('mouseleave',function (e){
        console.log(e);
        if (rand === true) {
          e.target.style.background = "rgb("+Math.floor(Math.random()*256) + ","+
          Math.floor(Math.random()*256) + "," + Math.floor(Math.random()*256) + ")";
        }
        else e.target.style.background = col;
      })
      container.appendChild(content);
    }
  }

})
