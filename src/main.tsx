import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { App } from './App.tsx'
import { NextUIProvider } from '@nextui-org/react'
import { Provider } from 'react-redux'
import { store } from './store/store.ts'

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <NextUIProvider>
        <main className='dark text-foreground bg-grayBg'>
          <App />
        </main>
      </NextUIProvider>
    </Provider>
  </React.StrictMode>
)
