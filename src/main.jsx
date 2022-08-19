import React from 'react'
import ReactDOM from 'react-dom/client'
import JournalApp from './JournalApp'
import {BrowserRouter} from "react-router-dom"
import { store } from './store/store'
import './styles.css'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
      <BrowserRouter>
        <React.StrictMode>
          <JournalApp />
        </React.StrictMode>
      </BrowserRouter>
    </Provider>
)
