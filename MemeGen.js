document.addEventListener("DOMContentLoaded", function(e){
    e.preventDefault();
 const letters = document.querySelectorAll('.letter');

 function randomRgb(){
     const r = Math.floor(Math.random() * 256);
     const g = Math.floor(Math.random() * 256);
     const b = Math.floor(Math.random() * 256);
     return`rgb(${r},${g},${b})`
 }
 
 setInterval(function(){
     for (let letter of letters) {
     letter.style.color = randomRgb();
     }
 }, 500)

 var memeForm = document.getElementById("meme-form");
 var listGallery = document.querySelector(".gallery");

memeForm.addEventListener("submit", function(event){
  event.preventDefault();

 var memeLi = document.createElement('li');
 memeLi.classList.add("meme-img");

     var topText = document.getElementById("text-top");
     var urlInput = document.getElementById('uploaded-img').value,
     src =  urlInput,
     img = document.createElement('img');
     img.src = src;

 var topTextDiv = document.createElement('div');
 topTextDiv.classList.add("text", "top");
 topTextDiv.innerText = document.getElementById("text-top").value;

 var bottomTextDiv = document.createElement('div');
 bottomTextDiv.classList.add("text", "bottom");
 bottomTextDiv.innerText = document.getElementById("text-bottom").value;

 var removeDiv = document.createElement('div');
 removeDiv.classList.add("delete");
 removeDiv.innerText = "X";
 removeDiv.style.color = "black";

listGallery.appendChild(memeLi);
memeLi.appendChild(img);
memeLi.appendChild(topTextDiv);
memeLi.appendChild(bottomTextDiv);
memeLi.appendChild(removeDiv);

 memeForm.reset();

 });

function remove(event){
event.target.parentNode.remove();
}

listGallery.addEventListener('click', remove, false);

});