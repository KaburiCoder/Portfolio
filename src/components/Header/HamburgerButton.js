
import classes from './HamburgerButton.module.css';
import { RxHamburgerMenu } from 'react-icons/rx';

const HamburgerButton = (props) => {
  return (
    <button onClick={props.onClick} className={classes.button}>
      <RxHamburgerMenu size={24}/>
    </button>
  );
};

export default HamburgerButton;