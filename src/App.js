import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
import HomeScreen from "./Screens/HomeScreen";
function App() {
  return (
    <>
    
    <Header/>
    <Container>
      <main>
        <HomeScreen/>
      </main>
    </Container>



    <Footer/>
    </>
  );
}

export default App;
