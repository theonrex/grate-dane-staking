import React from "react";

export const WHyUSData = [
  {
    url: "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/null/external-fee-automotive-dealership-flaticons-lineal-color-flat-icons-2.png",
    header: "Low Fee",
    body: "We offer low transaction fee",
  },
  {
    url: "",
    header: "This is very secure",
    body: "This is very secure",
  },
  {
    url: "",
    header: "Low Fee",
    body: "We offer low transaction fee",
  },
  {
    url: "",
    header: "Low Fee",
    body: "We offer low transaction fee",
  },
];

export default function WhyUs() {
  console.log(WHyUSData);
  return (
    <div className="container why_us ">
      <div className="rowx">
        <section className="effect col50">
          <div></div>
          <h1 className="text_gradient">Why Grate Dane Ai</h1>

          <p className="Why_Grate ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae
            eveniet laboriosam odit delectus dolor id est, consequatur in
            voluptatum, dolorum non quaerat quam perferendis? Cupiditate eos
            quod reiciendis qui illo? Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Quae eveniet laboriosam odit delectus dolor id
            est, consequatur in voluptatum, dolorum non quaerat quam
            perferendis? Cupiditate eos quod reiciendis qui illo?
          </p>
        </section>
        <section className=" col50 features">
          {WHyUSData
            ? WHyUSData.map((data, index) => {
                return (
                  <div className=" effect col25 WHyUSData">
                    <div className="why_us_data">
                      <img
                        src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/null/external-fee-automotive-dealership-flaticons-lineal-color-flat-icons-2.png"
                        alt="icons"
                        className="mr-2"
                      />

                      <h5 className="ml-2 text_gradient">Low Fee</h5>
                    </div>

                    <p>We offer low transaction fee</p>
                  </div>
                );
              })
            : null}
        </section>
      </div>
    </div>
  );
}
