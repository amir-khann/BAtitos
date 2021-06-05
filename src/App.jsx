import React from "react";
import {
  Container,
  Footer,
  Navbar,
  SignIn,
  Progress,
  Shoes,
  Form,
  LastSection,
} from "./components";

function App() {
  return (
    <div className="App">
      <Container>
        <Navbar />
        <SignIn />
        <Progress />
        <Shoes />
        <Form />
        <LastSection />
      </Container>
      <Footer />
      <p className="copy">copy right all right reserve</p>
    </div>
  );
}

export default App;
