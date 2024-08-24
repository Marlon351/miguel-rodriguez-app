import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import useFetch from "../services/strapi";

const Projects = () => {
    const projectsPageData = useFetch("http://localhost:1337/api/projects-page/?populate[Project][populate]=Image")?.data;
    const projects = projectsPageData?.attributes?.Project || [];

    return (
        <Container>
            <Grid>
                {projects.map((proj) => (
                    <ProjectCard key={proj.id}>
                        <Link to={`/projects/${proj.id}`}>
                            <Image src={`http://localhost:1337${proj.Image.data.attributes.url}`} alt={proj.Title} />
                            <Overlay>
                                <ProjectTitle>{proj.Title}</ProjectTitle>
                                <ProjectDescription>{proj.BriefDescription}</ProjectDescription>
                            </Overlay>
                        </Link>
                    </ProjectCard>
                ))}
            </Grid>
        </Container>
    );
};

const Container = styled.div`
    padding: 2rem;
    background-color: white;
    min-height: 100vh;
`;

const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.6);
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease;
    padding: 1rem;
    text-align: center;
`;

const Grid = styled.div`
    margin-top: 93px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
`;

const ProjectCard = styled.div`
    position: relative;
    overflow: hidden;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: background 0.3s ease;
    max-height: 500px;

    &:hover ${Overlay} {
        opacity: 1;
    }
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: opacity 0.3s ease;
`;

const ProjectTitle = styled.h3`
    font-size: 1.5rem;
    margin: 0;
`;

const ProjectDescription = styled.p`
    font-size: 1rem;
    margin: 0.5rem 0 0;
`;

export default Projects;
