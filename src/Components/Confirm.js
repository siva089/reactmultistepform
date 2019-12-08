import React from 'react'

const Confirm = (props) => {
    const onSubmit=(e)=>{
        e.preventDefault()
      props.submit()
    
           }
           const {values,handleChange,prevStep,nextStep}=props
            return (
              <form onSubmit={onSubmit}>
                    <br/>
          <br/>
          <br/>
          <br/>
                    <input type="text" name="occupatio" onChange={handleChange}
                   defaultValue={values.occupatio}/>
                     <br/>
          <br/>
          <br/>
          <br/>
                     <input type="text" name="cit" onChange={handleChange}
                   defaultValue={values.cit}/>
                      <br/>
          <br/>
          <br/>
                     <input type="text" name="bi" onChange={handleChange}
                   defaultValue={values.bi}/>
                     <br/>
          <br/>
          <br/>
          <br/>
                   <button onClick={prevStep}>Back</button>
                   <button type="submit"> save</button>
              </form>
            )
}

export default Confirm
