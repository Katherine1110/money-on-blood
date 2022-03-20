import './App.css';
import TitlebarImageList from './components/MoneyOnBlood';
import BasicBreadcrumbs from './components/HelpList';
import { Link } from 'react-router-dom';

function App() {
  return (
    <>
      <nav
        style={{
          borderBottom: 'solid 1px',
          paddingBottom: '1rem',
        }}>
        <Link to="/blood-on-money">Money on blood</Link> |{' '}
        <Link to="/money-for-life">Money for life</Link>
      </nav>
    </>
  );
}

export default App;
