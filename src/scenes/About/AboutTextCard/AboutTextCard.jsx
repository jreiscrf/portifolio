import s from './AboutTextCard.module.scss';

const AboutTextCard = () => {
  return (
    <div className={s.card}>
      <p style={{ textAlign: 'justify' }}>
        Olá a todos, eu sou{' '}
        <span className={s.purple}>Jonathan Reis, </span>
        <br />
        um engenheiro de software atualmente baseado no{' '}
        <span className={s.purple}>Rio de Janeiro, Brasil.</span>
        <br />
        <br />
        Eu tenho um diploma de Análise e Desenvolvimento de Sistemas e
        <br />
        um conhecimento sólido em UI/UX Design que adquiri ao longo
        dos anos trabalhando com desenvolvimento de apps
        <span className={s.purple}> mobile</span>
        <br />
        <br />
        Meus hobbies além da programação:
      </p>

      <ul style={{ marginLeft: 14 }}>
        <li className={s.aboutActivity}>- Jogar</li>
        <li className={s.aboutActivity}>- Ler</li>
        <li className={s.aboutActivity}>- Viajar</li>
      </ul>
    </div>
  );
};

export default AboutTextCard;
