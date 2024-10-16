//janker er phone.js file
// console.log('phone hunting')

//step 1
let loadPhone = async(searchText='13',isShowAll)=> {
    let res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
    let data = await res.json();
    let phones = data.data;
    // console.log(phones);
    displayPhones(phones,isShowAll);
}

let displayPhones = (phones,isShowAll) =>{
    // console.log(phones);
    let phoneContainer= document.getElementById('phone-container')
 // clear phone container cards before adding new cards
 phoneContainer.textContent = '';



//display show all button if there are more than 12 phones
let showAllContainer = document.getElementById('show-all-container')
if(phones.length>12 && !isShowAll){
showAllContainer.classList.remove('hidden')
}
else{
    showAllContainer.classList.add('hidden')
}

// console.log('is show all',isShowAll);


 //display only first 12 phones if not show all
// phones = phones.slice(0,12);//ei line ta m34-6 theke kete jabe er ag porjonto thakbe

if(!isShowAll){
    phones=phones.slice(0,12);
}

    phones.forEach(phone => {
        // console.log(phone);
        //2 create a div
        let phoneCard = document.createElement('div');
        phoneCard.classList = `card bg-gray-100 p-4 shadow-xl`

//3 set innerHTML
        phoneCard.innerHTML=`
        <figure>
                  <img
                    src="${phone.image}"
                    alt="" />
                </figure>
            <div class="card-body">
                <h2 class="card-title">${phone.phone_name}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div class="card-actions justify-center">
                <button onclick="handleShowDetail('${phone.slug}')" class="btn 
                
                btn-primary">Show details</button>
                </div>
            </div>
        `;
        // show_details_modal.showModal()ekhane ekadhik function call kora hoiche
        //"handleShowDetail('${phone.slug}')" eikhane single cot e dite hbe karon baire dubble cot
//4append child
        phoneContainer.appendChild(phoneCard);

    });
    //hide loading spinner
toggleLoadingSpinner(false);
    
}

//
//m34-7  set data load krteche
const handleShowDetail = async (id) => {
    // console.log('clicked show details', id)
    // load single phone data
    const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`);
    const data = await res.json();
    // console.log(data);

    let phone = data.data;
    showPhoneDetails(phone)

}
//?eta diye optional / ternary ba jodi na thake dekhabona
let showPhoneDetails = (phone)=>{
    console.log(phone);
    let phoneName = document.getElementById('show-detail-phone-name')
    phoneName.innerText=phone.name;

    let showDetailContainer = document.getElementById('show-detail-container');
    showDetailContainer.innerHTML=`
     <img src="${phone.image}" alt="" />
     <p><span>Storage:</span>${phone?.mainFeatures?.storage}</p>
        <p><span>GPS:</span>${phone.others?.GPS || 'No GPS available'}</p>
        <p><span>GPS:</span>${phone.others?.GPS ? phone.others.GPS : 'No GPS available in this device'}</p>
    
    `
    // show the modal
    show_details_modal.showModal()
}



//handle search buuton
let  handleSearch=(isShowAll) =>{
    toggleLoadingSpinner(true);
    let searchField = document.getElementById('search-field');
    let searchText = searchField.value;
    console.log(searchText);
    loadPhone(searchText, isShowAll)
}
//handle search recap
// eta m34-6 er jnno comnt rakha hoiche m4-6 er ag porjonto kaj korbe
// let handleSearch2=()=>{
//     toggleLoadingSpinner(true);
//     let searchField = document.getElementById('search-field2')
//     let searchText = searchField.value;
//     loadPhone(searchText);
// }



let toggleLoadingSpinner=(isLoading) =>{
    let loadingSpinner = document.getElementById('loading-spinner');
   if(isLoading){
    loadingSpinner.classList.remove('hidden')
   }
   else{
    loadingSpinner.classList.add('hidden');
   }
}
//handle show all
let handleShowAll = ()=>{
    handleSearch(true);

}

//button e call diye load krte hbe data r na hoy call krte hbe
loadPhone();

//no data available krte hbe
//task git AI-universe-hub