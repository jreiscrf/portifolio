import { AiOutlineFundProjectionScreen } from '@react-icons/all-files/ai/AiOutlineFundProjectionScreen';
import { AiOutlineHome } from '@react-icons/all-files/ai/AiOutlineHome';
import { AiOutlineUser } from '@react-icons/all-files/ai/AiOutlineUser';
import { CgFileDocument } from '@react-icons/all-files/cg/CgFileDocument';
import { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { usePreload } from '../../../hooks/usePreload';
import { routes as r } from '../../../routes/RootRoutes';
import s from './NavLinks.module.scss';

const scenes = {
  Inicio: () => import('../../../scenes/Home/Home'),
  Sobre: () => import('../../../scenes/About/About'),
  Projetos: () => import('../../../scenes/Projects/Projects'),
  Resumo: () => import('../../../scenes/Resume/Resume'),
};

const icons = {
  Inicio: <AiOutlineHome />,
  Sobre: <AiOutlineUser />,
  Projetos: <AiOutlineFundProjectionScreen />,
  Resumo: <CgFileDocument />,
};

const Link = (props) => {
  const ref = useRef();
  usePreload(ref, props.scene);
  return (
    <NavLink ref={ref} to={props.to} end={props.end}>
      {props.icon || null}
      {props.name}
    </NavLink>
  );
};

const NavLinks = () => {
  return (
    <ul className={s.navBar}>
      {Object.entries(scenes).map(([name, scene], idx) => {
        return (
          <li key={idx}>
            <Link
              to={r[name]}
              name={name}
              icon={icons[name]}
              scene={scene}
              end={idx === 0}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default NavLinks;
