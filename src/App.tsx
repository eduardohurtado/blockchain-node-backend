import { RouterProvider } from 'react-router-dom';
import router from './routes/router';
import Footer from './components/footer/Footer';

// Styles
import './App.css';

const App = (): JSX.Element => {
    return (
        <div className='app-container'>
            <RouterProvider router={router}></RouterProvider>

            <Footer />
        </div>
    );
};

export default App;
