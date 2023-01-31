import { Button } from "@mui/material";
import React from "react";

function AddFile(props) {
  return (
    <Button variant="contained" component="label">
      Upload File
      <input
        type="file"
        hidden
        onChange={(e) => props.upload(e.target.files?.[0])}
      />
    </Button>
  );
}

export default AddFile;
