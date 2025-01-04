import logo from './logo.png';
import './Header.css'
function Header() {
    return (
        <header class="header">
            <div class="container">
                <div class="logo">
                    <img src={logo} alt="Streamo Logo" />
                </div>
                <nav class="nav-menu">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Series</a></li>
                        <li><a href="#">Movies</a></li>
                        <li><a href="#">Pages</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>
                <div class="header-icons">
                    <a href="#" class="icon search-icon">
                        <i class="fa fa-search"></i>
                    </a>
                    <a href="#" class="icon notification-icon">
                        <i class="fa fa-bell"></i>
                        <span class="badge">3</span>
                    </a>
                    <a href="#" class="icon user-icon">
                        <i class="fa-solid fa-user"></i>
                    </a>
                    <a href="#" class="subscribe-btn">Subscribe Now</a>
                </div>
            </div>
        </header>

    );
}

export default Header;
