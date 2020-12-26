import React, { Fragment, useState } from "react";

import Form from "./form/Form";
import Result from "./result/Result";

const Home: React.FC = () => {
  const [resultData, setResultData] = useState<string | object>(
    "No results yet. Try sending a request to an API."
  );

  return (
    <Fragment>
      <Form setResultData={setResultData} />
      <Result result={resultData} />
    </Fragment>
  );
};

export default Home;
