
import React from "react";
import './../styles/App.css';
import Header from "./Header";

const App = () => {
  return (
   
      <Header 
       header={<h1>Welcome to my website</h1>}
       footer={<p>This is the content of my website.</p>}
      >

        <p>This is the main content of the page.</p>
        
      </Header>
  
  )
}

export default App
