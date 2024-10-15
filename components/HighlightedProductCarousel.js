import React from "react";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import useEmblaCarousel from "embla-carousel-react";
import styled from "styled-components";
import Link from "next/link";

const StyledEmbla = styled.div`
  --slide-height: 19rem;
  --slide-spacing: 1rem;
  --slide-size: 100%;
  --slide-spacing-sm: 1.6rem;
  --slide-size-sm: 50%;
  --slide-spacing-lg: 2rem;
  --slide-size-lg: calc(100% / 3);
  max-width: 100%;
  margin-top: 20px;
  /* margin: auto; */
  position: relative;
  background-color: rgb(245, 245, 245);

  height: 300px;

  svg {
    color: red;
  }
`;

const StyledViewport = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100%;
  margin: 0 auto;
`;

const StyledContainer = styled.div`
  backface-visibility: hidden;
  display: flex;
  touch-action: pan-y pinch-zoom;
  margin-left: calc(var(--slide-spacing) * -1);
  height: 100%;

  @media (min-width: 750px) {
    margin-left: calc(var(--slide-spacing-sm) * -1);
  }
  @media (min-width: 1200px) {
    margin-left: calc(var(--slide-spacing-lg) * -1);
  }
`;

const StyledSlide = styled.div`
  height: 100%;
  min-width: 0;
  flex: 0 0 var(--slide-size);
  padding-left: var(--slide-spacing);

  @media (min-width: 750px) {
    flex: 0 0 var(--slide-size-sm);
    padding-left: var(--slide-spacing-sm);
  }
  @media (min-width: 1200px) {
    flex: 0 0 var(--slide-size-lg);
    padding-left: var(--slide-spacing-lg);
  }
`;
const StyledSlidItems = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 2%;
`;
const StyledSlideItemContainer = styled.div`
  background-color: white;
  padding: 10px;
  display: flex;
  flex-direction: column;
  height: 100%;
  -webkit-box-shadow: 0px 1px 5px -1px rgba(0, 0, 0, 0.22);
  -moz-box-shadow: 0px 1px 5px -1px rgba(0, 0, 0, 0.22);
  box-shadow: 0px 1px 5px -1px rgba(0, 0, 0, 0.22);
`;
const ImageContainer = styled.div`
  width: 100%;
  height: 75%;
  display: flex;
`;
const StyledImg = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
`;

const StyledButton = styled(Link)`
  align-self: flex-end;
  padding: 7px 12px;
  border-radius: 3px;
  background-color: black;
  color: white;
  text-decoration: none;
  margin-top: 7px;
  font-size: small;
`;

const StyledTitle = styled.h1`
  font-size: medium;
  font-weight: bold;
  padding-bottom: 10px;
  height: 10%;
`;

const StyledHeader = styled.h1`
  font-weight: lighter;
  padding-left: 10px;
  padding-top: 10px;
  padding-bottom: 40px;
`;

const Seperator = styled.hr`
  border-top: 3px solid black;
  width: 25%;
  margin-left: 10px;
  margin-top: 50px;
  margin-bottom: 30px;
`;
const HighLightedProductCarousel = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <StyledEmbla className="embla">
      {/* <Seperator /> */}
      {/* <StyledHeader>Highlighted Products</StyledHeader> */}
      <StyledViewport className="embla__viewport" ref={emblaRef}>
        <StyledContainer className="embla__container">
          {props.products?.map((product) => {
            return (
              <StyledSlide key={product._id} className="embla__slide">
                {/* <div className="" style={{backgroundColor:"pink"}}>PABIN</div> */}
                <StyledSlidItems className="embla__slide__number">
                  <StyledSlideItemContainer>
                    <StyledTitle>{product.title}</StyledTitle>
                    <ImageContainer>
                      <StyledImg src={product.images[0]} alt="" />
                    </ImageContainer>
                    <StyledButton href={`/product/${product._id}`}>
                      Discover
                    </StyledButton>
                  </StyledSlideItemContainer>
                </StyledSlidItems>
              </StyledSlide>
            );
          })}
        </StyledContainer>
      </StyledViewport>
      <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
      <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
    </StyledEmbla>
  );
};

export default HighLightedProductCarousel;
