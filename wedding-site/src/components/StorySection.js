import React from "react";
import styled from "styled-components";

const StoryContainer = styled.div`
    padding: 5rem 0;
    background: #f4f4f4;
`;

const Title = styled.h2`
    text-align: center;
    margin-bottom: 2rem;
`;

const Timeline = styled.ul`
    list-style-type: none;
    padding: 0;
    // add more
`;

const StorySection = () => {
    return (
        <StoryContainer>
            <Title>Our Story</Title>
            <Timeline>
                <li>3/5/10: Their first meeting...</li>
                {/* add more */}
            </Timeline>
        </StoryContainer>
    );
}

export default StorySection;