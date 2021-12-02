import React from "react";
import { useState } from "react";
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
} from "reactstrap";

const url =
  "https://api.zapper.fi/v1/apps?api_key=96e0cc51-a62e-42ca-acee-910ea7d2a241";

function Zapper() {
  const [list, getList] = useState("");
  axios
    .get(`${url}past`)
    .then((response) => {
      const allList = response.data.list.allList;
    })
    .catch((error) => console.error(`Error: ${error}`));
  return <></>;
}

export default Zapper;
