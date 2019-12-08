import React, { Component } from 'react'
import FormUserDetails from "./FormUserDetails.js"
import FormPersonalData from "./FormPersonalData"
import Confirm from "./Confirm"
import Success from "./Success"
class UserForm extends Component {
    constructor(props){
        super(props)
       this.state={ step:1,
        firstName:"",
        lastName:"",
        email:"",
        occupation:"",
        city:'',
        bio:'',
        occupatio:"",
        cit:'',
        bi:''
    }
    }
    submit=(e)=>{
        console.log(this.state)
        this.nextStep()
    }

    nextStep=()=>{
        const {step}=this.state;
        this.setState({step:step+1})
    }
    prevStep=()=>{
        const {step}=this.state;
        this.setState({step:step-1})
    }
    handleChange=(e)=>{
this.setState({[e.target.name]:e.target.value})
    }
    render() {
        const {step,firstName,lastName,email,occupation,city,bio,occupatio,cit,bi}=this.state
        const values={firstName,lastName,email,occupation,city,bio,occupatio,cit,bi}
      switch(step){
          case 1:
              return(
            <FormUserDetails nextStep={this.nextStep} handleChange={this.handleChange} values={values} />)
         case 2:
             return(
                 <FormPersonalData nextStep={this.nextStep} handleChange={this.handleChange} values={values} prevStep={this.prevStep} />
             )
             case 3:
                 return <Confirm nextStep={this.nextStep} handleChange={this.handleChange} values={values} prevStep={this.prevStep} submit={this.submit} />
             case 4:
                 return <h1>success 

<h3>values are</h3>

                 </h1>     


      }
    }
}
export default  UserForm
