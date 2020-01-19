// get the modal element
var modal = document.getElementById('simpleModal');
//get open modal button
var modalBtn = document.getElementById('modalBtn');
// get close button
var closeBtn = document.getElementsByClassName('closeBtn')[0];

//listen for open click
modalBtn.addEventListener('click', openModal);

//listen for close click
closeBtn.addEventListener('click', closeModal);

//listen for outlide click
window.addEventListener('click', outsideClick);

// open modal function
function openModal(){
    // console.log(123); test
    modal.style.display = 'block';
}

// open modal function
function closeModal(){
    modal.style.display = 'none';
}

// open modal function
function outsideClick(e){
    if(e.target == modal){
       modal.style.display = 'none'; 
    }
    
}