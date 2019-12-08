import React from 'react'

const FormUserDetails = (props) => {
    const next=(e)=>{
        e.preventDefault();
props.nextStep()
    }

    const {values,handleChange}=props
    return (
        <div>
               <br/>
           <br/>
           <br/>   <br/>
           <br/>
           <br/>
           <form onSubmit={next}>
           <input type="text" name="firstName" onChange={handleChange}
           defaultValue={values.firstName}
           />
           <br/>
           <br/>
           <br/>
           <input type="text" name="lastName" onChange={handleChange}
           defaultValue={values.lastName}/>
           <br/>
           <br/>
           <br/>
            <input type="text" name="email" onChange={handleChange}
           defaultValue={values.email}/>
            <br/>
           <br/>
           <br/>
           <button type="submit">Next</button>
           </form>

        </div>
    )
}

export default FormUserDetails
