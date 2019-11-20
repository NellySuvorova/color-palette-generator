import React from "react";

const ImageContext = React.createContext({ image: null, setImage: () => {} });
export const ImageProvider = ImageContext.Provider;
export const ImageConsumer = ImageContext.Consumer;
export default ImageContext;
