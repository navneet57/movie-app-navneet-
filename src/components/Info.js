import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Img from "../utils/Shivanshu1.svg";
import Resume from "../utils/NAVNEET_resume.pdf";

class Info extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Card
          border="secondary"
          style={{
            width: "700px",
            borderRadius: 0,
            boxShadow: "0px 1px 2px 0px",
            border: "0",
          }}
          className="skills-card"
        >
          <div className="info-section">
            <img
              src={Img}
              alt="Shivanshu"
              style={{
                height: "140px",
                borderRadius: "50%",
                margin: "23px",
                border: "0.4px solid white",
                padding: "20px",
              }}
            />

            <div
              className="social-icons"
              style={{ textAlign: "center", padding: "20px" }}
            >
              <a
                href="https://leetcode.com/u/navneetkumarjyoti30/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab1 fab fa-facebook-square fa-2x" />
              </a>
              &emsp;
              <a
                href="https:https://github.com/navneet57"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab1 fab fa-github fa-2x " />
              </a>
              &emsp;
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab1 fab fa-linkedin fa-2x" />
              </a>
            </div>

            <div>
              <Card style={{ borderRadius: "0", border: "0" }}>
                <Card.Body>
                  <p>
                    I like to explore codes of popular repositories to discover
                    new tools and practices. I have a growing obsession for
                    beautiful code and sometimes piss off people in the process.
                  </p>
                  <br />
                  <p>
                    I'm Bachelor in Electronics & Communications Engineering
                    from BIT Mesra. I enjoy playing and watching cricket and
                    football, occasional swimming and sporadic travels.
                  </p>
                </Card.Body>
                <hr style={{ margin: "0", borderStyle: "dashed" }} />
                <div
                  className="resume"
                  style={{ textAlign: "center", padding: "20px" }}
                >
                  <a
                    href={Resume}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "0f081d"}}
                  >
                    <i className="fas fa-file-pdf " />
                    &nbsp;RESUME
                  </a>
                </div>
              </Card>
            </div>
          </div>
        </Card>
      </div>
    );
  }
}

export default Info;
