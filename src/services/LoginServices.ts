// import { signInWithEmailAndPassword } from "firebase/auth";

// import { auth } from "../Config/FireBase";

// const firebaseLogin = {username: string, password: string} => {
//     return signInWithEmailAndPassword{auth,username,password}
// } 

// const LoginServices = {
//     firebaseLogin
// }

// export default LoginServices


import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();
signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    });