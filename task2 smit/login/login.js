import {signInWithPopup,GoogleAuthProvider,auth,signInWithEmailAndPassword,onAuthStateChanged } from "../firebass.js";







const provider = new GoogleAuthProvider();




let formFeild = document.querySelectorAll("form input");

const [loginEmail, loginPassword] = formFeild;

let loginBtn = document.getElementById('loginBtn');
let forgotPass = document.getElementById('forgot-password');
let googleBtn = document.getElementById('googleBtn');




const Login = ()=>{
    event.preventDefault();
    signInWithEmailAndPassword(auth, loginEmail.value, loginPassword.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    Toastify({
        text: `Login Sucesfuly`,
        duration: 3000
        }).showToast();
        console.log(user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    Toastify({
        text: `${errorMessage}`,
        duration: 3000
        }).showToast();
  });
}
loginBtn.addEventListener('click',Login)



const forgotPassword = ()=>{
    sendPasswordResetEmail(auth, loginEmail.value)
  .then(() => {
    Toastify({
        text: `Password sent`,
        duration: 3000
        }).showToast();
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    Toastify({
        text: errorMessage,
        duration: 3000
        }).showToast();
       
    
  });
}
forgotPass.addEventListener('click',forgotPassword);

onAuthStateChanged(auth, (user) => {
    if (user) {
        window.location.href = '../dashboard/dashboard.html'
    } 
  });
  const googleSignIn = ()=>{
    signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      console.log(user);
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage)
     
    });
  }
  googleBtn.addEventListener('click',googleSignIn);

