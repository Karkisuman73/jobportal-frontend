import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter } from 'react-router';
import  { Toaster } from 'react-hot-toast';
import { UserProvider } from './context/UserContext.tsx';

createRoot(document.getElementById('root')!).render(



  <StrictMode>
    <BrowserRouter>
    <UserProvider>
    <App 
    
    />
      </UserProvider>
    <ToastContainer/>
    <Toaster />
    </BrowserRouter>
  </StrictMode>
)
