import React from "react";
import { useState } from "react";
import Axios from "axios";

import {
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Row,
  Col,
  Container,
} from "reactstrap";
import axios from "axios";

function Zapper() {
  const [list, setList] = useState(null);

  const fetchData = async () => {
    const response = await axios.get(
      "https://api.zapper.fi/v1/apps?api_key=96e0cc51-a62e-42ca-acee-910ea7d2a241"
    );
    setList(response.data);
  };
  return (
    <>
      <div>
        <div>
          <button className="random-button" onClick={fetchData}>
            ZapperList
          </button>
          <br />
        </div>
      </div>
    </>
  );
}

export default Zapper;
