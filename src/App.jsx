import React, { useState } from "react";

import { ImageProvider, ImageConsumer } from "./context";

import { DragDrop } from "./drag-files";

function App() {
  const [image, setImage] = useState(null);
  console.log(image);
  return (
    <ImageProvider value={{ image, setImage }}>
      <ImageConsumer>
        {({ image, setImage }) =>
          image ? <div>Image loaded</div> : <DragDrop setImage={setImage} />
        }
      </ImageConsumer>
    </ImageProvider>
  );
}

export default App;
