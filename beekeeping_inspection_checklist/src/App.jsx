import './App.css'
import Navbar from './Navbar/navbar'

import BeekeepingInspectionChecklist from './Bee checklist/bee_checklist_main'

function App() {
  
  return (
    <div className='App'>
      <Navbar/>
        <div className='container'>
          
          <BeekeepingInspectionChecklist/>
        </div>
    </div>
  )
}

export default App
