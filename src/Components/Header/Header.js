import React from 'react';
import css from './Header.module.scss';
import logo from '../../materials/images/svg/header_logo.svg';

const Header = () => {
    return (
        <header className={css['header']}>
            <div className={css['wrapper']}>
                
                <div className={css['header__logo']}>
                    <a href="/" className={css['header__logo-link']}>
                        <img className={css['header__logo-pic']} src={logo} alt="logo"/>
                    </a>
                </div>

                <nav className={css['header__nav']}>
                    <ul className={css['header__list']}>
                        <li className={css['header__item']}>
                            <a href="/1" className={css['header__link']}>Commercial</a>
                        </li>
                        <li className={css['header__item']}>
                            <a href="/2" className={css['header__link']}>Editorial</a>
                        </li>
                        <li className={css['header__item']}>
                            <a href="/3" className={css['header__link']}>Reportage</a>
                        </li>
                        <li className={css['header__item']}>
                            <a href="/4" className={css['header__link']}>Meet Me</a>
                        </li>
                    </ul>
                </nav>

            </div>
        </header>
    );
}

export default Header;