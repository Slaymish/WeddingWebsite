import React from "react";
import styled from "styled-components";

const HeroContainer = styled.div`
    height: 100vh;
    background: url("https://images.unsplash.com/photo-1516550914373-5a5f45f4a40f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80") no-repeat center center/cover;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Names = styled.h1`
    font-size: 5rem;
    color: white;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
`;

const HeroSection = () => {
    return (
        <HeroContainer>
            <Names>Finlay & Lani</Names>
        </HeroContainer>
    );
}

export default HeroSection;