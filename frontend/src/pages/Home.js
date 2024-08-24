import React from "react";
import styled, { keyframes } from "styled-components";
import ImgSlider from "../components/ImgSlider";
import useFetch from "../services/strapi";

const Home = () => {

    const homePageData = useFetch("https://tranquil-citadel-56220-32a830561abf.herokuapp.com/api/home-page?populate=*")?.data;

    return (
        <Container>
            <Overlay />
            <Content>
                <Title>{homePageData?.attributes?.title}</Title>
                <Separator />
                <Description>{homePageData?.attributes?.subtitle}</Description>
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
`;

const Content = styled.div`
    position: relative;
    z-index: 2;
    text-align: center;
    color: white;
    animation: ${slideIn} 1s ease-out;
`;

const Title = styled.h1`
    font-size: 60px;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 5px;
    margin-bottom: 10px;
`;

const Separator = styled.hr`
    border: 2px solid #fff;
    margin: 20px auto;
`;

const Description = styled.h2`
    font-size: 24px;
    font-weight: 300;
    letter-spacing: 3px;
`;

export default Home;
