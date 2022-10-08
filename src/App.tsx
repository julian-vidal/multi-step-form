import { FormEvent, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.scss'
import { useMultistepForm } from './useMultistepForm'
import { UserForm } from './components/UserForm'
import { AddressForm } from './components/AddressForm'
import { AccountForm } from './components/AccountForm'

type FormData = {
  firstName: string,
  lastName: string,
  age: number,
  street: string,
  city: string,
  state: string,
  zip: string,
  email: string,
  password: string
}

const INITIAL_DATA: FormData = {
  firstName: "",
  lastName: "",
  age: NaN,
  street: "",
  city: "",
  state: "",
  zip:"",
  email:"",
  password: ""
}


function App() {

  const [data, setData] = useState(INITIAL_DATA)

  const updateFields = (fields: Partial<FormData>) => {
    setData(prev => {
      return {...prev,...fields}
    })
  }

  // Importing components and functions from the custom hook "useMultiStepForm"
  const {steps, currentStepIndex, step, isFirstStep, isLastStep, back, next} = useMultistepForm([
    <UserForm {...data} updateFields={updateFields} />, 
    <AddressForm {...data} updateFields={updateFields}/>,
    <AccountForm {...data} updateFields={updateFields}/>
  ])

  // Form Validation
  const onSubmit = (event: FormEvent) => {
    event.preventDefault()

    if (!isLastStep) return next()
    alert("Succesful account creation")
    console.log({data})
  }

  return <div className='form-container'>
    <form action="" onSubmit={onSubmit}>
      <div className='step-counter'>
        {currentStepIndex + 1} / {steps.length}
      </div>
      {step}
      <div className='buttons-container'>
        {!isFirstStep && <button onClick={back} type="button" >Back</button>}
        
        <button type="submit">
          {isLastStep ? "Finish" : "Next" }
        </button>
        

      </div>
    </form>
  </div>
}

export default App
