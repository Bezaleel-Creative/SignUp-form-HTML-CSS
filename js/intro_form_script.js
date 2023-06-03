// alert("I'm Connected")

const submit  = document.querySelector('#sub');
const form  = document.querySelector('form');

const fName = document.querySelector('#fname')
const ame = document.querySelector('h1')

var firstNameError = document.querySelector('.errorInfo1')
var lastNameError = document.querySelector('.errorInfo2')
var emailError = document.querySelector('.errorInfo3')
var passwordError = document.querySelector('.errorInfo4')


// alert(fName.value.length)

form.addEventListener('submit', function(){
        // alert(fName.value)
        if (fName.value.length == 0){
                firstNameError.style.display = 'block';
        }
        
});


