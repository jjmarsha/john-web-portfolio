import React from "react";
import { Row, Col } from "reactstrap";
import BabyYoda from "../../static/babyyoda.jpg";
import HitchNDitch from "../../static/hitchnditch.png";
import GiftAma from "../../static/gift.ama.jpg";

const ProjectContainer = () => {
  return (
    <Row style={{ width: "80%" }}>
      <Row
        style={{
          paddingTop: "80px",
        }}
      >
        <Col sm="12" md="4">
          <img src={BabyYoda} style={{ overflow: "hidden", height: "300px" }} />
        </Col>
        <Col sm="12" md="8" style={{ textAlign: "left", fontSize: "18px" }}>
          <h2>Guardian of USC</h2>
          <p>
            At HackSC 2020, my teammates and I built a robot inspired by a
            classic character from "The Mandalorian". I developed the full-stack
            pipeline that governed the API’s that were utilized for our robot's
            software. I also developed the code to pitch-shift the robot’s voice
            to sound more like child for baby Yoda.
          </p>
          <p>
            The Guardian will be capable of detecting high threat risks like gun
            shooters before they cause any type of damage by identifying objects
            that are shaped like guns. The Guardian will also be capable of
            detecting bullying on various spectrums ranging from verbal to
            physical.
          </p>
          <a href="https://devpost.com/software/guardian-of-usc">
            Link to Devpost
          </a>
        </Col>
      </Row>
      <Row style={{ paddingTop: "80px" }}>
        <Col sm="12" md="4">
          <img
            src={HitchNDitch}
            style={{ overflow: "hidden", height: "330px" }}
          />
        </Col>
        <Col sm="12" md="8" style={{ textAlign: "left", fontSize: "18px" }}>
          <h2>Hitch 'n Ditch</h2>
          <p>
            At HackSC 2019, my team and I built a mobile app that combines both
            car sharing and car renting in order to reduce stationary waste as
            well as traffic. I built the backend that handled Google Maps
            integration as well as the user information.
          </p>
          <p>
            Hitch 'n Ditch allows users to have the freedom of a car sharing
            service such as Maven or Zipcar but further aims to reduce
            congestion by utilizing "last mile delivery". Rather than giving the
            user full autonomy, within the last mile of driving, the user will
            be prompted to pick up the next person to drive the car.
            Additionally, the car will keep track of frequent driving patterns
            to appropriately match car pools without providing too much
            overhead.
          </p>
          <a href="https://devpost.com/software/hitch-n-ditch">
            Link to Devpost
          </a>
        </Col>
      </Row>
      <Row style={{ paddingTop: "80px" }}>
        <Col sm="12" md="4">
          <img src={GiftAma} style={{ overflow: "hidden", height: "300px" }} />
        </Col>
        <Col sm="12" md="8" style={{ textAlign: "left", fontSize: "18px" }}>
          <h2>Dear Mom's Gift</h2>
          <p>
            When I was a software engineer at Momento, we developed many
            incredible AR and VR software experiences. However, the most
            successful was Dear Mom's Gift that came out along with the Dear Mom
            VR experience. I worked closely with Kevin Wu to polish and build an
            AR gift creation experience utilizing Aframe and Three.js to create
            a engaging mobile interface.
          </p>
          <p>
            The main purpose of this experience was to allow creators to build a
            mother's day gift for their mothers. We wanted to experiment with
            the new trend of online gift making and by the first couple weeks
            after its release, over 200 gifts were created.
          </p>
          <a href="https://gift.amavr.com/">
            Link to application (Mobile Recommended)
          </a>
        </Col>
      </Row>
      <Row style={{ paddingTop: "80px" }}>
        <Col sm="12" md="4">
          <img
            src="https://www.freeiconspng.com/uploads/no-image-icon-1.jpg"
            style={{
              overflow: "hidden",
              height: "300px",
              borderWidth: "1px",
              borderColor: "grey",
            }}
          />
        </Col>
        <Col sm="12" md="8" style={{ textAlign: "left", fontSize: "18px" }}>
          <h2>Disability Assistance App</h2>
          <p>
            This was the first hackathon I have ever attended at and the first
            app I have ever built. At TrojanHacks 2018, my friend Duy Nguyen and
            I built an app to help sensually disabled individuals. We used
            Google Speech/Text/Vision APIs to build various applets.
            Speech-to-Text to assist the deaf; Text-to-Speech to assist the
            mute; Pictures-to-Speech to assist the blind. Everything was coded
            in Python and the project can be ran via the terminal
          </p>
          <p></p>
          <a href="https://github.com/jjmarsha/Disability-Assistance-App">
            Link to github
          </a>
        </Col>
      </Row>
    </Row>
  );
};

export default ProjectContainer;
