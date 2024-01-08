const gallery = document.querySelector('#gallery');
let filtre = document.querySelector(".filters");

let data = null;
let id;
const init = async()=>{
let id;
async function getWorks(){
	const reponse = await fetch('http://localhost:5678/api/works')
	const data = await reponse.json()
	return data
}
const works = await getWorks();
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

fetch("http://localhost:5678/api/categories")
.then(function(response) {
	if(response.ok) {
		return response.json();
	}
})
.then(function(data) {
	let categories = data;
	categories.unshift({id: 0, name: 'Tous'});
	console.log(categories);
	// Looping on each category
	categories.forEach((category, index) => {
		// Creation <button> to filter
		let myButton = document.createElement('button');
		myButton.classList.add('work-filter');
		myButton.classList.add('filters-design');
		if(category.id === 0) myButton.classList.add('filter-active', 'filter-all');
		myButton.setAttribute('data-filter', category.id);
		myButton.textContent = category.name;
		// Adding the new <button> into the existing div.filters
		document.querySelector(".filters").appendChild(myButton);
		// Click event <buttton> to filter
		myButton.addEventListener('click', function(event) {
			event.preventDefault();
			// Handling filters
			document.querySelectorAll('.work-filter').forEach((workFilter) => {
				workFilter.classList.remove('filter-active');
			});
			event.target.classList.add('filter-active');
			
		});
	});
})
