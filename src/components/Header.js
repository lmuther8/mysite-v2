import {useEffect, useRef} from 'react';
import { Link } from "react-router-dom";

const Header = () => {
    //scroll navbar
    const headerRef = useRef();
    const backToTopRef = useRef();
    useEffect(() => {
        const handleScroll = event => {
            console.log(headerRef.className)
            if (window.scrollY>40) {
                headerRef.current.className = 'fixed-top header-scrolled';
                backToTopRef.current.className = 'active back-to-top d-flex align-items-center justify-content-center'
            }
            else {
                headerRef.current.className = 'fixed-top'
                backToTopRef.current.className = 'back-to-top d-flex align-items-center justify-content-center'
            }
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
          };
    });

    return (
        <>
            <header ref={headerRef}  id="header" className="fixed-top">
                <div className="container">
                    <nav className="navbar navbar-expand-lg">
                    <Link to="/" className="navbar-brand">Luke Muther</Link>
                    <button className="navbar-toggler navbar-custom" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="#about" className="nav-link">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="#experience" className="nav-link">Experience</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="#athletics" className="nav-link">Athletics</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="#contact" className="nav-link">Contact</Link>
                        </li>
                        </ul>
                    </div>
                    </nav>
                </div>
            </header>
            <Link ref={backToTopRef} to="/" className="back-to-top d-flex align-items-center justify-content-center"><i className="fas fa-arrow-up"></i></Link>
        </>
    );
};

export default Header