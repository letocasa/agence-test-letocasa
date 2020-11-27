import React from "react";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBContainer,
} from "mdbreact";

export const CardCarousel = ({ property }) => {
  return (
    <div className="myCarousel">
      <MDBCarousel
        activeItem={1}
        length={2}
        showControls={true}
        showIndicators={false}
        className="z-depth-1"
        slide
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            {property && property.pictures[0] ? (
              <MDBView>
                <img
                  className="d-block w-100 carousel-image"
                  src={property.pictures[0]}
                  alt="First slide"
                />
              </MDBView>
            ) : null}
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            {property && property.pictures[1] ? (
              <MDBView>
                <img
                  className="d-block w-100 carousel-image"
                  src={property.pictures[0]}
                  alt="First slide"
                />
              </MDBView>
            ) : null}
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
      <style jsx>
        {`
          @media (min-width: 768px) {
            .myCarousel {
              width: 100%;
            }
            .carousel-image {
              width: 100%;
              heigh: 400px;
              display: block;
            }
          }
          @media (max-width: 768px) {
            .myCarousel {
              width: 100%;
            }
            .carousel-image {
              width: 100%;
              heigh: 300px;
              display: block;
            }
          }
        `}
      </style>
    </div>
  );
};