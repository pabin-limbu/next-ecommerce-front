import Center from "@/components/Center";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  min-height: 58vh;
  padding: 20px;
  background-color: white;
`;
const Article = styled.p``;

function about() {
  return (
    <div>
      <Header></Header>
      <Center>
        <Container>
          <Article>
            Welcome to our vintage lens store, a haven for photography
            enthusiasts and collectors alike. Established in 2023, we have been
            dedicated to bringing you a curated selection of vintage camera
            lenses that capture not just images, but moments and memories. Our
            store is more than just a business; it’s a celebration of the art of
            photography. We believe that each lens we offer has its own story to
            tell, and we’re here to help you find the perfect lens that adds a
            unique touch to your photographic journey. We specialize in a wide
            range of vintage lenses, each carefully selected for its unique
            characteristics and superior quality. Our collection spans various
            brands and models, catering to both professional photographers and
            hobbyists. In addition to vintage lenses, we also offer a selection
            of cameras that pair perfectly with our lenses. Whether you’re a
            seasoned professional or a budding photographer, we have something
            to suit your needs and preferences. Our commitment to our customers
            goes beyond selling products. We strive to provide a shopping
            experience that is as unique as the items we sell. Our knowledgeable
            staff are always on hand to answer any questions and guide you in
            your quest for the perfect lens. Thank you for choosing us as your
            trusted partner in your photography journey. We look forward to
            serving you and helping you capture the world through a unique lens.
          </Article>
        </Container>
      </Center>
      <Footer></Footer>
    </div>
  );
}

export default about;
