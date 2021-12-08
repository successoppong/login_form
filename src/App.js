
import './App.css';

function App() {
  return (
   
      
      <div className="container">
      <h1> Login Form </h1>
      <form className="login_form"> 
       <div className="form_control"> 
         <label> Username </label>
         <input type="text"/>
       </div>
        
       <div className="form_control">  
         <label> Password </label>
         <input type="password"/>
       </div>
        
         <div className="button">  
        <button> submit </button>
       </div>
      </form>
    
    </div>
    
  );
}

export default App;
