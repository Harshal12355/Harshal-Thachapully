import React from "react";
import "../styles/Projects.css";
import FolderOpenRoundedIcon from "@material-ui/icons/FolderOpenRounded";
import GitHubIcon from "@material-ui/icons/GitHub";
import OpenInBrowserIcon from "@material-ui/icons/OpenInBrowser";
import FadeInSection from "./FadeInSection";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel from "react-bootstrap/Carousel";
import ExternalLinks from "./ExternalLinks";

class Projects extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1"
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }
  render() {
    // const spotlightProjects = {
    //   "No Man's Land": {
    //     title: "no man's land",
    //     desc:
    //       "A third-person survival-mode game where you battle against time and space to return to Earth.",
    //     techStack: "C# (UNITY)",
    //     link: "https://github.com/slakh96/no-mans-land",
    //     open: "https://gazijarin.itch.io/no-mans-land",
    //     image: "/assets/nomansland.png"
    //   },
    //   Truth: {
    //     title: "truth",
    //     desc:
    //       "A three.js simulation of the planet system revolving around a monolith.",
    //     techStack: "JAVASCRIPT (THREE.JS)",
    //     link: "https://github.com/gazijarin/truth",
    //     open: "https://gazijarin.github.io/Truth/",
    //     image: "/assets/truth.png"
    //   },
    //   "Tall Tales": {
    //     title: "tall tales",
    //     desc:
    //       "A multi-player story-telling web game for 3-5 players. Its usage of sockets to allow for concurrent gameplay, connecting friends across the internet.",
    //     techStack: "NODE.JS (SOCKET.IO), REACT.JS, MONGODB",
    //     link: "https://github.com/gazijarin/TallTales",
    //     open: "https://talltales.herokuapp.com/",
    //     image: "/assets/talltales.png"
    //   },
    //   Portfolio: {
    //     title: "portfolio.js",
    //     desc:
    //       "A small JS library that helps with clear and succinct data presentation.",
    //     techStack: "NODE.JS (EXPRESS.JS)",
    //     link: "https://github.com/gazijarin/Portfolio.js",
    //     open: "https://afternoon-ocean-92382.herokuapp.com/",
    //     image: "/assets/portfolio.png"
    //   }
    // };
    const projects = {
      "Heart Disease": {
        desc:
          "Acquiring and using a Heart Disease dataset from MNIST and performing EDA as well as using a series of machine learning algorithms to predict the possibility of heart disease occuring.",
        techStack: "Python, Scikit Learn, Matplotlib, Seaborn",
        link: "https://github.com/Harshal12355/Heart-Disease",
        // open: "https://tdsb-app.herokuapp.com/"
      },
      "Using Tweets to Predict Stock direction": {
        desc:
          "Dissertation project involving the analysis of tweets from different tech companies and finding a sentiment score and predicting the next the day trend.",
        techStack: "Python, Matplotlib, Numpy, Scikit Learn, Seaborn, VaderSentiment",
        link: "https://github.com/Harshal12355/Tweets-Analysis-and--Stock-prediction/",
        // open: "https://tdsb-app.herokuapp.com/"
      },
      "Netflix EDA and Visualisation": {
        desc:
          "Use the Javascript library, D3, to try bring data from netflix data",
        techStack: "JavaScript, D3, HTML, CSS",
        link: "https://github.com/Harshal12355/Netflix-Analysis-and-Visualisation-using-D3",
        // open: "https://harshal12355.github.io/Netflix-Analysis-and-Visualisation-using-D3/"
      },
      "Google Capstone Project: Cyclistic": {
        desc:
          "Google Capstone Project",
        techStack: "JavaScript, D3, HTML, CSS",
        link: "https://github.com/Harshal12355/Netflix-Analysis-and-Visualisation-using-D3",
        // open: "https://harshal12355.github.io/Netflix-Analysis-and-Visualisation-using-D3/"
      },
      "Elden Ring Weapon Analysis ": {
        desc:
          "Using Python, Pandas, and Visualisation libraries in python EDA was performed to better understand the ",
        techStack: "Python, Matplotlib, Numpy, Seaborn",
        // link: "https://www.kaggle.com/code/harshalthachapully/elden-ring-weapon-analysis",
        open: "https://www.kaggle.com/code/harshalthachapully/elden-ring-weapon-analysis"
      },
      "Airbnb in NYC Analysis": {
        desc:
          "Using Python, Pandas, and Visualisation libraries in python EDA was performed to better understand the ",
        techStack: "Python, Matplotlib, Numpy, Seaborn",
        // link: "https://www.kaggle.com/code/harshalthachapully/airbinb-in-nyc-eda",
        open: "https://www.kaggle.com/code/harshalthachapully/airbinb-in-nyc-eda"
      },
    };

    return (
      <div id="projects">
        <div className="section-header ">
          <span className="section-title">/ projects</span>
        </div>
        {/* <Carousel>
          {Object.keys(spotlightProjects).map((key, i) => (
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={spotlightProjects[key]["image"]}
                alt={key}
              />
              <div className="caption-bg">
                <Carousel.Caption>
                  <h3>{spotlightProjects[key]["title"]}</h3>
                  <p>
                    {spotlightProjects[key]["desc"]}
                    <p className="techStack">
                      {spotlightProjects[key]["techStack"]}
                    </p>
                  </p>
                  <ExternalLinks
                    githubLink={spotlightProjects[key]["link"]}
                    openLink={spotlightProjects[key]["open"]}
                  ></ExternalLinks>
                </Carousel.Caption>
              </div>
            </Carousel.Item>
          ))}
        </Carousel> */}
        <div className="project-container">
          <ul className="projects-grid">
            {Object.keys(projects).map((key, i) => (
              <FadeInSection delay={`${i + 1}00ms`}>
                <li className="projects-card">
                  <div className="card-header">
                    <div className="folder-icon">
                      <FolderOpenRoundedIcon
                        style={{ fontSize: 35 }}
                      ></FolderOpenRoundedIcon>
                    </div>
                    <ExternalLinks
                      githubLink={projects[key]["link"]}
                      openLink={projects[key]["open"]}
                    ></ExternalLinks>
                  </div>

                  <div className="card-title">{key}</div>
                  <div className="card-desc">{projects[key]["desc"]}</div>
                  <div className="card-tech">{projects[key]["techStack"]}</div>
                </li>
              </FadeInSection>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Projects;
