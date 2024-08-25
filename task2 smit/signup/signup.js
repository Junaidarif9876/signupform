import { auth,createUserWithEmailAndPassword,onAuthStateChanged } from "../firebass.js";

let formFeild = document.querySelectorAll("form input");
const [userEmail, userPassword] = formFeild;




let signUpBtn = document.getElementById('signUpBtn');



const signUp = ()=>{
    event.preventDefault();
    signUpBtn.innerHTML = 'loading...........'
    createUserWithEmailAndPassword(auth, userEmail.value,userPassword.value)
  .then((userCredential) => {
    signUpBtn.innerText = 'SignUp'
    const user = userCredential.user;
    Toastify({
        text: `suceesfully signup`,
        duration: 3000
        }).showToast();
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    signUpBtn.innerText = 'SignUp'
    Toastify({
        text: `${errorMessage}`,
        duration: 3000
        }).showToast();
  });
}





signUpBtn.addEventListener('click',signUp);


function loaderAnimation(){
    const loader = document.querySelector("#loader");
setTimeout(function(){
    loader.style.top = "-100%"
},4200)
}
loaderAnimation();

onAuthStateChanged(auth, ( user) => {
    if ( user) {
        window.location.href = '../login/login.html'
    } 
  });
 