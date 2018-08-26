import React from "react";
import Link from "next/link";

import Head from "next/head";

var verovio = require("verovio-dev");

class MEI extends React.Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }

  componentDidMount() {
    fetch(
      "https://raw.githubusercontent.com/music-encoding/sample-encodings/master/MEI_3.0/Music/Complete_examples/Aguado_Walzer_G-major.mei"
    )
      .then(serverResponse => serverResponse.text())
      .then(data => {
        var vrv = verovio.toolkit();

        this.ref.current.innerHTML = vrv.renderData(data, {});
      });
  }

  render() {
    return <div ref={this.ref}>MEI</div>;
  }
}

export default MEI;
