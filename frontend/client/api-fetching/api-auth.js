/* This provide methods to fetch sigin-in and sigin-out API endpoint */




/* the signin method will take user sign-in data from the view component 
   then uses fetch to make a POST request to verify user with the backend */
const signin = async (user) => {
    try {
        let res = await fetch('/auth/signin/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify(user)
        })
        //return response from server as a promise which may provide the JWT if sign-in was successful
        return await res.json()
    } catch(err) {
        console.log(err)
    }
}


/* the signout method will use fetch to make a GET request
   to the signout API endpoint on the sever  */
const signout = async (url='/auth/signout/') => {
    try {
        let res = await fetch(url, { method: 'GET' })

        //return response from server as a promise
        return await res.json()
    } catch (err) {
        console.log(err)
    }
}



export {
    signin,
    signout
}