import './index.css';

function Header() {
    return (
        <header className="header">
            <div className="logo">TenatSync</div>
            <nav className="nav">
                <a href="#dashboard">Dashboard</a>
                <a href="#payments">Payments</a>
                <a href="#maintenance">Maintenance</a>
                <a href="#bulletin">Bulletin</a>
            </nav>
            <div className="profile">
                <span className="notification">🔔</span> {/* Notification Icon */}
                <button className="profile-button">Profile</button> {/* Profile as Button */}
            </div>
        </header>
    );
}

export default Header;
