import { createRoot } from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import { ThemeProvider } from './hooks/themeHook/themeContext';

const Root = () => {
  console.log('App component loaded');
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
};

const root = createRoot(document.getElementById('root'));
if (!root) {
  console.error(root, 'Root não encontrado');
}
root.render(<Root />);

reportWebVitals();
// serviceWorkerRegistration.register();
