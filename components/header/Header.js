import styles from './Header.module.scss'
import Head from "next/head";
import {useState} from "react";

const Header = (titleName) => {
    const [toggleDropdown, setToggleDropdown] = useState(false);
    const [toggleMobile, setMobile] = useState(false);

    return (
        <>
            <nav className={`${styles.header} navbar py-4 navbar-expand-lg navbar-dark sticky-top`}>
                <div className="container justify-content-center">
                    <button onClick={() => setMobile(!toggleMobile)} className="navbar-toggler" type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded={`${toggleMobile ? 'true' : 'false'}`} aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`${!toggleMobile && 'collapse'} navbar-collapse`} id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-center text-lg-start mt-4 mt-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#aboutme">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#projects">Projects</a>
                            </li>
                        </ul>
                        <div className="navbar-text text-center text-lg-start">
                            <a target={`_blank`} href='https://twitter.com/AcetyldNL'>
                                <i className="bi bi-twitter me-2"></i>
                            </a>
                            <a target={`_blank`} href='https://github.com/DionGrendelman'>
                                <i className="bi bi-github me-2"></i>
                            </a>
                            <a target={`_blank`}
                               href='https://www.linkedin.com/in/dion-grendelman-21940489/?originalSubdomain=nl'>
                                <i className="bi bi-linkedin"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header;
