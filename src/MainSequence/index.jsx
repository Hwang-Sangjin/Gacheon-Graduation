import React, { forwardRef } from "react";
import MainImageArray from "./MainImageArray";
import Preloader from "../components/Preloader";

const MainImageSequence = forwardRef(({ progress }, ref) => {
  const newImages = MainImageArray();

  let index = Math.round(progress * 1 * (newImages.length - 1));

  if (newImages[index][1] !== undefined) {
    if (newImages[index][1] === "loading") {
      return <Preloader/>;
    } else {
      return newImages.map((item, i) => (
        <span
          ref={ref}
          key={i}
          style={{
            display: i !== index ? "none" : "block",
            height: "100%",
            width: "100%",
            backgroundImage: `url('${item[0] ? item[0].src : null}')`,
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        />
      ));
    }
  }
});

export default MainImageSequence;
