import React, { useState } from "react";
import styled from "styled-components";

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const BigImage = styled.img`
  max-width: 100%;
  min-height: 300px;
  object-fit: cover;
  max-height: 400px;
`;

const ImageButtons = styled.div`
  display: flex;
  gap: 10px;
  flex-grow: 0;
  margin-top: 10px;
`;

const BigImageWrapper = styled.div`
  text-align: center;
`;

const ImageButton = styled.div`
  border: 1px solid grey;
  height: 60px;
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  background-color: #ccc;

  ${(props) =>
    props.active ? "border-color:#ccc" : "border-color:transparent;opacity:0.7"}
`;

function ProductImages({ images }) {
  const [activeImage, setActiveImage] = useState(images[0]);

  return (
    <div>
      <BigImageWrapper>
        <BigImage src={activeImage} alt="" />
      </BigImageWrapper>
      <ImageButtons>
        {images.map((image) => {
          return (
            <ImageButton
              active={image === activeImage}
              onClick={() => {
                setActiveImage(image);
              }}
              key={image}
            >
              <Image src={image} alt="" />
            </ImageButton>
          );
        })}
      </ImageButtons>
    </div>
  );
}

export default ProductImages;
