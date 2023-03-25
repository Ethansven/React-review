import { useState } from 'react';
import './App.css';
import Card from "./component/Card.jsx";
import TypeMe from './component/TypeMe';
import MyForm from './component/MyForm';
function App() {
    const user = {
      name: ["Witthawin Klairatsamee"],
      job: ["Student"],
      hobby: ["Whistle"]
    }
    const user1 = {
      name: ["Witthawin"],
      job: ["Programmer"],
      hobby: ["Read novel"]
    }
    const user2 = {
      name: ["Win"],
      job: ["Kid"],
      hobby: ["Listen to music"]
    }
    const userList = [user,user1,user2]
  
 
return (
    <div className="App">
       <div>
        {userList.map((e,i) => 
        (<Card user={e} key={i} />) 
        )}
      </div>

      <div>
        <TypeMe></TypeMe>
      </div>
      <MyForm></MyForm>
      
    </div>

    
    );
}
export default App;
