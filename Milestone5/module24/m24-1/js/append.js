//append.js m24-8 er jnno

//1.where do add
let placesList = document.getElementById('places-list')
// console.log(placesList);

//2.what do be added
let li = document.createElement('li');
li.innerText='pahartoli bon';

//3.add the child
placesList.appendChild(li);


//if i create a section step1.where to add
let mainContainer = document.getElementById('main-container');
// console.log(mainContainer);

//step:2 what do added
let section = document.createElement('section');
let h1 = document.createElement('h1');
h1.innerText='my food list';
section.appendChild(h1);


let ul = document.createElement('ul')
let li1 = document.createElement('li')
li1.innerText='biriyani'
ul.appendChild(li1);

let li2 = document.createElement('li')
li2.innerText='borhani'
ul.appendChild(li2);

let li3 = document.createElement('li')
li3.innerText='salat'
ul.appendChild(li3);

section.appendChild(ul)
mainContainer.appendChild(section);
//ai jinis ta important je maniContainer er sthe add kra notun section ke



//set innerHTMLdirectly
let sectionDress = document.createElement('section');
sectionDress.innerHTML = `
<h1>My dress section</h1>
<ul>
<li>T-shirt</li>
<li>lungi</li>
<li>T-shirt</li>
<li>genji</li>
</ul>
`

mainContainer.appendChild(sectionDress)