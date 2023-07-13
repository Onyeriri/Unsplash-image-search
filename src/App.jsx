import { useGlobalContext } from '../context/context';
import Gallery from './components/Gallery';
import ThemeToggle from './components/ThemeToggle';
import SearchForm from './components/SearchForm';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ToastContainer } from 'react-toastify';
import Title from './components/Title';



const App = () => {
  const { isDarkTheme } = useGlobalContext();

  return (
    <div id='main'>
        <ThemeToggle />
        <Title />
        <SearchForm />
        <Gallery />
        <ReactQueryDevtools />
        <ToastContainer position='top-center'/>
    </div>
  );
};
export default App;
