import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
    padding: 1rem;
    background-color: #333;
    color: #fff;
    text-align: center;
`;

const Footer = () => {
    return (
        <FooterContainer>
            <p>© 2023 Finlay & Lani</p>
        </FooterContainer>
    );
}

export default Footer;