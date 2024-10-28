import './index.css';

function Footer() {
    return (
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} TenatSync. All rights reserved.</p>
            <nav className="footer-nav">
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
                <a href="#privacy">Privacy Policy</a>
                <a href="#terms">Terms of Service</a>
            </nav>
        </footer>
    );
}

export default Footer;


