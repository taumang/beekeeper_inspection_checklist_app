import './App.css'
// import  {login}  from './pages/Login__Register/login'
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login_page  from './pages/login_page';




const App = () => {
  return (
    // <Router>
    //   <div className="min-h-screen bg-gray-100 flex justify-center items-center">
    //     <Switch>
    //       <Route path="/" exact component={login_page} />
    //     </Switch>
    //   </div>
    // </Router>

    <>
    <Login_page/>
    </>
  );
}

export default App