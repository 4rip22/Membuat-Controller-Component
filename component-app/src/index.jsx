import React from 'react';
import {createRoot} from 'react-dom/client';

class MyForm extends React.Component{
    render(){
        return(
            <div>
                 <h1>Register Form</h1>      
            <form>
               <label htmlFor="name">Name: </label>
               <input id="name" type="text" />
               <br/>
               <label htmlFor="email">Email: </label>
               <input id="email" type="email"></input>
               <br/>
               <label htmlFor="gender">Gender: </label>
               <select  id="gender">
                <option value="Man">Man</option>
                <option value="Woman">Woman</option>
               </select>
               <br/>
               <button type="submit">Submit</button>
            </form>
            </div>
        )
    }
}
const root = createRoot(document.getElementById('root'));
root.render(<MyForm />);