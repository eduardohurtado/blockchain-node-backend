import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import UsersContainer from './components/users-container/UsersContainer';

// Styles
import './home.css';

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Container className='home-body'>
            <UsersContainer></UsersContainer>
        </Container>
    );
};

export default Home;
