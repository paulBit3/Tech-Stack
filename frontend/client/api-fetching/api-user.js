/* these methods provide functionalities to fetch API endpoints */

// import { Component } from "react"


/*---the create method take user data from 
    view component, then fetch to make POST call at the
    create API route '/api/users' */
const create = async (user, url = '/api/users/') => {
    try {
        let res = await fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user)
        })
        //return response from server as a promise
        return await res.json()
    } catch (err) {
        console.log(err)
    }
}


/* ---the list method. this method uses fetch to make a GET request 
      to  all the users in the DB */
const list = async (signal, url='/api/users/') => {
    try {
        let res = await fetch(url, {
            method: 'GET',
            signal: signal,
        })
        //return response from server as a promise
        return await res.json()
    } catch(err) {
        console.log(err)
    }
}


/* ---read method uses fetch to make a GET request to retrive a single user profile 
 the JWT is attached to GET fetch call in the Authorization*/
const read = async (params, credentials, signal) => {
    try {
        let res = await fetch('/api/users/' + params.userId, {
            method: 'GET',
            signal: signal,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + credentials.t
            }
        })
        //return response from server as a promise
        return await res.json()
    } catch(err) {
        console.log(err)
    }
}

/* 
---the update method take changed data from the view Component, then fetch 
   to make a PUT request to update existing data in the backend */
const update = async (params, credentials, user) => {
    try {
        let res = await fetch('/api/users/' + params.userId, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + credentials.t,
            },
            body: JSON.stringify(user)
        })
           //return response from server as a promise
        return await res.json()
    } catch(err) {
        console.log(err)
    }
}


/* ---the deleted method will allow the view component to delete 
  a specific data from the database and use fetch to make a DELETE request */
const remove = async (params, credentials) => {
    try {
        let res = await fetch('/api/users/', + params.userId, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + credentials.t,
            }
        })
        //return response from server as a promise
        return await res.json()
    } catch(err) {
        console.log(err)
    }
}

export {
    create, 
    list, 
    read, 
    update, 
    remove
}