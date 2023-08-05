import classes from './InfoItem.module.css';

const InfoItem = props => {
  return (
    <div className={classes.body}>
      <div className={classes.icon}>
        {props.icon}
      </div>
      <div className={classes.labels}>
        <p className={classes.labels__title}>{props.title}</p>
        <p className={classes.labels__detail}>{props.value}</p>
      </div>
    </div>
  );
}

export default InfoItem;