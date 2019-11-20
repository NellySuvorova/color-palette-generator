import React, { useRef, useState } from "react";

import Container from "./Container";

const DragDrop = props => {
  const inputBox = useRef(null);
  const [drag, setDrag] = useState(false);
  return (
    <Container
      onClick={() => inputBox.current.click()}
      onDrop={e => {
        e.preventDefault();
        props.setImage(e.dataTransfer.files);
        setDrag(false);
      }}
      onDragOver={e => {
        e.preventDefault();
        setDrag(true);
      }}
      onDragLeave={e => {
        e.preventDefault();
        setDrag(false);
      }}
      dragState={drag}
    >
      <input
        style={{ display: "none" }}
        type="file"
        accept="image/*"
        ref={inputBox}
        onChange={e => {
          props.setImage(e.target.files);
        }}
      />
    </Container>
  );
};

export { DragDrop };
