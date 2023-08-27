import Title from '../Title';
import classes from './PopolArticle.module.css';

const PopolArticle = props => {
  return (
    <article className={classes.content} style={{ backgroundColor: props.backgroundColor }}>
      <Title
        text={props.title}
        color={props.titleColor} 
        borderBottomColor={props.titleBorderBottomColor}/>
      {props.children}
    </article>
  );
};

export default PopolArticle;