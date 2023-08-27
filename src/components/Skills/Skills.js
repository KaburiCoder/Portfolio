import Card from "../UI/Title/Card/Card";
import PopolArticle from "../UI/Title/PopolArticle/PopolArticle";
import classes from './Skills.module.css';
import cSharpAndVBNetLogo from '../../assets/csharp_vbnet.png';
import winFormLogo from '../../assets/winform.png';
import wpfLogo from '../../assets/wpf.png';
import xamlLogo from '../../assets/xaml.png';
import gitLogo from '../../assets/git.png';
import gitHubLogo from '../../assets/github.png';
import svnLogo from '../../assets/svn.png';
import htmlCssJsLogo from '../../assets/html_css_js.png';
import reactLogo from '../../assets/react.png';
import reduxLogo from '../../assets/redux.png';

const Skills = props => {
  return (
    <PopolArticle
      title='Skills'
      titleColor='black'
      backgroundColor='#ffc107'
      titleBorderBottomColor='gray'>

      <div className={classes.wrapper}>
        <Card className={classes.skill}>
          <div className={classes.skill__title}>
            윈도우 개발
          </div>
          <div className={classes.skill__list}>
            <img src={cSharpAndVBNetLogo} alt="C#_VB.NET" />
            <img src={winFormLogo} alt="WinForm" />
            <img src={wpfLogo} alt="WPF" />
            <img src={xamlLogo} alt="Xaml" />
          </div>
        </Card>

        <Card className={classes.skill}>
          <div className={classes.skill__title}>
            웹 개발
          </div>
          <div className={classes.skill__list}>
            <img src={htmlCssJsLogo} alt="HTML CSS JS" />
            <img src={reactLogo} alt="React" />
            <img src={reduxLogo} alt="Redux" />
          </div>
        </Card>

        <Card className={classes.skill}>
          <div className={classes.skill__title}>
            형상 관리
          </div>
          <div className={classes.skill__list}>
            <img src={gitLogo} alt="Git" />
            <img src={gitHubLogo} alt="GitHub" />
            <img src={svnLogo} alt="SVN" />
          </div>
        </Card>

        <Card className={classes.skill}>
          <div className={classes.skill__title}>
            데이터베이스
          </div>
          <div className={classes.skill__list}>
            <img src={gitLogo} alt="Git" />
            <img src={gitHubLogo} alt="GitHub" />
            <img src={svnLogo} alt="SVN" />
          </div>
        </Card>         
      </div>
    </PopolArticle>
  );
};

export default Skills;