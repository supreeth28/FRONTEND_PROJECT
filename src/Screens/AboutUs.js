import React from 'react';
import {Carousel  } from 'react-bootstrap';

const AboutUs = () => {
    

    return(
 <>
<p><b>AboutUs</b> </p>
<p> NJTECH is a global managed IT service, IT consulting, and business solutions partner.
Our "High Performance Business" strategy builds our expertise in technology and consulting.
 Our offshore consulting plays a major role in helping clients to achieve their objectives in the highest level; 
 ultimately creating sustainable value to customers and shareholders.

Our goal is to provide our clients with the best professional IT consulting services either for temporary or full-time staff or build the entire team; whichever you’re looking for. 
At NJTECH we analyze each and every aspect of our Clients need to improve it by leveraging technology.

On the client side, our Account Managers work with our hiring managers to understand not only their current needs, but also their business as a whole. 
Our Account Managers have a wealth of industry knowledge that we share with our clients as we strive to develop long-term, partnering relationships. 
Understanding our client allows us to best match their company with prospective candidates in a timely and accurate manner. 
In addition, NJTECH makes on-line technical assessments for the candidates we represent. 
These assessments serve as a valuable tool for evaluating a candidate’s technical capabilities.</p>

<div>
<Carousel>
         <Carousel.Item>
            <img height="550px"
              className="d-block w-100"
              src="images/img14.jpg"
              
             />
 </Carousel.Item>
 
</Carousel>
</div>



</>
  
)
}

export default AboutUs