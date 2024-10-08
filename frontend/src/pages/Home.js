import React from "react";
import styled, { keyframes } from "styled-components";
import ImgSlider from "../components/ImgSlider";
import useFetch from "../services/strapi";

const Home = () => {

    const homePageData = useFetch("https://tranquil-citadel-56220-32a830561abf.herokuapp.com/api/home-page?populate=*")?.data;
    const linksData = homePageData?.attributes?.Link;

    return (
        <Container>
            <Overlay />
            <Content>
                <Title>{homePageData?.attributes?.title}</Title>
                <Separator />
                <Description>{homePageData?.attributes?.subtitle}</Description>
                <Links>
                    {linksData?.map((link) => (
                        <Link href={link?.URL}><h1>LINKED IN</h1></Link>
                    ))}
                </Links>
            </Content>
            <ImgSlider />
        </Container>
    );
};

const slideIn = keyframes`
    0% {
        opacity: 0;
        transform: translateY(50px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
`;

const Container = styled.section`
    position: relative;
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
`;

const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    z-index: 1;
    overflow: hidden;
`;

const Content = styled.div`
    position: relative;
    z-index: 2;
    text-align: center;
    color: white;
    animation: ${slideIn} 1s ease-out;
    overflow: hidden;
`;

const Title = styled.h1`
    font-size: 60px;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 5px;
    margin-bottom: 10px;

    @media (max-width: 768px) {
        font-size: 40px;
    }
`;

const Separator = styled.hr`
    border: 2px solid #fff;
    width: 100%;
    max-width: 500px;
    margin: 20px auto;

    @media (max-width: 768px) {
        width: 100%;
        max-width: 300px;
    }
`;

const Description = styled.h2`
    font-size: 24px;
    font-weight: 300;
    letter-spacing: 3px;
    @media (max-width: 768px) {
        font-size: 15px;
    }
`;

const Links = styled.div`
    
`;

const Link = styled.a`
    background-color: red;
    width: 50px;
    height: 50px;
`;

export default Home;
