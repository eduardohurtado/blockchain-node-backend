import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';

// Styles
import './about.css';

const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return <Container className="about-body">About body</Container>;
};

export default About;
