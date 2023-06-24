import './App.css'
import Navbar from './components/Navbar/navbar'
import LoginPage from './pages/Login__Register/login__register'
import BeekeepingInspectionChecklist from './pages/Bee checklist/bee_checklist_main'

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
