// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, createUserWithEmailAndPassword, setPersistence, browserSessionPersistence, updateProfile } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-auth.js";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCUtIm5ARJV3eQQ6CYmDlOoALE28xAE4Bk",
    authDomain: "mindcare-ac-lk.firebaseapp.com",
    projectId: "mindcare-ac-lk",
    storageBucket: "mindcare-ac-lk.firebasestorage.app",
    messagingSenderId: "579299286594",
    appId: "1:579299286594:web:7736a8c5cf5b24482817db",
    measurementId: "G-PT8CE21PVP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

//submit
document.addEventListener("DOMContentLoaded", function () {
    const submitButton = document.getElementById('rsubmit');

    submitButton.addEventListener("click", function (event) {
        console.log('Button clicked');
        event.preventDefault();  // Prevent form submission

        var pass = document.getElementById("rpassword").value;
        var cpass = document.getElementById("rcpassword").value;

        if (pass != cpass) {
            //alert("Password not match");
            document.getElementById("erorrpass").style.backgroundColor = "red";
            document.getElementById("erorrpass").style.color = "White";
            document.getElementById("erorrpass").style.padding = "10px";
            document.getElementById("erorrpass").style.fontWeight = "bold";
            document.getElementById("erorrpass").innerHTML = "Passwords do not match. Please check and try again..!";
        } else {
            //inputs
            const name = document.getElementById('name').value;
            const email = document.getElementById('remail').value;
            const password = document.getElementById('rpassword').value;

            setPersistence(auth, browserSessionPersistence)
                .then(() => {
                    return createUserWithEmailAndPassword(auth, email, password)
                })
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: name,
                    })
                    document.getElementById("erorrpass").style.backgroundColor = "Green";
                    document.getElementById("erorrpass").style.color = "White";
                    document.getElementById("erorrpass").style.padding = "10px";
                    document.getElementById("erorrpass").style.fontWeight = "bold";
                    document.getElementById("erorrpass").innerHTML = "Your account successfully created!";
                    setTimeout(function () {
                        window.location.reload();
                    }, 5000);
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    document.getElementById("erorrpass").style.backgroundColor = "red";
                    document.getElementById("erorrpass").style.color = "White";
                    document.getElementById("erorrpass").style.padding = "10px";
                    document.getElementById("erorrpass").style.fontWeight = "bold";
                    document.getElementById("erorrpass").innerHTML = errorMessage;
                    // ..
                });
        }
    });

});