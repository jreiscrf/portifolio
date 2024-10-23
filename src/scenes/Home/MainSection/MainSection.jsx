import { LazyLoadImage } from 'react-lazy-load-image-component';
import handIcon from '../../../assets/hand.png';
import homeMainIcon from '../../../assets/home-main.svg';
import Typewriter from '../../../components/UIElements/Typewriter/Typewriter';
import s from './MainSection.module.scss';

const MainSection = () => {
  return (
    <section className={s.content}>
      <div className={s.header}>
        <div className={s.greetingContainer}>
          <h2 className={s.title}>Saudações!</h2>
          <img src={handIcon} className={s.handIcon} />
        </div>

        <h1 className={s.mainTitle}>
          Me chamo
          <strong className={s.mainName}> JONATHAN REIS</strong>
        </h1>

        <div className={s.typewriter}>
          <Typewriter
            strings={['React Native Developer', 'UI/UX Designer']}
            wrapperClassName={s.typewriterInner}
            cursorClassName={s.typewriterCursor}
          />
        </div>
      </div>

      <div className={s.spacer} />

      <LazyLoadImage
        alt="home-img"
        effect="blur"
        src={homeMainIcon}
        wrapperClassName={s.homeMainIcon}
        width="396"
        height="400"
      />
    </section>
  );
};

export default MainSection;