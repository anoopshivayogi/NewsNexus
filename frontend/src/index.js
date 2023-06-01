import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter>
          <Auth0Provider
            domain="dev-xq4hratb1ugwnf72.us.auth0.com"
            clientId="qbcWyi8AYXdJpEvQLjkKy1nvsCByRvaE"
            redirectUri={window.location.origin}
            onRedirectCallback={() => {}}
            useRefreshTokens={true}
            cacheLocation="localstorage" // Use local storage for token cache
          >
        <Routes>
            <Route path="/*" element={ <App/> } />
        </Routes>
    </Auth0Provider>
      </BrowserRouter>
    </ChakraProvider>
  // </React.StrictMode>
);