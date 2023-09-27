import { Card } from "../UI/Card";
import { Button } from "../Button/Button";
import classes from './AddUser.module.css';
import React,{useState} from "react";
import { ErrorModal } from "../ErrorModal/ErrorModal";


export const AddUser = (props) => {

    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');

    const [error,setError] = useState(''); //error management state

    const addUserHandler = (e) => {
        e.preventDefault();
        if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: "Invalid Input",
                message: "Please enter a username or password"
            })
            return;
        }
        if(+enteredAge < 1) {
            setError({
                title: "Invalid Input",
                message: "Age is an invalid number, please enter a valid age (1 years old or above)"
            })
            return;
        }
        props.onAddUser(enteredUsername, enteredAge);
        setEnteredAge('');
        setEnteredUsername('');
    }

    const usernameChangedHandler = (e) => {
        setEnteredUsername(e.target.value);
    }

    const ageChangedHandler = (e) => {
        setEnteredAge(e.target.value);
    }

    const errorHandler = () => {
        setError(null)
    }

    return (
        <>
        {error && <ErrorModal title={error.title} message={error.message} onDismissal={errorHandler}></ErrorModal>}
        
            <Card className={classes.input}> 
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" id="username" value={enteredUsername} onChange={usernameChangedHandler}></input>
                    <label htmlFor="age">Age</label>
                    <input type="text" name="age" id="age" value={enteredAge} onChange={ageChangedHandler}></input>
                    <Button type="submit">Add User</Button> 
                </form>
            </Card>
        </>
    
    )
}