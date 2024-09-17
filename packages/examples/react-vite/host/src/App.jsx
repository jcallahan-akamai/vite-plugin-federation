import './App.css'
import { Component, lazy } from 'react'
import reactLogo from './assets/react.svg'
const RemoteApp = lazy(() => import('remoteApp/RemoteApp'))

function App() {
  return (
    <div className="App" style={{border: 'dashed 1px blue', padding: 16}}>
      <h1>This is the Host App</h1>
      <div className="remoteAppContainer" style={{border: 'solid 1px red'}}>,
        <ErrorBoundary>
          <RemoteApp />
        </ErrorBoundary>
      </div>
    </div>
  )
}

export default App

// This example from https://legacy.reactjs.org/docs/error-boundaries.html
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.log(error)
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <p>There was an error loading the remote app</p>;
    }

    return this.props.children; 
  }
}