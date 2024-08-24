import styled from "styled-components";

const Footer = (props) => {
    return (
        <Nav>
            <span>© 2024 MIGUEL RODRIGUEZ. ALL RIGHTS RESERVED.</span>
        </Nav>

    )
}

const Nav = styled.footer`
    position: fixed;
    height: 50px;
    width: 100vw;
    background-color: rgb(0, 0, 0, 0.90);
    z-index: 3;
    display: flex;
    flex-direction: row;
    padding: 0px 20px;
    align-items: center;
    justify-content: center;
    bottom: 0;
`;

export default Footer;