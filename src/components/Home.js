
import React from 'react';


import HomeCarousel from "./HomeCarousel";
import HomeBmi from './HomeBmi';
import HomeCal from "./HomeCal";
import Footer from './Footer';
import Header from './Header';

import { Container, Col} from "react-bootstrap";

const Home = (props) => {

  return (
    <div>
      <Header />
      <HomeCarousel />

      <div style={{ background: "#eeeeee" }}>
        <Container>
          <div className="d-flex">
            <Col
              l={6}
              style={{
                border: " 1px solid black",
                background: "#fff",
              }}
              className="m-4 p-4"
            >
              <HomeBmi />
            </Col>

            <Col
              l={6}
              style={{
                border: " 1px solid black",
                background: "#fff",
              }}
              className="m-4 p-4"
            >
              <HomeCal />
            </Col>
          </div>
        </Container>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;