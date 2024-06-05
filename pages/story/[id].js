import Center from "@/components/Center";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  min-height: 90vh;
  width: 100%;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
`;

const StyledTitle = styled.h1`
  font-weight: 300;
  text-align: center;
`;
const StyledAuthor = styled.h2`
  text-align: end;
  font-weight: 100;
  font-size: medium;
`;
const StyledDate = styled.h3`
  text-align: end;
  font-weight: 100;
  font-size: small;
`;

const ImageContainer = styled.div`
  height: 500px;
  background-color: white;
  margin-bottom: 20px;
  margin-top: 20px;
  padding: 10px 0;
`;
const StyledImg = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
`;

const ArticleContainer = styled.div`
  padding: 20px 0;
`;
const StyledArticel = styled.p``;

function StoryPage() {
  return (
    <>
      <Header> </Header>
      <Center>
        <StyledContainer>
          <StyledTitle>Summer sunset</StyledTitle>
          <ImageContainer>
            <StyledImg src="/forest.jpg" />
          </ImageContainer>
          <ArticleContainer>
            <StyledArticel>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Consequatur unde ratione explicabo labore non dignissimos magnam
              dolorem reiciendis, officiis facere magni architecto cumque
              pariatur obcaecati qui, possimus doloremque sit incidunt rem
              accusamus. Ad alias at eveniet beatae aut quo, in laborum veniam,
              corporis voluptatem laboriosam nulla ipsam omnis praesentium
              officia dolor dicta animi ipsum iste saepe aspernatur consectetur?
              Culpa delectus amet, ipsam, nihil sunt repellendus, facere
              quibusdam iste nostrum veritatis quos laudantium minima ipsum
              accusantium. Error ex possimus vitae alias asperiores recusandae
              omnis quam nulla cum quo? Maiores iste voluptatum nisi
              exercitationem alias minus expedita, deleniti eum provident quas
              perferendis!
            </StyledArticel>
          </ArticleContainer>
          <StyledAuthor>Pabin Limbu</StyledAuthor>
          <StyledDate>2024-feb-12</StyledDate>
        </StyledContainer>
      </Center>
      <Footer />
    </>
  );
}

export default StoryPage;
