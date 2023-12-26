import { InputLabel } from "@mui/material";
import React from "react";
import { useDropzone } from "react-dropzone";

const DragDropComponenet = () => {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <section className="container">
        <InputLabel>Profile Picture</InputLabel>
      <div
        {...getRootProps({ className: "dropzone" })}
        style={{  border: "1px solid black", display:"flex" , alignItems:"center", flexDirection:"column", padding:"40px" }}
      >
        <input {...getInputProps()} />
        <InputLabel>
          Drag 'n' drop some files here, or click to select files
        </InputLabel>
        <aside>
          <h4>Files</h4>
          <ul>{files}</ul>
        </aside>
      </div>
    </section>
  );
};

export default DragDropComponenet;
