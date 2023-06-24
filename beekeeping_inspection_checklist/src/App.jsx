import './App.css'
import Navbar from './components/Navbar/navbar'
import BeekeepingInspectionChecklist from './pages/Bee checklist/bee_checklist_main'

function App() {
  return (
    <div className='App'>
        <Navbar />  
      <div className='container'>
        
        <BeekeepingInspectionChecklist />
      </div>
    </div>
  );
}

export default App
