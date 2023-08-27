import classes from './Title.module.css';
import { TbBrandReactNative } from 'react-icons/tb';

const Title = props => {
  const iconColor = props.iconColor ?? 'gray';
  const borderBottomColor = props.borderBottomColor ?? 'lightgray';
  
  return (
    <div className={classes.title} style={{ color: props.color }}>
      <TbBrandReactNative size={50} color={iconColor} />
      <div className={classes.title__text} style={{ borderBottomColor }}>
        {props.text}
      </div>
    </div>
  );
};

export default Title;