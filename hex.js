const generatebtn=document.getElementById("generatebtn");
const colorbox=document.getElementById("colorbox");
const colortext=document.getElementById("colortext");

generatebtn.addEventListener("click",updatecolor)

function getrandomcolor(){
    const letters  = "0123456789ABCDEF";
    let color="#";
    for(let i=0;i<6;i++){
        color+=letters[Math.floor(Math.random()*16)];
        console.log(color);
    }
    return color;
}
function updatecolor(){
    const colorbox=document.getElementById("colorbox");
    const colortext=document.getElementById("colortext");   
    const randomColor=getrandomcolor();
    colorbox.style.backgroundColor=randomColor;
    colortext.textContent=randomColor;
}