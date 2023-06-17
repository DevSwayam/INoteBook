import React from "react";
import { Carousel } from "react-bootstrap";
import "./About.css";

const About = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card about-card">
            <div className="card-body">
              <h1 className="card-title text-center mb-4">About Us</h1>
              <Carousel fade controls={false} interval={5000}>
                <Carousel.Item>
                  <div className="carousel-content">
                    <h2>Organize Your Life</h2>
                    <p>
                      With our notes app, you can easily organize your personal
                      and professional life. Keep track of important tasks,
                      ideas, and reminders all in one place.
                    </p>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="carousel-content">
                    <h2>Boost Productivity</h2>
                    <p>
                      Stay focused and boost your productivity with our
                      efficient note-taking features. Capture your thoughts
                      quickly and access them anytime, anywhere.
                    </p>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="carousel-content">
                    <h2>Never Miss a Detail</h2>
                    <p>
                      Don't let important information slip away. Our app allows
                      you to capture and store every detail, ensuring nothing
                      gets overlooked.
                    </p>
                  </div>
                </Carousel.Item>
              </Carousel>
              <p className="text-center mt-4">
                Start using our notes app today and experience the convenience
                and power of effective note-taking.
              </p>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default About;
