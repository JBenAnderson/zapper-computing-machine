import React from "react";
import axios from "axios";

import {
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Row,
  Col,
  Container,
  NavLink,
} from "reactstrap";

export default class zapper extends React.Component {
  state = {
    defiList: [],
  };

  componentDidMount() {
    axios
      .get(
        `https://api.zapper.fi/v1/apps?api_key=96e0cc51-a62e-42ca-acee-910ea7d2a241`
      )
      .then((res) => {
        const defiList = res.data;
        this.setState({ defiList });
      })
      .catch((error) => console.error(`Error: ${error}`));
  }
  render() {
    return (
      <Container className="container-fluid">
        <Row className="row">
          {this.state.defiList.map((defiList) => (
            <Col xs="6" sm="3" key={defiList.id} className="col">
              <Card
                style={{
                  margin: "0 0.5rem 10px 0.5rem",
                  padding: 0,
                  marginLeft: 23,
                }}
                className="card"
              >
                <Container id="icon">
                  <CardImg
                    top={true}
                    className="img-fluid"
                    alt="Responsive image"
                  />
                </Container>
                <CardBody>
                  <CardTitle className="cardTitle">
                    <a>{defiList.name}</a>
                  </CardTitle>
                  <CardText className="tags">{defiList.tags}</CardText>
                </CardBody>
                <NavLink
                  href={defiList.url}
                  target="_blank"
                  className="navLink"
                >
                  {`${defiList.url}`}
                </NavLink>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}
