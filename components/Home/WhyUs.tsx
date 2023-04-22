import React from "react";

export const WHyUSData = [
  {
    url: "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/null/external-fee-automotive-dealership-flaticons-lineal-color-flat-icons-2.png",
    header: "Low Fee",
    body: "We offer low transaction fee",
  },
  {
    url: "https://img.icons8.com/arcade/64/null/private2.png",
    header: "Secure",
    body: "This is very secure",
  },
  {
    url: "https://img.icons8.com/external-prettycons-lineal-color-prettycons/49/null/external-speed-web-seo-prettycons-lineal-color-prettycons.png",
    header: " Fast Transaction",
    body: "Transactions are very fast",
  },
  {
    url: "https://img.icons8.com/color/48/null/economic-improvement.png",
    header: "Juicy Rewards",
    body: "We offer great reward",
  },
];

export default function WhyUs() {
  console.log(WHyUSData);
  return (
    <div className="container why_us ">
      <div className="rowx">
        <section className="effect col50" data-aos="fade-right">
          <div></div>
          <h1 className="text_gradient">Why Grate Dane Ai</h1>

          <p className="Why_Grate ">
            Portraits Of Soldiers And Citizens”. Enjoy This One Of A Kind, AI
            Generated NFT Collection Created To The Highest Standards. Be The
            One Of The Select To Discover The Magic Of Great Dane AI. Mint And
            Stake Your NFT Now! Surprising Every Time, Quality Craftsmanship Is
            Yours To Discover…
          </p>
        </section>
        <section className=" col50 features" >
          {WHyUSData
            ? WHyUSData.map((data, index) => {
                return (
                  <div key={index} className=" effect col25 WHyUSData">
                    <div className="why_us_data">
                      <img src={data?.url} alt="icons" className="mr-2" />

                      <h5 className="ml-2 text_gradient">{data?.header}</h5>
                    </div>

                    <p>{data?.body}</p>
                  </div>
                );
              })
            : null}
        </section>
      </div>
    </div>
  );
}
