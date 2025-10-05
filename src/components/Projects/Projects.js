import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import Samiksha from "../../Assets/Projects/Samiksha.png"
import bitsOfCode from "../../Assets/Projects/blog.png";
import Vp from "../../Assets/Projects/Vishwaprenaur.png"
import Baja from "../../Assets/Projects/Sales.png"
import AutoRental from "../../Assets/Projects/Autorental.jpg"
import Poewr_Prediction from "../../Assets/Projects/Autorental.jpg"
import stock from "../../Assets/Projects/Stock.jpg"
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Samiksha}
              isBlog={false}
              title="Samiksha"
              description="Developed an intelligent book review platform using FastAPI and Flask for smooth backend operations, integrated with Jinja templates for dynamic and responsive UI rendering.
Implemented an ML-based recommendation system trained on 10,000+ user reviews, achieving 92% accuracy in personalized book suggestions.
Optimized data pipelines to ensure fast recommendation retrieval, resulting in a 20% increase in user engagement."
              ghLink="https://github.com/rathidevesh/Book-Recommendation-System"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Vp}
              isBlog={false}
              title="Vishwaprenaur'24"
              description="Engineered a dynamic and interactive E-Summit website using React.js, featuring reusable components and efficient state management for smooth user interactions.
Integrated RESTful APIs to fetch and display live event details, enabling real-time content updates.
Enhanced website performance through lazy loading, code-splitting, and asset optimization, leading to a 25% increase in page views and improved user engagement."
              ghLink="https://github.com/rathidevesh/Vishwaprenaur-25"
              demoLink="https://www.vishwapreneur.in/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Baja}
              isBlog={false}
              title="Vishwaracers Baja"
              description="Built a scalable sales dashboard using the MERN stack, featuring a responsive React.js UI with lazy loading and modular components for optimal performance.
Developed secure RESTful APIs with JWT authentication and MongoDB aggregation, improving data efficiency and boosting customer acquisition by 20%."
              demoLink="https://vishwaracers-baja-frontend.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={AutoRental}
              isBlog={false}
              title="AutoRental"
              description="Developed a full-stack car rental application using MERN, enabling users to add, book, and manage cars seamlessly.
Implemented secure RESTful APIs, responsive React.js frontend, and MongoDB for efficient data handling, providing a smooth booking experience."
              ghLink="https://github.com/rathidevesh/AutoRental.github.io"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={stock}
              isBlog={false}
              title="Stock Revenue Analysis Dashboard"
              description="Developed a data-driven dashboard to analyze historical stock and revenue data, providing interactive visualizations for trends, patterns, and insights.
Implemented data cleaning, aggregation, and dynamic charts to enable informed decision-making and easy tracking of financial performance"
              ghLink="https://github.com/rathidevesh/Analyzing-Historical-Stock-Revenue-Data-and-Building-a-Dashboard"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Poewr_Prediction}
              isBlog={false}
              title="Delhi Peak Power Demand Prediction"
              description="Developed a machine learning project to analyze and predict peak electricity demand in Delhi using historical consumption, weather, and holiday data.
Performed data cleaning, exploratory analysis, and feature engineering, and built predictive models to forecast peak power usage, providing actionable insights for energy management and planning"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
              ghLink="https://github.com/rathidevesh/power-demand"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
