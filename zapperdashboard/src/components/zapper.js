import React from "react";

import axios from "axios";

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
      <ul>
        {this.state.defiList.map((defiList) => (
          <li key={defiList.id}>{defiList.name}</li>
        ))}
      </ul>
    );
  }
}

//API key is standard Public key no secret needed
// const url =
//   "https://api.zapper.fi/v1/apps?api_key=96e0cc51-a62e-42ca-acee-910ea7d2a241";

// function Zapper() {
//   const [list, getList] = useState("");
//   axios
//     .get(`${url}past`)
//     .then((response) => {
//       const allList = response.data.list.allList;
//     })
//     .catch((error) => console.error(`Error: ${error}`));
//   return <></>;
// }
