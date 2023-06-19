import './App.css'
import Navbar from './Navbar/navbar'
import LoginPage from './Login__Register/login__register'
import BeekeepingInspectionChecklist from './Bee checklist/bee_checklist_main'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state to indicate an error has occurred
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error or send it to an error reporting service
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Render fallback UI when an error occurs
      return <h1>Something went wrong.</h1>;
    }

    // Render the child components as-is
    return this.props.children;
  }
}


function App() {
  return (
    <div className='App'>
      {/* <Navbar /> */}
      <div className='container'>
        <ErrorBoundary>
          <LoginPage />
        </ErrorBoundary>
        {/* <BeekeepingInspectionChecklist /> */}
      </div>
    </div>
  );
}

export default App
