import classes from './Head.module.css';
import headImage from '../../assets/coding-image3.jpg';

const Head = () => {
  return (
    <div className={classes.content}>
      <img src={headImage} alt='Head 이미지' />
      <div className={classes.background}>
        <div className={classes.info}>
          <p className={classes.info__title}>
            Window<br />
            Developer<br />
            Portfolio<br />
          </p>
          <div className={classes.divider}></div>
          <p className={classes.info__detail}>
            매일 성장하기 위해 노력하는 사람<br/>
            급변하는 미래에 대응하기 위해 도전하는 사람<br/>
            실패를 두려워 하지 않는 사람<br/>
            반갑습니다!<span> </span>
            <span className={classes.info__detail__name}>임지훈</span>입니다.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Head;