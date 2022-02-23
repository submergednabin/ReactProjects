import './Card.css';

const Card = (props) => {
    // Declaring default const className : 'card' 
    //and passing another className as well for other component for styling
    const classes = 'card ' + props.className;

    return <div className={classes}>{props.children}</div>
}
export default Card;