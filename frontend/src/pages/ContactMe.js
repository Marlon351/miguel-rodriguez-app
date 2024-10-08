import React from "react";
import styled from "styled-components";
import background from "../assets/pexels-jeshoots-com-147458-834892.jpg";

const ContactMe = () => {
    return (
        <Container>
            <Card>
                <Title>Contact Me</Title>
                <Separator />
                <ContactInfo>
                    <ContactItem>
                        <Label>Phone:</Label>
                        <Value>(862) 282-8405</Value>
                    </ContactItem>
                    <ContactItem>
                        <Label>Email:</Label>
                        <Value>mrodriguez3314@gmail.com</Value>
                    </ContactItem>
                </ContactInfo>
            </Card>
        </Container>
    );
};

const Container = styled.section`
    position: relative;
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    background-image: url(${background});
    background-size: cover;
    background-position: center;
    z-index: -1;
`;

const Card = styled.div`
    width: 500px; /* Original size */
    background-color: black;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    padding: 20px;
    box-sizing: border-box;
    z-index: 3;
    color: white;
    
    @media (max-width: 768px) {
        width: 90%; /* Reduced size for smaller screens */
        max-width: 400px;
        padding: 15px;
    }
`;

const Title = styled.h1`
    font-size: 1.5rem;
    color: lightskyblue;
    margin-bottom: 15px;
    font-family: 'Roboto', sans-serif;
    text-align: center;

    @media (max-width: 768px) {
        font-size: 1.25rem;
        margin-bottom: 10px;
    }
`;

const Separator = styled.hr`
    width: 80%;
    margin: 15px auto;
    border: 1px solid lightskyblue;

    @media (max-width: 768px) {
        width: 70%;
        margin: 10px auto;
    }
`;

const ContactInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ContactItem = styled.div`
    margin-bottom: 10px;

    @media (max-width: 768px) {
        margin-bottom: 8px;
    }
`;

const Label = styled.p`
    font-size: 0.9rem;
    color: #bbb;
    margin: 0;
`;

const Value = styled.p`
    font-size: 1.1rem;
    color: white;
    margin: 5px 0 0;

    @media (max-width: 768px) {
        font-size: 1rem;
    }
`;

export default ContactMe;
