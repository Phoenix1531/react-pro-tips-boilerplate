import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Forms = () => {
    const[formSubmit,setFormSubmit]=useState(false)
    const[formError,setFormerr]=useState({})
    const[formData,setFormdata]=useState({
        email:"",
        firstName:"",
        lastName:"",
        phone:""
    })
    const handleInputChange=e=>{
        let {name,value}=e.target
        setFormdata({
            ...formData,
            [name]:value
        })
        console.log(formData)
    }
    const formSubmitHandler=(e)=>{
        e.preventDefault()
        console.log(formData)
        let errors=validate(formData)
        setFormerr(errors)
        let arrkeyArray=Object.keys(errors)
        if(arrkeyArray.length===0){
            toast("Registration successful!")
            setFormSubmit(true)
        }else{
            setFormSubmit(false)
            toast("Registration not successful")
        }
    }
    const validate=(data)=>{
        let error={}
        if (data.firstName.trim()==""){
            error.firstName="Please enter your First name"
        }
        if (data.lastName.trim()==""){
            error.lastName="Please enter your Last name"
        }
        if (data.email.trim()==""){
            error.email="Please enter your email"
        } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(data.email.trim())) {
            error.email = 'Please enter a valid email';
            // toast('Please enter a valid 10-digit Phone number');
          }
        if (data.phone.trim()==""){
            error.phone="Please enter your Phone number"
        }
        if (data.phone.trim().length!=10){
            error.phone="Please enter a 10-digit Phone number"
        }
        return error
    }
    return (
        <div className='form-container'>
            <ToastContainer />
            <fieldset>
                <legend>Fill This Form</legend>
                <form action="">
                    {formSubmit && <div className='success'>
                        <p>Registration Successful</p>
                    </div> }
                    <label>First Name : </label>
                    <input type="text" name='firstName' onChange={handleInputChange}/>
                    {formError.firstName && <p className='err'>{formError.firstName}</p>}
                    <label>Last Name : </label>
                    <input type="text" name='lastName' onChange={handleInputChange}/>
                    {formError.lastName && <p className='err'>{formError.lastName}</p>}
                    <label>Email : </label>
                    <input type="email" name='email' onChange={handleInputChange} />
                    {formError.email && <p className='err'>{formError.email}</p>}
                    <label>Phone no : </label>
                    <input type="number" name='phone' onChange={handleInputChange}/>
                    {formError.phone && <p className='err'>{formError.phone}</p>}
                    <input type="submit" value={"Register"} onClick={formSubmitHandler}/>
                </form>
            </fieldset>
        </div>
    )
}

export default Forms