import React from "react";
import "./styles.scss";
import "./button.scss";

import Superellipse from "./superellipse";
import Icon from "./icon.js";
import Signifier from "./signifier";
import Timestamp from "./timestamp";
import Actorname from "./actorname";
import Copy from "./copy";
import Button from "./button";

export default function App() {
  return (
    <div className="App">
      <h1>Difficult Waffles</h1>
      <h2>Start editing to see some magic happen! 1/4 1/2 </h2>
      <Superellipse />
      <Icon type="birthday" />
      <Icon type="message" />
      <Icon type="company" />
      <Icon type="anniversary" />
      <Icon type="profilevisit" />
      <Icon type="comment" />
      <Icon type="like" />
      <Signifier type="Birthday" />
      <Timestamp time="11:00" />
      <Actorname name="Eva Mustermann" />
      <Copy copy="Lorem Ipsum dolor sit amet. Consecteteur" />
      <Button type="tertiary">Text</Button>
    </div>
  );
}
