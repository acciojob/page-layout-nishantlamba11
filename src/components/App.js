
import React from "react";
import './../styles/App.css';
import Header from "./Header";

const App = () => {
  return (
   
      <Header 
       header={<h1>welcome to my site</h1>}
       footer={<p>© 2025 My Company</p>}
      >

        <p>This is the main content of the page.</p>
        
      </Header>
  
  )
}

export default App
