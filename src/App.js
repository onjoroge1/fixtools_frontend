import logo from './logo.svg';
import './App.css';
import AppRoute from './AppRoute/AppRoute';
import ScrollTop from './components/ScrollToTop';
import { HelmetProvider } from 'react-helmet-async';

function App() {
  const helmetContext = {};
  return (
    <HelmetProvider context={helmetContext}>
      <div>
        <AppRoute />
      </div>
    </HelmetProvider>
  );
}

export default App;
