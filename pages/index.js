import BannersCarousel from "@/components/BannerCarousle";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HighLightedProductCarousel from "@/components/HighlightedProductCarousel";
import Head from "next/head";

import VintagePage from "@/components/VintagePage";
import VintageStory from "@/components/VintageStory";
import { mongooseConect } from "@/lib/mongoose";
import Banner from "@/models/Banner";
import { Product } from "@/models/Product";
import React, { useState } from "react";

export default function HomePage({
  banners,
  vintageProduct,
  highlightedProduct,
}) {
  const OPTIONS = { loop: true };

  return (
    <div>
      <Head>
        <title>Vintage Lens</title>
      </Head>
      <Header />

      <BannersCarousel banners={banners} options={OPTIONS} />
      <VintagePage vintageProduct={vintageProduct} />
      <HighLightedProductCarousel
        products={highlightedProduct}
        optoptions={{ align: "start" }}
      />
      <VintageStory />
      <Footer />
    </div>
  );
}

export async function getServerSideProps() {
  const feturedProductID = "65f2a1b6831f2ec7265b8e4b";
  await mongooseConect();
  const allBanners = await Banner.find({});
  const allVintageProducts = await Product.find(
    { isVintage: true },
    { title: 1, description: 1, images: 1 }
  ).limit(3);

  const allHighlightedProducts = await Product.find(
    { isFeatured: true },
    { title: 1, images: { $slice: 1 } }
  ).limit(6);
  const featuredProduct = await Product.findById(feturedProductID); // product is a mongodb object which is not accepted as props. so change it in string and change it into json.

  return {
    props: {
      featuredProduct: JSON.parse(JSON.stringify(featuredProduct)),
      banners: JSON.parse(JSON.stringify(allBanners)),
      vintageProduct: JSON.parse(JSON.stringify(allVintageProducts)),
      highlightedProduct: JSON.parse(JSON.stringify(allHighlightedProducts)),
    },
  };
}
