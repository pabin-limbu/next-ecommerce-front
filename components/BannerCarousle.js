import React from "react";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import useEmblaCarousel from "embla-carousel-react";
import styled from "styled-components";
import Link from "next/link";

const StyledImage = styled.img`
  height: 100%;
  width: 100%;
  background-color: white;
  object-fit: cover;
`;

const StyledContent = styled.div`
  max-width: 80%;
  position: absolute;
  bottom: 16%;
  left: 10%;
`;

const StyledTitle = styled.h1`
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
`;

const StyledDescription = styled.h2`
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 1rem;
  color: white;
  font-weight: 100;
  padding-bottom: 10px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  background-color: white;
  padding: 10px;
`;

// EMBELA

const StyledEmbela = styled.div`
  max-width: 100%;
  width: 100%;
  max-height: 400px;
  height: 200px;
  margin: auto;
  background-color: gray;
  margin-top: 5px;
  position: relative;

  @media (min-width: 992px) {
    height: 400px;
  }
`;

const StyledEmbelaViewport = styled.div`
  overflow: hidden;
  max-width: 100%;
  width: 100%;
  height: 100%;
`;

const StyledEmbelaContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const StyledEmbelaSlide = styled.div`
  flex: 0 0 100%;
  min-width: 0;
  overflow: hidden;
  width: 100%;
  height: 100%;
  position: relative;
`;

const BannersCarousel = (props) => {
  const { options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <StyledEmbela className="embla">
      <StyledEmbelaViewport className="embla__viewport" ref={emblaRef}>
        <StyledEmbelaContainer className="embla__container">
          {props.banners?.map((banner) => {
            return (
              <StyledEmbelaSlide key={banner._id} className="embla__slide">
                <StyledImage src={banner.bannerImage} alt="" />
                <StyledContent>
                  <StyledTitle>{banner.title}</StyledTitle>
                  <StyledDescription>{banner.description}</StyledDescription>
                  <StyledLink href={`/product/${banner.productId}`}>
                    See More
                  </StyledLink>
                </StyledContent>
              </StyledEmbelaSlide>
            );
          })}
        </StyledEmbelaContainer>
      </StyledEmbelaViewport>

      <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
      <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />

      <div className="embla__dots">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => onDotButtonClick(index)}
            className={"embla__dot".concat(
              index === selectedIndex ? " embla__dot--selected" : ""
            )}
          />
        ))}
      </div>
    </StyledEmbela>
  );
};

export default BannersCarousel;
