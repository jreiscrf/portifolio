import { BrowserRouter as Router } from 'react-router-dom';
import RootRoutes from './routes/RootRoutes';
import './styles/main.scss';

const isProduction = process.env.NODE_ENV === 'production';

const App = () => {
  return (
    <Router basename={isProduction ? '/portifolio' : '/'}>
      <RootRoutes />
    </Router>
  );
};

export default App;
