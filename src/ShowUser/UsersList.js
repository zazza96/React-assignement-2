import { Card } from "../UI/Card"
import classes from "./UsersList.module.css"

export const UsersList = (props) => {
    return (
        <Card className={classes.users}>
            <ul className="users-list">
                {props.users.map((user) => (
                    <li key={user.id}>{user.name} ({user.age} years old)</li>
                ))}
            </ul>
        </Card>
    )
}