import React from 'react'

const FormPersonalData = (props) => {
   const onSubmit=(e)=>{
e.preventDefault()
console.log(e)
   }
   const {values,handleChange,prevStep,nextStep}=props
    return (
      <form onSubmit={onSubmit}>
          <br/>
          <br/>
          <br/>
          <br/>
            <input type="text" name="occupation" onChange={handleChange}
           defaultValue={values.occupation}/>
             <br/>
          <br/>
          <br/>
          <br/>
             <input type="text" name="city" onChange={handleChange}
           defaultValue={values.city}/>
             <br/>
          <br/>
          <br/>
          <br/>
             <input type="text" name="bio" onChange={handleChange}
           defaultValue={values.bio}/>
             <br/>
          <br/>
          <br/>
          <br/>
           <button onClick={prevStep}>Back</button>
           <button type="submit" onClick={nextStep}> next</button>
      </form>
    )
}

export default FormPersonalData
