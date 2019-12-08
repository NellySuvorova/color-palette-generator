import React, { useRef, useState } from "react";

import Container from "./Container";

const DragDrop = props => {
  const inputBox = useRef(null);
  const [drag, setDrag] = useState(false);

  const handleImage = file => {
    const reader = new FileReader();
    const img = document.querySelector("img");
    reader.onloadend = function() {
      img.src = reader.result;
    };

    if (file) {
      reader.readAsDataURL(file);
    } else {
      img.src = "";
    }
    return img;
  };

  return (
    <Container
      onClick={() => inputBox.current.click()}
      onDrop={e => {
        e.preventDefault();
        props.setImage(handleImage(e.dataTransfer.files[0]));
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
          props.setImage(handleImage(e.target.files[0]));
        }}
      />
    </Container>
  );
};

export { DragDrop };
