import React, { useState } from "react";
import axios, { AxiosResponse } from "axios";

interface Props {
  setResultData: any;
}
interface State {
  requestApi: string;
  requestMethod: string;
  requestBody: string;
}

const Form: React.FC<Props> = ({ setResultData }) => {
  const [formData, setFormData] = useState<State>({
    requestApi: "",
    requestMethod: "GET",
    requestBody: "",
  });

  const onChange = (e: any) => {
    e.target.name === "requestMethod"
      ? setFormData({ ...formData, [e.target.name]: e.target.innerHTML })
      : setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const resetResults = (e: any) => {
    e.preventDefault();
    setResultData("Results reset. Try sending a request to an API.");
  };

  const onSubmit = async (e: any) => {
    e.preventDefault();
    // Sending the form data to the server
    // XXX Node loadbalancer goes here
    const res: AxiosResponse = await axios.post(
      "http://178.128.130.14:5000/request",
      formData
    );

    setResultData(res);
  };

  let { requestMethod } = formData;

  return (
    <section>
      <div className="container mt-3">
        <h3>Make a request</h3>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="form-group">
            <label htmlFor="api_input">API Link</label>
            <div className="d-flex">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    {requestMethod.toUpperCase()}
                  </span>
                </div>
                <input
                  id="api_input"
                  type="text"
                  className="form-control mr-3"
                  name="requestApi"
                  onChange={(e) => onChange(e)}
                />
              </div>
              <div className="btn-group">
                <button
                  type="button"
                  className="btn btn-primary dropdown-toggle"
                  data-toggle="dropdown"
                >
                  Request Method
                </button>
                <div className="dropdown-menu dropdown-menu-right">
                  <button
                    onClick={(e) => onChange(e)}
                    className="dropdown-item"
                    type="button"
                    name="requestMethod"
                  >
                    GET
                  </button>
                  <button
                    onClick={(e) => onChange(e)}
                    className="dropdown-item"
                    type="button"
                    name="requestMethod"
                  >
                    POST
                  </button>
                  <button
                    onClick={(e) => onChange(e)}
                    className="dropdown-item"
                    type="button"
                    name="requestMethod"
                  >
                    PUT
                  </button>
                  <button
                    onClick={(e) => onChange(e)}
                    className="dropdown-item"
                    type="button"
                    name="requestMethod"
                  >
                    DELETE
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Body</label>
            <textarea
              className="form-control"
              name="requestBody"
              onChange={(e) => onChange(e)}
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Send request
          </button>
          <button
            onClick={(e) => resetResults(e)}
            className="btn btn-danger ml-3"
          >
            Reset
          </button>
        </form>
      </div>
    </section>
  );
};

export default Form;
