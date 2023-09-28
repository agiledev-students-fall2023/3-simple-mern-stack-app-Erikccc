import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about-us">About Us</Link>
            {/* ... other links ... */}
        </nav>
    );
}

export default Navigation;
