import React, { useState } from "react";
import axios, { AxiosResponse } from "axios";

interface StateForm {
  requestApi: string;
  requestMethod: string;
  requestBody: string;
}

function Form() {
  let formData: StateForm;
  let setFormData: any;

  [formData, setFormData] = useState({
    requestApi: "",
    requestMethod: "GET",
    requestBody: "",
  });

  const onChange = (e: any) => {
    e.target.name === "requestMethod"
      ? setFormData({ ...formData, [e.target.name]: e.target.innerHTML })
      : setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e: any) => {
    e.preventDefault();
    // Sending the form data to the server
    const res: AxiosResponse = await axios.post("/request", formData);

    console.log(res);
  };

  let { requestApi, requestMethod, requestBody } = formData;

  return (
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
        Submit
      </button>
    </form>
  );
}

export default Form;
