import React from "react";
import TextTransition, { presets } from "react-text-transition";
import img1 from "../../assets/images/assets/sticker_01.png";

const TEXTS = ["Photographer", "Shutterbug", "Cameraman"];

const Hero = () => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <div className="banner-intro">
      <img src={img1} alt="sticker" className="brand-logo" />
      <div className="heading">
        <h1 className="name font-recoleta">Bostami Reza</h1>
        <div className="text-lg-end">
          <div className="d-inline-block">
            <h2 className="font-recoleta cd-headline letters rotate-2">
              <span className="cd-words-wrapper">
                <TextTransition springConfig={presets.slow}>
                  {TEXTS[index % TEXTS.length]}
                </TextTransition>
                <p>15+ years of experience</p>
              </span>
            </h2>
          </div>
        </div>
      </div>
      {/* <!-- /.heading --> */}
    </div>
  );
};

export default Hero;
