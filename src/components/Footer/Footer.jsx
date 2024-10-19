import { AiFillGithub } from '@react-icons/all-files/ai/AiFillGithub';
import { RiWhatsappLine } from 'react-icons/ri';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedinIn } from '@react-icons/all-files/fa/FaLinkedinIn';
import { FaTelegramPlane } from '@react-icons/all-files/fa/FaTelegramPlane';
import s from './Footer.module.scss';

const Footer = () => {
  return (
    <div className={s.footer}>
      <div className={s.container}>
        <div className={s.copyright}>
          <h1>
            Transformando ideias em realidade 📱 Feito por Jonathan
            Reis
          </h1>
        </div>

        <div className={s.body}>
          <ul className={s.socialIcons}>
            <li>
              <a
                href="https://github.com/jreiscrf"
                target="_blank"
                rel="noreferrer"
                aria-label="github"
              >
                <AiFillGithub />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/jreiscrf/"
                target="_blank"
                rel="noreferrer"
                aria-label="instagram"
              >
                <FaInstagram />
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/5511959862964"
                target="_blank"
                rel="noreferrer"
                aria-label="Whatsapp"
              >
                <RiWhatsappLine />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/jonathan-torres-reis/"
                target="_blank"
                rel="noreferrer"
                aria-label="linkedin"
              >
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
