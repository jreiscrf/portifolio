import { AiFillGithub } from '@react-icons/all-files/ai/AiFillGithub';
import { RiWhatsappLine } from 'react-icons/ri';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedinIn } from '@react-icons/all-files/fa/FaLinkedinIn';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Tilt from 'react-parallax-tilt';
import image from '../../../assets/image.png';
import s from './IntroSection.module.scss';

const IntroSection = () => {
  return (
    <section className={s.content}>
      <div className={s.introduction}>
        <div className={s.introductionText}>
          <h1 className={s.title}>
            DEIXE EU ME <span className={s.purple}> APRESENTAR </span>{' '}
          </h1>
          <div className={s.description}>
            <p>
              Sou um Desenvolvedor React Native com <b>+3 anos </b>
              de experiência <br />
              criando aplicativos móveis para as plataformas iOS,
              Android, e Web.
            </p>

            <p>
              Minhas habilidades incluem proficiência em{' '}
              <i>
                <b className={s.purple}>
                  TypeScript, React, React Native,
                </b>
              </i>
              <br />
              e outras tecnologias relevantes. Tenho experiência na
              integração de diversas <br />
              bibliotecas de terceiros, integração de APIs,
              notificações push, modulos nativos,
              <br /> testes automatizados e análise de dados.
            </p>

            <p>
              Minha área de interesse é desenvolver novas
              <i>
                <b className={s.purple}> Tecnologias e Produtos.</b>
              </i>
            </p>
          </div>
        </div>

        <Tilt trackOnWindow={true}>
          <LazyLoadImage alt="avatar" effect="blur" src={image} />
        </Tilt>
      </div>

      <div className={s.introSocial}>
        <h1>ONDE ME ENCONTRAR</h1>
        <p>
          Sinta-se à vontade para entrar em{' '}
          <span className={s.purple}>contato </span>comigo
        </p>
        <ul className={s.socialLinks}>
          <li className={s.socialLink}>
            <a
              href="https://github.com/jreiscrf"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
              aria-label="github"
            >
              <AiFillGithub />
            </a>
          </li>
          <li className={s.socialLink}>
            <a
              href="https://www.linkedin.com/in/jonathan-torres-reis/"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
              aria-label="linkedin"
            >
              <FaLinkedinIn />
            </a>
          </li>
          <li className={s.socialLink}>
            <a
              href="https://wa.me/5511959862964"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
              aria-label="whatsapp"
            >
              <RiWhatsappLine />
            </a>
          </li>
          <li className={s.socialLink}>
            <a
              href="https://www.instagram.com/jreiscrf/"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
              aria-label="instagram"
            >
              <FaInstagram />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default IntroSection;
