import React from "react";
import Form from "../Form/Form";
import List from "../Sections/List";

const usid = require('usid');

const Panel = () => {
  return (
    <React.Fragment>
      <div className="panel-header">
        <Form key={usid.rand()} type={"repair"} />
      </div>
      <List key={usid.rand()} type={"service"}></List>
    </React.Fragment>
  );
};
export default Panel;
