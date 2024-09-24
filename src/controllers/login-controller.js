import { reset_form_individually } from "../utils/Reset-form"



export const login_controler = (username,password,setUsername,setPassword) =>{
    console.log("Username :",username)
    console.log("Password :",password)
    reset_form_individually(setUsername,setPassword)
}

export default login_controler