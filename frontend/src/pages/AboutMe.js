import React from "react";
import styled from "styled-components";
import useFetch from "../services/strapi";

const AboutMe = () => {
    const aboutMePageData = useFetch("https://tranquil-citadel-56220-32a830561abf.herokuapp.com/api/about-me-page/?populate[aboutSegment][populate]=Image")?.data;
    const segmentData = aboutMePageData?.attributes?.aboutSegment;

    return (
        <Container>
            {segmentData?.map((segment, index) => (
                <Segment key={segment.id}>
                    <Title>{segment?.Title}</Title>
                    <Separator />
                    <Description reversed={index % 2 === 0}>
                        <Image src={`https://tranquil-citadel-56220-32a830561abf.herokuapp.com${segment.Image.data.attributes.url}`} alt={segment?.Title} />
                        <Text>{segment?.Description}</Text>
                    </Description>
                </Segment>
            ))}
        </Container>
    );
};

const Container = styled.section`
    position: relative;
    min-height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background: white;
    padding: 100px 0px;
    padding-left: 20px;
    padding-right: 20px;
    box-sizing: border-box;
    overflow-x: hidden;
`;

const Segment = styled.div`
    width: 100%;
    background: #fff;
    border-radius: 16px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
    padding-bottom: 20px;
    text-align: center;
    margin-bottom: 4px;
    box-sizing: border-box;
`;

const Title = styled.h1`
    font-size: 2rem;
    color: #333;
    margin-bottom: 20px;
    font-family: 'Roboto', sans-serif;
`;

const Description = styled.div`
    display: flex;
    flex-direction: ${props => (props.reversed ? 'row-reverse' : 'row')};
    align-items: center;
    justify-content: center;
    margin: 0px;
    margin-top: 20px;
    

    @media (max-width: 950px) {
        flex-direction: column;
    }
`;

const Image = styled.img`
    width: 300px;
    height: auto;
    margin: 0 30px;
    object-fit: cover;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 1);
`;

const Text = styled.h2`
    font-size: 1.2rem;
    color: #555;
    line-height: 1.6;
    max-width: 600px;
    margin: 0 30px;
    text-align: left;
    font-family: 'Open Sans', sans-serif;

    @media (max-width: 950px) {
        text-align: center;
        margin-top: 20px;
        font-size: 0.9rem;
    }
`;

const Separator = styled.hr`
    width: 60vw;
    border: 0;
    height: 3px;
    background: #333;
    border-radius: 1.5px;
`;

export default AboutMe;
