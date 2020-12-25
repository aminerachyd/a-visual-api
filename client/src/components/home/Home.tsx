import React, { Fragment } from "react";

import Form from "./form/Form";

const Home = () => {
  return (
    <Fragment>
      <section>
        <div className="container mt-3">
          <h3>Put your API link here</h3>
          <Form />
        </div>
      </section>

      <section>
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
