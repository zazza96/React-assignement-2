import { Button } from "../Button/Button"
import { Card } from "../UI/Card"
import classes from "./ErrorModal.module.css"

export const ErrorModal = props =>{


    return (
        <div>
            <div className={classes.backdrop} onClick={props.onDismissal}/>
            <Card className={classes.modal}>
                <header className={classes.header}>
                    <h2>{props.title}</h2>
                </header>
                <div className={classes.content}>
                    <p>{props.message}</p>
                </div>
                <footer className={classes.actions}>
                    <Button onClick={props.onDismissal}>Okay</Button>
                </footer>
            </Card>
        </div>    
    )
}