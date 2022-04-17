import React, {useState} from 'react';
import './App.css';

function App() {

    const [name , setName] = useState('');
    const [age , setAge] = useState('');


const handleNameChange=(e)=>{
  setName(e.target.value);
}

const handleAgeChange=(e)=>{
  setAge(e.target.value);
}

const handleSubmit=(e)=>
{
 console.log('submit');
  e.preventDefault();
}
  return (
    <div className='App'>
      <header className='Manage-Account'>
        <form onSubmit={(e)=>{handleSubmit(e)}}>
        <label >
          Name:
        </label><br/>
        <input type="text" value={name} required onChange={(e) => {handleNameChange(e)}} /><br/>
        <label>
          Age:
        </label><br/>
        <input typr="text" value={age} required onChange={(e)=>{handleAgeChange(e)}} /><br/>
        <input type="submit" value="Submit"/>
        </form>
      </header>

    </div>
  );
}


export default App;
