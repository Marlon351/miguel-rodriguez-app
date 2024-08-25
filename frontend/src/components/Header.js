import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import hamburger from "../assets/hamburger-icon.png";
import closeIcon from "../assets/close-icon.png";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <Nav>
            <HamburgerIcon onClick={toggleMenu}>
                <Icon src={isOpen ? closeIcon : hamburger} alt="Menu Icon" />
            </HamburgerIcon>
            <Menu isOpen={isOpen}>
                <Link to="/" onClick={toggleMenu}>
                    <span>HOME</span>
                </Link>
                <Link to="/aboutme" onClick={toggleMenu}>
                    <span>ABOUT ME</span>
                </Link>
                <Link to="/projects" onClick={toggleMenu}>
                    <span>PROJECTS</span>
                </Link>
                <Link to="/contactme" onClick={toggleMenu}>
                    <span>CONTACT ME</span>
                </Link>
            </Menu>
        </Nav>
    );
};

const Nav = styled.nav`
    position: fixed;
    height: 93px;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.90);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 20px;

    @media (max-width: 768px) {
        justify-content: space-between;
        height: 60px;
    }
`;

const Menu = styled.div`
    display: flex;
    align-items: center;
    height: 80px;

    a {
        display: flex;
        align-items: center;
        padding: 0 20px;
        text-decoration: none;

        span {
            color: rgb(249, 249, 249);
            font-size: 20px;
            letter-spacing: 1.42px;
            line-height: 1.08;
            white-space: nowrap;
            position: relative;
            padding: 2px 0px;

            &:before {
                content: "";
                position: absolute;
                left: 0;
                right: 0;
                bottom: -6px;
                height: 2px;
                background-color: lightskyblue;
                transform-origin: left center;
                transform: scaleX(0);
                transition: transform 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
                opacity: 0;
                visibility: hidden;
            }
        }

        &:hover span:before {
            transform: scaleX(1);
            opacity: 1;
            visibility: visible;
        }
    }

    @media (max-width: 768px) {
        position: fixed;
        top: 0;
        right: 0;
        width: 100%;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.95);
        flex-direction: column;
        align-items: center;
        justify-content: center;
        transform: ${({ isOpen }) => (isOpen ? "translateX(0)" : "translateX(100%)")};
        transition: transform 0.3s ease-in-out;

        a {
            margin: 15px 0;
        }
    }
`;

const HamburgerIcon = styled.div`
    display: none;

    @media (max-width: 768px) {
        display: flex;
        align-items: center;
        cursor: pointer;
        z-index: 3;
    }
`;

const Icon = styled.img`
    width: 30px;
`;

export default Header;
