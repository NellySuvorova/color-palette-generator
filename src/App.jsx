import React, { useState } from "react";

import { ImageProvider, ImageConsumer } from "./context";

import { DragDrop } from "./drag-files";
import { PickColors } from "./pick-colors";

const App = () => {
  const [image, setImage] = useState();
  return (
    <ImageProvider value={{ image, setImage }}>
      <ImageConsumer>
        {({ image, setImage }) => (
          <>
            <PickColors image={image} />
            <DragDrop setImage={setImage} />
          </>
        )}
      </ImageConsumer>
    </ImageProvider>
  );
};

export default App;
