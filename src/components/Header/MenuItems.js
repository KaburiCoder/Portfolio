import classes from './MenuItems.module.css';

const menuList = ['About me', 'Skills', 'Archiving', 'Projects', 'Career'];

const MenuItems = props => {
  const menuContents = menuList.map(text => {
    return <li key={text} onClick={menuClickHandler.bind(null, text)}>{text}</li>;
  });

  function menuClickHandler(menuText) {
    props.onClick(menuText);
  };

  return (
    <ul className={classes['menu-list']}>
      {menuContents}
    </ul>
  );
};

export default MenuItems;