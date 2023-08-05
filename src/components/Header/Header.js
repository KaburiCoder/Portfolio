import { useEffect, useState } from 'react';
import HamburgerButton from './HamburgerButton';
import classes from './Header.module.css';
import PopupMenus from './PopupMenus';
import { useMediaQuery } from 'react-responsive';
import MenuItems from './MenuItems';

const Header = () => {
  const [isDisplayMenus, setIsDisplayMenus] = useState(false);
  const hamburgerClickHandler = () => {
    setIsDisplayMenus(display => !display);
  }

  const menuSelectedHandler = () => {
    setIsDisplayMenus(false);
  }

  const isMobile = useMediaQuery({
    query: "(max-width:768px)"
  });

  useEffect(() => {
    if (!isMobile) setIsDisplayMenus(false);
  }, [isMobile])

  return (
    <header className={classes.header}>
      <div className={classes.header__content}>
        <div className={classes.header__content__title}>
          <p>Kaburi Corder PoPol</p>
        </div>
        {isMobile &&
          <>
            <HamburgerButton onClick={hamburgerClickHandler} />
            <PopupMenus display={isDisplayMenus} onMenuSelected={menuSelectedHandler} />
          </>
        }
        {!isMobile && <>
          <MenuItems/>
        </>}
      </div>
    </header>
  );
}

export default Header;
