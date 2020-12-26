import React from "react";

interface Props {
  result: {};
}

const Result: React.FC<Props> = ({ result }) => {
  return (
    <section>
      <div className="container mt-3">
        <h3>Request's result</h3>
        <p className="code">
          {typeof result == "object" ? JSON.stringify(result) : result}
        </p>
      </div>
    </section>
  );
};

export default Result;
