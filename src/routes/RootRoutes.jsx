import { lazy, Suspense } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Preloader from '../components/UIElements/Preloader/Preloader';
import ModalProjectCard from '../scenes/Projects/ModalProjectCard/ModalProjectCard';

export const routes = {
  Inicio: '/',
  Sobre: '/about',
  Projetos: '/projects',
  Project: '/project/:id',
  Resumo: '/resume',
};

const scenes = {
  Inicio: lazy(() => import('../scenes/Home/Home')),
  Sobre: lazy(() => import('../scenes/About/About')),
  Projetos: lazy(() => import('../scenes/Projects/Projects')),
  Resumo: lazy(() => import('../scenes/Resume/Resume')),
};

function LazyScene({ name }) {
  const Scene = scenes[name];
  return (
    <Suspense fallback={<Preloader />}>
      <Scene />
    </Suspense>
  );
}

function RootRoutes() {
  const location = useLocation();
  const background = location.state?.background;

  return (
    <>
      <Routes location={background || location}>
        <Route
          path={routes.Inicio}
          element={<LazyScene name="Inicio" />}
        />
        <Route
          path={routes.Sobre}
          element={<LazyScene name="Sobre" />}
        />
        <Route
          path={routes.Projetos}
          element={<LazyScene name="Projetos" />}
        />
        <Route
          path={routes.Resumo}
          element={<LazyScene name="Resumo" />}
        />
        <Route
          /*Modal*/ path={routes.Project}
          element={<ModalProjectCard />}
        />
      </Routes>

      {background && (
        <Routes>
          <Route
            path={routes.Project}
            element={<ModalProjectCard />}
          />
        </Routes>
      )}
    </>
  );
}

export default RootRoutes;
