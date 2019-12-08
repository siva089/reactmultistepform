import React from 'react'

const Success = (props) => {
    const onSubmit=(e)=>{
        e.preventDefault()
        console.log(e)
           }
           const {values,handleChange,prevStep,nextStep}=props
            return (
              <form onSubmit={onSubmit}>
                    <input type="text" name="occupation" onChange={handleChange}
                   defaultValue={values.occupation}/>
                     <input type="text" name="city" onChange={handleChange}
                   defaultValue={values.city}/>
                     <input type="text" name="bio" onChange={handleChange}
                   defaultValue={values.bio}/>
                   <button onClick={prevStep}>Back</button>
                   <button type="submit" onClick={nextStep}> next</button>
              </form>
            )
}

export default Success
