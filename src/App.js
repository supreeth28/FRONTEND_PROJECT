import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container,Row,Col,Button } from "react-bootstrap";
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


    <div>
      <h2><b><center>SERVICES</center></b></h2>
      <Row>
        <Col> 
        <h3><a href="#">APPLICATION DEVELOPMENT</a></h3> 
        <p className='p-style'>
        NJTECH provides Application Development and Maintenance Outsourcing services which allows for reduction 
        of costs as well as business growth and improvement.

        </p>
        <Button variant='warning'>Read More</Button>

        </Col>

        <Col >  
        <h3><a href="#">BUSINESS PROCESS OUTSOURCING(BPO)</a></h3> 
        <p className='p-style'>
        BPO can be defined as the transfer of 
        an organization's entire non-core but critical business process/function to an external business partner who uses an IT-based.

        </p>
        <Button variant='warning'>Read More</Button>

        </Col>

        <Col>  
        <h3><a href="#">PROFESSIONAL IT STAFFING</a></h3> 
        <p className='p-style'>
        NJTECH has a strong team with a lot of 
        technology consulting experience and a proven track record. 

        </p>
        <Button variant='warning'>Read More</Button>

        </Col>
      </Row>





    </div>


    <Footer/>
    </>
  );
}

export default App;
