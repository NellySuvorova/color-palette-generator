import React, { useState } from "react";

import { ImageProvider, ImageConsumer } from "./context";

import { DragDrop } from "./drag-files";

const App = () => {
  const [image, setImage] = useState();
  return (
    <ImageProvider value={{ image, setImage }}>
      <ImageConsumer>
        {({ image, setImage }) =>
          image ? <div>Image loaded</div> : <DragDrop setImage={setImage} />
        }
      </ImageConsumer>
    </ImageProvider>
  );
};

export default App;
