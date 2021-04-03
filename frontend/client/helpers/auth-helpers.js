/*
this helper will help to manage auth state 
the way of storing, retrieving and deleting JWT credentials on the client-side */

import { signout } from "../api-fetching/api-auth.js";


const auth = {
        /* Retrieving credentials. this method retrieves the stored 
    credentials to check if the current user is signed in. */
    isAuthenticated() {
        if (typeof window == "undefined")
          return false
  
        if (sessionStorage.getItem('jwt'))
          return JSON.parse(sessionStorage.getItem('jwt'))
        else
          return false
    },

    /* the Saving credentials. the authenticate method 
    takes JWT credentials and a callback function. 
    It stores credentials in sessionStorage after ensuring window is defined */
    authenticate(jwt, cb ) {
        if (typeof window !== "undefined")
          sessionStorage.setItem('jwt', JSON.stringify(jwt))
        cb()
        
    },

    // deleting credentials. the clearJWT method will clear the stored JWT credentials from sessionStorage
    clearJWT(cb) {
        if (typeof window !== "undefined")
          sessionStorage.removeItem('jwt')

        //initialize the signout functionality
        cb()

        //optionally calling the signout API
        signout().then((data) => {
            document.cookie = "t=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
        })
    }
}

export default auth