import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import UsersContainer from './components/users-container/UsersContainer';
import OperationsContainer from './components/operations-container/OperationsContainer';
import ToolsBar from './components/tools-bar/ToolsBar';

// Styles
import './home.css';

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Container className='home-body'>
            <ToolsBar />

            <UsersContainer />

            <OperationsContainer />
        </Container>
    );
};

export default Home;
