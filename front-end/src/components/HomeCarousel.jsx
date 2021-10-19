import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from "mdbreact";
import Home1 from "../assets/images/Home-1.jpg"
import Home2 from "../assets/images/Home-2.jpg"
import Home3 from "../assets/images/Home-3.jpg"
import Home4 from "../assets/images/Home-4.jpg"
import Home5 from "../assets/images/Home-5.jpg"



const HomeCarousel = () => {
  return (
    <MDBContainer>
      <MDBCarousel
        activeItem={1}
        length={5}
        showControls={false}
        showIndicators={false}
        className=""
        style={{width:"550px",height:"500px"}}

      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1" >
            <MDBView  className="col-12 m-auto" >
              <img
                className="d-block w-100 rounded "
                src={Home1}
                alt="First slide"
                
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2" >
            <MDBView  className="col-7 m-auto" >
              <img
                className="d-block w-100 rounded "
                src={Home2}
                alt="Second slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3" >
            <MDBView  className="col-7 m-auto" >
              <img
                className="d-block w-100 rounded "
                src={Home3}
                alt="Third slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="4" >
            <MDBView  className="col-7 m-auto" >
              <img
                className="d-block w-100 rounded "
                src={Home4}
                alt="Third slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="5" >
            <MDBView  className="col-7 m-auto" >
              <img
                className="d-block w-100 rounded "
                src={Home5}
                alt="Third slide"
              />
            </MDBView>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
  );
}

export default HomeCarousel;