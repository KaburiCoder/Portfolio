import InfoItem from './InfoItem/InfoItem';
import classes from './MyInfo.module.css';
import { LiaBirthdayCakeSolid } from 'react-icons/lia';
import { GiQuickMan } from 'react-icons/gi';
import { MdOutlineSignpost } from 'react-icons/md';
import { AiOutlinePhone, AiOutlineMail } from 'react-icons/ai';
import { GrInfo } from 'react-icons/gr';
import PopolArticle from '../UI/Title/PopolArticle/PopolArticle';

const iconSize = 40;
const items = [
  {
    icon: <GiQuickMan size={iconSize} />,
    title: '이름',
    value: '임지훈',
  },
  {
    icon: <LiaBirthdayCakeSolid size={iconSize} />,
    title: '생년월일',
    value: '1990.12.07',
  },
  {
    icon: <MdOutlineSignpost size={iconSize} />,
    title: '주소지',
    value: '전라북도 전주시 덕진구',
  },
  {
    icon: <AiOutlinePhone size={iconSize} />,
    title: '연락처',
    value: '010-6740-2839',
  },
  {
    icon: <AiOutlineMail size={iconSize} />,
    title: '이메일',
    value: 'specialemail@naver.com',
  },
  {
    icon: <GrInfo size={iconSize} />,
    title: '학력',
    value: '원광대(사회체육학과)',
  },
];

const MyInfo = () => {
  const itemContents = items.map(item => (
    <InfoItem
      icon={item.icon}
      title={item.title}
      value={item.value} />
  ));

  return (
    <PopolArticle title='Information' titleColor='black' backgroundColor='whitesmoke'>
      <div className={classes.content__body}>
        {itemContents}
      </div>
    </PopolArticle>
  );
}

export default MyInfo;