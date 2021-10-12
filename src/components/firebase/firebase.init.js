import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializeAuthentication = () => {
    initializeApp(firebaseConfig);
}

export default initializeAuthentication;


/*
steps for authentication
-----------------------
Step-1: Initial Setup
1. firebase: create project
2. create web app
3. get configuration
4. initialize firebase
5. Enable auth method
-------------------
Step-2: set up component
1. Create login component
2. Create Register component
3. Create Route for Login and register
-------------------
step3: set auth system
1.set up sign in method
2.set up signout method
3.user state
4.special observer
5.return necessry method and states form useFirebase
-----------------
step-4: create auth context hook(useAuth)
1.create a auth context
2.create context provider
3.set context provider value
4.use Auth Provider
5.create useAuth hook
---------------------
step-5: create private route
1.create private Route
2.set private route
----------------------
step-6: redirect after login
1.
*/