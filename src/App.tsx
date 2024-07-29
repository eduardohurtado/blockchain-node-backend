import Container from 'react-bootstrap/esm/Container';
import { RouterProvider } from 'react-router-dom';
import router from './routes/router';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

// Styles
import './App.css';

const App = (): JSX.Element => {
    return (
        <Container>
            <Navbar />

            <div className="separator"></div>

            <RouterProvider router={router} />

            <Footer />
        </Container>
    );
};

export default App;
