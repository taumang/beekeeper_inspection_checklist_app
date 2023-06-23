import './App.css'
import Navbar from './Navbar/navbar'
import LoginPage from './Login__Register/login__register'
import BeekeepingInspectionChecklist from './Bee checklist/bee_checklist_main'

function App() {
  return (
    <div className='App'>
       <Navbar /> 
      <div className='container'>
        
          {/* <LoginPage /> */}
        
        <BeekeepingInspectionChecklist />
      </div>
    </div>
  );
}

export default App
