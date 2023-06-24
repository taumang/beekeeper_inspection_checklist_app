import './App.css'
import  {login}  from './pages/Login__Register/login'
import Navbar from './components/Navbar/navbar'
import BeekeepingInspectionChecklist from './pages/Bee checklist/bee_checklist_main'

export const App = () => {
  return (
    <div className='App'>
        <login/>
      {/* <div className='container'>
         {/* <Navbar />   
      </div> */}
          {/* <BeekeepingInspectionChecklist /> */}
      </div> 
    
  );
}

