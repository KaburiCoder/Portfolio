import { useEffect, useState } from 'react';
import MenuItems from './MenuItems';
import classes from './PopupMenus.module.css';

const PopupMenus = props => {
  const display = props.display;
  const [popupDisplay, setPopupDisplay] = useState(false);

  function menuClickHandler(menuText) {
    props.onMenuSelected(menuText);
  }

  useEffect(() => {
    const tick = display ? 0 : 300;
    const timer = setTimeout(() => {
      setPopupDisplay(display);
    }, tick);

    return () => {
      clearTimeout(timer);
    };
  }, [display]);

  const popupClasses = display ? classes.popup : classes.close;
  return (
    <>
      {popupDisplay && (
        <div className={`${classes.main} ${popupClasses}`}>
          <MenuItems onClick={menuClickHandler}/>
        </div>
      )}
    </>
  );
}

export default PopupMenus;