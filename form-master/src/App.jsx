import './App.css'
// import ReusabeForm from './components/ReusableForm/ReusableForm'
// import HookForm from './components/HookForm/HookForm'
// import SimpleForm from './components/SimpleForms/SimpleForm'
// import StatefulForm from './components/SimpleForms/StatefulForm/StatefulForm'
// import RefForm from './components/RefForm/RefForm'

import GrandPa from "./components/GrandPa/GrandPa"




function App() {
  
//   const handelSignUpSubmit = data => {
//    console.log('sign up data', data);
//   }
// const handelUpdateProfile = data => {
//   console.log('update profile', data);
// }



  return (
    <>
      
       <h1>Form Master</h1>
       <GrandPa></GrandPa>
       {/* <SimpleForm></SimpleForm> */}
      {/* <StatefulForm></StatefulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <ReusabeForm formTitle={'Sign UP'} handelSubmit={handelSignUpSubmit}></ReusabeForm>
      <ReusabeForm formTitle={'Profile Update'} handelSubmit={handelUpdateProfile} submitBtnText='Update'></ReusabeForm>
      */}
    </>
  )
}

export default App
