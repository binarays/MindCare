// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-auth.js";

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

onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in, fetch user details
        const userName = user.displayName;
        const email = user.email;

        // Update the HTML with the user's displayName
        document.getElementById("username").textContent = userName || "No display name set";
        const link = document.querySelector('a.cta-btn');  // Get the link by its class
        link.href = "userdashboard.html";

        // Optionally, you can use other user details as well
        console.log("User email:", email);
        console.log("User UID:", user.uid);
    } else {
        // User is not signed in
        console.log("No user is signed in.");
    }
});