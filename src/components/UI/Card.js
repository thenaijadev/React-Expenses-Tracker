import "./Card.css";

const Card = (props) => {
  const classes = "card " + props.className;
  // "props.children allows you to build a custom wrapper div around html elements. also the props.className allows you to append class to use in that custom wrapper component"
  return <div className={classes}>{props.children}</div>;
};

export default Card;
