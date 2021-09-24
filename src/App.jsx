import React from 'react';
import Home from "./pages/Home";
import Header from "./components/Header";
import GlobalStyles, {Container} from "./styles/GlobalStyles";

function App() {
    return (
        <Container>
            <Header/>
            <Home/>

            <GlobalStyles/>
        </Container>
    );
}

export default App;