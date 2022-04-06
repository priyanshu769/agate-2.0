import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'
import { AuthProvider } from './Context/AuthContext'
import { AppProvider } from './Context/AppContext'

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <Router>
        <AppProvider>
          <App />
        </AppProvider>
      </Router>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)
