
const gallery = document.querySelector('#gallery');

const init = async()=>{




let id;
async function getWorks(){
const reponse = await fetch('http://localhost:5678/api/works')
const data = await reponse.json()
return data
}
const works = await getWorks()

console.log(works)
for (let i=0; i< works.length; i++) {
	const figure = document.createElement("figure"); 

const img = document.createElement("img");
img.src = works[i].imageUrl;
img.alt = works[i].title;
figure.appendChild(img);
const figcaption = document.createElement("figcaption");
figcaption.innerHTML = works[i].title;
figure.appendChild(figcaption);
console.log(gallery)
gallery.appendChild(figure)

}
}
init()

