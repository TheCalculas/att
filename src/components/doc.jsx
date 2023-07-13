import React, { useState, useEffect } from "react";
import { Paper } from "@mui/material";
// create useStates of level, title, description

function Doc() {
  const [title, setTitle] = useState("This is a TITLE");
  const [desc, setDesc] = useState("THIS IS A DESC");
  const [level, setLevel] = useState("LEVEL");
  // create a useEffect to change title and description
  useEffect(() => {
    //  api call for changing the level
  });

  useEffect(() => {
    // for changing the title and desc
  }, [level]);

  return (
    <Paper className="paper">
      <div className="conatiner_title">{title}</div>
      <div className="container_desc">{desc}</div>
    </Paper>
  );
}

export default Doc;
