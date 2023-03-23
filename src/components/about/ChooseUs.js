import React from "react";
import { Form, Row, Col, Card, Carousel, Image, Figure } from "react-bootstrap";

function ChooseUs() {
  return (
    <>
      <div className="container ChooseUs_main">
        <div className="ChooseUs_sub_main  text-center">
          <Form.Text className="chseUstext1 mb-4">Why Choose Us?</Form.Text>
          <p className="chseUstext2">
            We personalize how we work to fit your project needs. Our approach
            helps augment innovation.
          </p>
        </div>
        <div className="mt-4 mb-5">
          <Row>
            <Col className="chooseUs-col" xs={12} sm={6} md={6} lg={3}>
              <Card className="chooseUs-card">
                <div className="card chooseUs-cardIcon d-table border-0 rounded-circle shadow-sm p-3 mx-auto mb-4">
                  <Image
                    src="Images/choose-us-Icon1.svg"
                    width="32"
                    alt="Icon"
                  />
                </div>
                <div className="text-center chooseUS-card-txt">
                  <Card.Title>
                    Build a functional prototype in 24 hrs
                  </Card.Title>
                </div>
              </Card>
              <div className="vr"></div>
            </Col>

            <Col className="chooseUs-col" xs={12} sm={6} md={6} lg={3}>
              <Card className="chooseUs-card">
                <div className="card  d-table border-0 rounded-circle shadow-sm p-3 mx-auto mb-4">
                  <img src="Images/choose-us-icon2.svg" width="32" alt="Icon" />
                </div>
                <div className="text-center chooseUS-card-txt">
                  <Card.Title>Create an MVP within two weeks</Card.Title>
                </div>
              </Card>
              <div className="vr"></div>
            </Col>

            <Col className="chooseUs-col" xs={12} sm={6} md={6} lg={3}>
              <Card className="chooseUs-card ">
                <div className="card d-table border-0 rounded-circle shadow-sm p-3 mx-auto mb-4">
                  <img src="Images/choose-us-icon3.svg" width="32" alt="Icon" />
                </div>
                <div className="text-center chooseUS-card-txt">
                  <Card.Title>Kickstart software development</Card.Title>
                </div>
              </Card>
              <div className="vr"></div>
            </Col>

            <Col className="chooseUs-col" xs={12} sm={6} md={6} lg={3}>
              <Card className="chooseUs-card">
                <div className="card d-table border-0 rounded-circle shadow-sm p-3 mx-auto mb-4">
                  <img src="Images/choose-us-icon4.svg" width="32" alt="Icon" />
                </div>
                <div className="text-center chooseUS-card-txt">
                  <Card.Title>Get 24/7 tech & business support</Card.Title>
                </div>
              </Card>
            </Col>
          </Row>
        </div>
        <div className="mt-5 mb-5">
          <Row>
            <Col xs={12} sm={12} md={5} lg={5}>
              <Card className="chooseUs-card2-left">
                <div className="p-5">
                  <h3 className="display-4 text-primary mb-1 ">200+</h3>
                  <h2 className="text-light pb-5 mb-2">
                    Clients Already Served
                  </h2>
                  <a
                    href="#"
                    className="d-inline-flex align-items-center rounded-3 text-decoration-none py-3 px-4"
                  >
                    <div className="pe-3">
                      <div className="fs-xs text-light text-uppercase opaciy-70 mb-2">
                        Reviewed on
                      </div>
                      <img
                        src="Images/clutch-logo.svg"
                        width="97"
                        alt="Clutch"
                      />
                    </div>
                    <div className="ps-1">
                      <div className="text-nowrap mb-2">
                        <i className="bx bxs-star text-warning"></i>
                        <i className="bx bxs-star text-warning"></i>
                        <i className="bx bxs-star text-warning"></i>
                        <i className="bx bxs-star text-warning"></i>
                        <i className="bx bxs-star text-warning"></i>
                      </div>
                      <div className="text-light opacity-70">49 reviews</div>
                    </div>
                  </a>
                </div>
              </Card>
            </Col>
            <Col xs={12} sm={12} md={7} lg={7}>
              <Card className="chooseUs-card2-right shadow-sm">
                <Carousel>
                  <Carousel.Item interval={100000} className="carosalItem">
                    <Form.Text>
                      Ac at sed sit senectus massa. Massa ante amet ultrices
                      magna porta tempor. Aliquet diam in et magna ultricies mi
                      at. Lectus enim, vel enim egestas nam pellentesque et leo.
                      Elit mi faucibus laoreet aliquam pellentesque sed aliquet
                      integer massa. Orci leo tortor ornare id mattis auctor
                      aliquam volutpat aliquet. Odio lectus viverra eu blandit
                      nunc malesuada vitae eleifend pulvinar
                    </Form.Text>
                    <div className="d-flex mt-4">
                      <img
                        className="rounded-circle carosalProfileIcn"
                        src="/Images/profile-img.png"
                      />
                      <div className="ml-4">
                        <Form.Text className="crslprofileName">
                          Madhukar Pandey
                        </Form.Text>
                        <Form.Text className="crslPositioneName">
                          Senior Software Engineer at Iph Technologies
                        </Form.Text>
                      </div>
                    </div>
                  </Carousel.Item>
                  <Carousel.Item interval={100000} className="carosalItem">
                    <Form.Text>
                      Ac at sed sit senectus massa. Massa ante amet ultrices
                      magna porta tempor. Aliquet diam in et magna ultricies mi
                      at. Lectus enim, vel enim egestas nam pellentesque et leo.
                      Elit mi faucibus laoreet aliquam pellentesque sed aliquet
                      integer massa. Orci leo tortor ornare id mattis auctor
                      aliquam volutpat aliquet. Odio lectus viverra eu blandit
                      nunc malesuada vitae eleifend pulvinar
                    </Form.Text>

                    <Carousel.Caption>
                      <h3>Second slide label</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item interval={100000} className="carosalItem">
                    <Form.Text>
                      Ac at sed sit senectus massa. Massa ante amet ultrices
                      magna porta tempor. Aliquet diam in et magna ultricies mi
                      at. Lectus enim, vel enim egestas nam pellentesque et leo.
                      Elit mi faucibus laoreet aliquam pellentesque sed aliquet
                      integer massa. Orci leo tortor ornare id mattis auctor
                      aliquam volutpat aliquet. Odio lectus viverra eu blandit
                      nunc malesuada vitae eleifend pulvinar
                    </Form.Text>

                    <Carousel.Caption>
                      <h3>Third slide label</h3>
                      <p>
                        Praesent commodo cursus magna, vel scelerisque nisl
                        consectetur.
                      </p>
                    </Carousel.Caption>
                  </Carousel.Item>
                </Carousel>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}

export default ChooseUs;
