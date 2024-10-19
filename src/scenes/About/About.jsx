import aboutPromoImg from '../../assets/about-promo.svg';
import BaseLayout from '../../layouts/BaseLayout/BaseLayout';
import s from './About.module.scss';
import AboutTextCard from './AboutTextCard/AboutTextCard';
import GithubActivity from './GithubActivity/GithubActivity';
import TechSkills from './TechSkills/TechSkills';

const About = () => {
  return (
    <BaseLayout>
      <div className={s.content}>
        <div className={s.about}>
          <div className={s.aboutDescription}>
            <h1 className={s.title}>
              Saiba mais <b className={s.purple}>Sobre Mim</b>
            </h1>
            <AboutTextCard />
          </div>

          <div className={s.aboutImg}>
            <img src={aboutPromoImg} alt="about" />
          </div>
        </div>

        <h2 className={s.skills}>
          Minhas <b className={s.purple}>Habilidades</b>
        </h2>
        <TechSkills />

        <a href="https://github.com/jreiscrf" target="_blank">
          <h2 className={s.githubActivity}>
            Minhas <b className={s.purple}>Contribuições</b>
          </h2>

          <GithubActivity />
        </a>
      </div>
    </BaseLayout>
  );
};

export default About;
