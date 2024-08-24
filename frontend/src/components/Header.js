import styled from "styled-components";

const Header = (props) => {
    return (
        <Nav>
            <Menu>
                <a href="/">
                    <span>HOME</span>
                </a>
                <a href="./aboutme">
                    <span>ABOUT ME</span>
                </a>
                <a href="./projects">
                    <span>PROJECTS</span>
                </a>
                <a href="/contactme">
                    <span>CONTACT ME</span>
                </a>
            </Menu>
        </Nav>
    )
}

const Nav = styled.nav`
    position: fixed;
    height: 93px;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.90);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Menu = styled.div`
    display: flex;
    align-items: center;
    height: 80px;

    a {
        display: flex;
        align-items: center;
        padding: 0 20px;

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
`;

export default Header;
