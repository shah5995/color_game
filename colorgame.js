var countsqr=6
var colors = generateRandomcolors(countsqr);
var square = document.querySelectorAll(".square");
var correct = pickColor();
var colordisplay= document.getElementById("display");
var h1=document.querySelector("h1");
var reset=document.querySelector("#reset");
var easybtn=document.querySelector("#easybtn");
var hardbtn=document.querySelector("#hardbtn");
var messageDisplay=document.querySelector("#message");
easybtn.addEventListener("click",function()
{
    easybtn.classList.add("selected");
    hardbtn.classList.remove("selected");
    reset.textContent="new colors";
    h1.style.background="steelblue";
    
    messageDisplay.textContent="";
    countsqr=3;
    colors = generateRandomcolors(countsqr);
    correct = pickColor();
    colordisplay.textContent=(correct);
    for(var i=0;i<square.length;i++)
    {
        if(colors[i])
        {
            square[i].style.background=colors[i];
        }
      else{
          square[i].style.display = "none";
      }
    
    }
})

hardbtn.addEventListener("click",function()
{
    hardbtn.classList.add("selected");
    easybtn.classList.remove("selected");
    reset.textContent="new colors";
    messageDisplay.textContent="";
    h1.style.background="steelblue";
    countsqr=6;
 colors = generateRandomcolors(countsqr);
    correct = pickColor();
    colordisplay.textContent=(correct);
    for(var i=0;i<square.length;i++)
    {
      //  if(colors[i])
        {
            square[i].style.background=colors[i];
        }
      
          square[i].style.display = "block";
      
    
    }
})
reset.addEventListener("click",function()
{
    
    colors = generateRandomcolors(countsqr);
    correct = pickColor();
    colordisplay.textContent=(correct);
    messageDisplay.textContent="";
    for(var i=0;i<square.length;i++)
{
    square[i].style.background = colors[i];

}
reset.textContent="new colors";
h1.style.background="steelblue";

});
colordisplay.textContent=(correct);
for(var i=0;i<square.length;i++)
{
    square[i].style.background = colors[i];



    
    square[i].addEventListener("click",function()
    {
        var clicked_color = this.style.background;
        console.log(clicked_color,correct);
        //console.log(correct);
     if(clicked_color === correct)
     {
         //alert("bingo got the correct one");
        messageDisplay.textContent="correct!";
         changecolor(clicked_color);
         h1.style.background = clicked_color;
         reset.textContent="Try again";
     }
     else{
         this.style.background="#232323";
      messageDisplay.textContent="wrong";
         //alert("try your luck again");
     }

    });
}
function changecolor(color)
{
    for(var i=0;i<square.length;i++)
    {
        square[i].style.background = color;
    }
}
function pickColor()
{
    var random_no=Math.floor(Math.random() * colors.length);
    return colors[random_no];
}

function generateRandomcolors(num)
{
    var arr=[];
    for(var i=0;i<num;i++)
    {
        arr.push(randomcolors());
    }
    return arr;
}
function randomcolors()
{
    var r,g,b;
    r=Math.floor(Math.random() * 256);
    g=Math.floor(Math.random() * 256);
    b=Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
