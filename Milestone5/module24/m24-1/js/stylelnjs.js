// m24-6          er comment ei type er //..//
//stylelnjs.js m24-6 er jnno     for each holo element er jnno kintu elements er jnno na


let sections = document.querySelectorAll('section')
// console.log(sections);
for(let section of sections){
    // console.log(section);

    //abr jodi style change krte cai
    section.style.border='2px solid steelblue';
    section.style.marginBottom='5px';
    section.style.borderRadius='15px';
    section.style.padding='7px';
    section.style.backgroundColor='lightgray' 
}

//jodi background color set krte chai specific kawke
// let placesContainer = document.getElementById('places-container')
// placesContainer.style.backgroundColor='yellow';

//vvip connect styles and html
let placesContainer = document.getElementById('places-container');
placesContainer.classList.add('yellow-bg');
//or
// placesContainer.classList.add('text-center');


//jodi kichu remove krte chai jemon ei class remove krbo
placesContainer.classList.remove('large-text')




//search google dom node
//m24-7 er jnno...console e cheak krbo
// let placesContainer = document.getElementById('places-container')
// enter 
// placesContainer
//enter
//placesContainer.childNodes
//refresh
// placesContainer.firstChild
//refresh
// placesContainer.childNodes
// enter 
// placesContainer.childNodes[1]
//enter
//placesContainer.childNodes[3].childNodes

//placesContainer.childNodes[3].childNodes[5]
//enter
//placesContainer.childNodes[3].childNodes[5].nextSibling othoba previousSibling o dekhte parbo
//refresh
//let placesUL = document.querySelector('#places-container ul')
//enter
//placesUL
//refresh
//document.createElement('p')
//enter
//document.createElement('span')
//enter
//document.createElement('div')
//enter
//document.createElement('div')
//enter
//document.createElement('li')
//enter
//document.createElement('section')

//refreash
//const li = document.createElement('li')
//enter
//li.innerText='Brand new place to go'
//enter
//li
//enter
//placesUL
//placesUL.appendChild(li)     //append holo push er mto

// const li2 = document.createElement('li')
//enter
//li2.innerText='another dynamic li'
//enter
// placesUL.appendChild(li2)

//nicher gula emni cheack krar jnno
//enter
//placesUL
//enter
//placesUL.parentNode
//enter
//placesUL.parentNode.parentNode
//enter
//placesUL.parentNode.parentNode.parentNode


