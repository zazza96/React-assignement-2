import { Card } from "../UI/Card";
import classes from './AddUser.module.css';

export const AddUser = () => {
    const addUserHandler = (e) => {
        e.preventDefault();
    }
    return (
    <Card className={classes.input}> 
        <form onSubmit={addUserHandler}>
            <label htmlFor="username">Username</label>
            <input type="text" name="username" id="username"></input>
            <label htmlFor="age">Age</label>
            <input type="text" name="age" id="age"></input>
            <button type="submit" className="btn btn-primary">Add User</button>
        </form>
    </Card>
    )
}