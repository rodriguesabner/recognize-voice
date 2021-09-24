import React from 'react';
import {Container, Layout, Title} from "./styles";

const Header = () => {
    return (
        <Layout className={"noselect"}>
            <Container>
                <Title>
                    Bem vindo ao lar
                </Title>
            </Container>
        </Layout>
    );
};

export default Header;
