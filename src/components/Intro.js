import React from "react";

import "../styles/Intro.css";
import Typist from "react-typist";
import "react-typist/dist/Typist.css";
import GaziModel from "./GaziModel";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import FadeInSection from "./FadeInSection";
import FractalTree from "./FractalTree";

class Intro extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1",
      visible: true
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }
  render() {
    return (
      <div id="intro">
        <FractalTree></FractalTree>
        <Typist avgTypingDelay={120}>
          <span className="intro-title">
            {"hi, "}
            <span className="intro-name">{"harshal"}</span>
            {" here."}
          </span>
        </Typist>
        <FadeInSection>
          <div className="intro-subtitle">I create stuff sometimes.</div>
          <div className="intro-desc">
            I am a Data Scientist based in Boston. I have a deep 
            inclincation towards machine learning, deep learning, 
            artificial intelligence, analysis, and everything in between. 
          </div>
          <a
            href="mailto:harshalts@gmail.com"
            className="intro-contact"
          >
            <EmailRoundedIcon></EmailRoundedIcon>
            {" " + "Say hi!"}
          </a>
         
         <p>
         </p>
         <p>
         </p>
         <p>
         </p>
        
        </FadeInSection>
      </div>
    );
  }
}

export default Intro;
