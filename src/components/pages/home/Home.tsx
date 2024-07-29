import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';

// Styles
import './home.css';

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return <Container className="home-body">Home body</Container>;
};

export default Home;
