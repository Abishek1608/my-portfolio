import { Row, Col } from "reactstrap";

function Skills() {
  return (
    <div className="container-fluid vh-100 ">
      <Row className="mb-4">
        <Col lg='6'>
          <h3 className="progress-title">HTML5</h3>
          <div className="progress red " style={{ height: "30px" }}>
            <div
              className="progress-bar progress-bar-danger progress-bar-striped active"
              style={{ width: "100%" }}
            >
              <div className="progress-value">100%</div>
            </div>
          </div>
        </Col>
        <Col lg='6' >
          <h1 className="progress-title">CSS3</h1>
          <div className="progress red " style={{ height: "30px" }}>
            <div
              className="progress-bar progress-bar-danger progress-bar-striped active"
              style={{ width: "95%",backgroundColor: '#FF5733' }}
            >
              <div className="progress-value">95%</div>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="mb-4">
        <Col lg='6'>
          <h3 className="progress-title">javascript</h3>
          <div className="progress red " style={{ height: "30px" }}>
            <div
              className="progress-bar progress-bar-danger progress-bar-striped active"
              style={{ width: "80%" }}
            >
              <div className="progress-value">80%</div>
            </div>
          </div>
        </Col>
        <Col lg='6'>
          <h3 className="progress-title">Bootstrap</h3>
          <div className="progress red " style={{ height: "30px"  }}>
            <div
              className="progress-bar progress-bar-danger progress-bar-striped active"
              style={{ width: "80%",backgroundColor: '#FF5733' }}
            >
              <div className="progress-value">80%</div>
            </div>
          </div>
        </Col>
        </Row>
        <Row>
        <Col lg='6' >
          <h3 className="progress-title">Reactjs</h3>
          <div className="progress red " style={{ height: "30px" }}>
            <div
              className="progress-bar progress-bar-danger progress-bar-striped active"
              style={{ width: "70%" }}
            >
              <div className="progress-value">70%</div>
            </div>
          </div>
        </Col>
        <Col lg='6'>
          <h3 className="progress-title">Nestjs</h3>
          <div className="progress red " style={{ height: "30px" }}>
            <div
              className="progress-bar progress-bar-danger progress-bar-striped active"
              style={{ width: "80%",backgroundColor: '#FF5733' }}
            >
              <div className="progress-value">80%</div>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg='6' >
          <h3 className="progress-title">Mysql</h3>
          <div className="progress red " style={{ height: "30px" }}>
            <div
              className="progress-bar progress-bar-danger progress-bar-striped active"
              style={{ width: "75%" }}
            >
              <div className="progress-value">75%</div>
            </div>
          </div>
        </Col>
        <Col lg='6'>
          <h3 className="progress-title">Rest API</h3>
          <div className="progress red " style={{ height: "30px" }}>
            <div
              className="progress-bar progress-bar-danger progress-bar-striped active"
              style={{ width: "70%",backgroundColor: '#FF5733' }}
            >
              <div className="progress-value">70%</div>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg='6' >
          <h3 className="progress-title">Material UI</h3>
          <div className="progress red " style={{ height: "30px" }}>
            <div
              className="progress-bar progress-bar-danger progress-bar-striped active"
              style={{ width: "80%" }}
            >
              <div className="progress-value">80%</div>
            </div>
          </div>
        </Col>
        <Col lg='6'>
          <h3 className="progress-title">DB Diagram</h3>
          <div className="progress red " style={{ height: "30px" }}>
            <div
              className="progress-bar progress-bar-danger progress-bar-striped active"
              style={{ width: "70%",backgroundColor: '#FF5733' }}
            >
              <div className="progress-value">70%</div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Skills;
