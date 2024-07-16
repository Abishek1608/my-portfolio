import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Nav, NavItem, TabContent, TabPane, Row, Col } from "reactstrap";
import classnames from "classnames";
import Home from "./Components/Home";
import Skills from "./Components/skills";
import Project from "./Components/Project";
import Contact from "./Components/contact";

function App() {
  const [activeTab, setactiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) {
      setactiveTab(tab);
    }
  };

  return (
    <div>
      <Nav
        tabs
        className="d-flex justify-content-between align-items-center p-3 border border-white w-100"
      >
        <h2 className="">Portfolio</h2>
        <div className="d-flex">
          <NavItem>
            <NavLink
              style={{ cursor: "pointer" }}
              className={classnames(
                "nav-link mx-3 text-decoration-none border border-white",
                { active: activeTab === "1" }
              )}
              onClick={() => {
                toggle("1");
              }}
            >
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              style={{ cursor: "pointer" }}
              className={classnames(
                "nav-link mx-3 text-decoration-none border border-white",
                { active: activeTab === "2" }
              )}
              onClick={() => {
                toggle("2");
              }}
            >
              Skills
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              style={{ cursor: "pointer" }}
              className={classnames(
                "nav-link mx-3 text-decoration-none border border-white",
                { active: activeTab === "3" }
              )}
              onClick={() => {
                toggle("3");
              }}
            >
              Projects
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              style={{ cursor: "pointer" }}
              className={classnames(
                "nav-link mx-3 text-decoration-none border border-white",
                { active: activeTab === "4" }
              )}
              onClick={() => {
                toggle("4");
              }}
            >
              Contact
            </NavLink>
          </NavItem>
        </div>
      </Nav>
      <TabContent activeTab={activeTab} className="p-3">
        <TabPane tabId="1">
          <Row>
            <Col sm="12">
              <Home />
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col sm="12">
              <Skills />
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="3">
          <Row>
            <Col sm="12">
              <Project />
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="4">
          <Row>
            <Col sm="12">
              <Contact />
            </Col>
          </Row>
        </TabPane>
      </TabContent>
    </div>
  );
}

export default App;
