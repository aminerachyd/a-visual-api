import React, { Fragment } from "react";

const Home = () => {
  return (
    <Fragment>
      <section id="input-section">
        <div className="container mt-3">
          <h3>Put your API link here</h3>
          <form>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">API Link</label>
              <div className="d-flex">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">
                      GET
                    </span>
                  </div>
                  <input
                    id="exampleInputEmail1"
                    type="email"
                    className="form-control mr-3"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="btn-group">
                  <button
                    type="button"
                    className="btn btn-primary dropdown-toggle"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Request Method
                  </button>
                  <div className="dropdown-menu dropdown-menu-right">
                    <button className="dropdown-item" type="button">
                      GET
                    </button>
                    <button className="dropdown-item" type="button">
                      POST
                    </button>
                    <button className="dropdown-item" type="button">
                      PUT
                    </button>
                    <button className="dropdown-item" type="button">
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
                aria-describedby="emailHelp"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </section>

      <section id="result-section">
        <div className="container mt-3">
          <h3>Your result</h3>
          <p className="code">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quod
            odit consequuntur dignissimos voluptate iure esse, harum sint
            laborum quam ut eum sapiente laboriosam sequi animi eligendi, quia
            nihil amet recusandae quibusdam delectus! Aliquam ab tempore,
            cupiditate vero voluptates obcaecati est nam distinctio. Id ipsum
            odit voluptatem ea eaque amet culpa reiciendis sint illo animi nemo
            sequi pariatur optio atque, at, deleniti officiis laborum unde
            voluptates quod quam voluptatibus repudiandae inventore omnis. Eos
            quidem fugit excepturi minima! Porro, saepe! Adipisci error cum
            minima, tempora ratione optio! Ab autem omnis in debitis quaerat!
            Atque doloribus possimus eligendi vero molestiae velit natus?
          </p>
        </div>
      </section>
    </Fragment>
  );
};

export default Home;
