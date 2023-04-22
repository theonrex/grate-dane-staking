import React from "react";

export default function WhyUs() {
  return (
    <div className="container HomeBanner">
      <p className="home_effect home_Banner_header ">
        Now we are offering{" "}
        <span className="down_icon">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAgUlEQVR4nO2UOwrAIBAFvUQk3v8mSZVfE4scZ4LESlCMut0OCBa+HV6xGqMoijIKYAFOwA6YZYELWGse73z4HnmUhhmBrSYwAXcMPIBrkKYz5tagE5f2yLulLfJh0j/y4dIauZi0JBeXZnbTJ/fuD6dI0lK2aab5EY9sU0VRFJPwAs/UbERVyi05AAAAAElFTkSuQmCC" />
        </span>
      </p>

      <h1 className="home_h1">
        Faster, Cheaper and more Powerful
        <span> Staking.</span>
      </h1>

      <p className="banner_details">
        Our new staking system offers faster transaction speeds, lower fees, and
        increased power and flexibility for stakers. Say goodbye to slow and
        expensive staking and hello to a new era of efficiency and profitability
        {/* Stake & Earn */}
      </p>

      <section className=" home_btn">
        <button className="Staking_btn">Start Staking</button>
        <button className="mining_btn">Start Minting</button>
      </section>
    </div>
  );
}
