import React from 'react';
import {createRoot} from 'react-dom/client';

class MyForm extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            name: '',
            email: '',
            gender: 'Man'
        };
        this.onNameChangeEventHandler = this.onNameChangeEventHandler.bind(this);
        this.onEmailChangeEventHandler = this.onEmailChangeEventHandler.bind(this);
        this.onGenderChangeEventHandler = this.onGenderChangeEventHandler.bind(this);
    }
    onNameChangeEventHandler(event){
        this.setState(() => {
            return {
                name: event.target.value
            }
        })
    }
    onEmailChangeEventHandler(event){
        this.setState(() => {
            return {
                email: event.target.value
            }
        })
    }
    onGenderChangeEventHandler(event){
        this.setState(() => {
            return {
                gender: event.target.value
            }
        })
    }

    render(){
        return(
            <div>
                <h1>Register Form</h1>      
                <form>
                    <label htmlFor="name">Name: </label>
                    <input id="name" type="text" value={this.state.name} onChange={this.onNameChangeEventHandler}/>
                    <br/>
                    <label htmlFor="email">Email: </label>
                    <input id="email" type="email" value={this.state.email} onChange={this.onEmailChangeEventHandler}></input>
                    <br/>
                    <label htmlFor="gender">Gender: </label>
                    <select  id="gender" value={this.state.gender} onChange={this.onGenderChangeEventHandler}>
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