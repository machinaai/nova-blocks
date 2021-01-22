import React from "react";
import { useIntl } from "umi";
import CarouselBlock from "./blocks/carousel";
import { PropsCarousel } from "./blocks/carousel/interfaces/carousel.interface";
import { useWindowSize } from "./hooks/useWindowSize";
import styles from "./index.less";
import { Fonts } from "./interfaces/splash-screen";
import { dataImages, dataFonts, carousel } from "./fixture/data.fixture";

interface SplashProps {
  imagesCarousel?: string[];
  logo1?: string;
  logo2?: string;
  iconCircle?: string;
  font_family?: Fonts;
  onComplete?: Function;
}
/**
 * Pro block RegisterOtp
 *
 * @param {Props} { step,onComplete, flagFlowComplete}
 */
const Splash: React.FC<SplashProps> = (props) => {
  const {
    imagesCarousel = carousel,
    logo1 = dataImages.logo1,
    logo2 = dataImages.logo2,
    iconCircle = dataImages.backgroundImage,
    font_family = dataFonts,
    onComplete,
  } = props;
  const intl = useIntl();
  let logoIcon = logo2;
  const size = useWindowSize();

  const propsCarousel: PropsCarousel = {
    options: [
      {
        img: imagesCarousel[0],
        valH1: (
          <h1 className={styles.h1Title} style={{ fontFamily: font_family.fontTitle }}>
            {" "}
            {intl.formatMessage({ id: "splashScreen.val1-h1" })}
            <br />
            {intl.formatMessage({ id: "splashScreen.val1-h1-br" })}
          </h1>
        ),
        valH3: (
          <h3 className={styles.h3Subtitle} style={{ fontFamily: font_family.fontSubtitle }}>
            {" "}
            {intl.formatMessage({ id: "splashScreen.val1-h3" })}
            <br /> {intl.formatMessage({ id: "splashScreen.val1-h3-br" })}
          </h3>
        ),
      },
      {
        img: imagesCarousel[1],
        valH1: (
          <h1 className={styles.h1Title} style={{ fontFamily: font_family.fontTitle }}>
            {" "}
            {intl.formatMessage({ id: "splashScreen.val2-h1" })}
            <br />
            {intl.formatMessage({ id: "splashScreen.val2-h1-br" })}
          </h1>
        ),
        valH3: (
          <h3 className={styles.h3Subtitle} style={{ fontFamily: font_family.fontSubtitle }}>
            {" "}
            {intl.formatMessage({ id: "splashScreen.val2-h3" })}
            <br /> {intl.formatMessage({ id: "splashScreen.val2-h3-br" })}
          </h3>
        ),
      },
      {
        img: imagesCarousel[2],
        valH1: (
          <h1 className={styles.h1Title} style={{ fontFamily: font_family.fontTitle }}>
            {" "}
            {intl.formatMessage({ id: "splashScreen.val3-h1" })}
            <br />
            {intl.formatMessage({ id: "splashScreen.val3-h1-br" })}
          </h1>
        ),
        valH3: (
          <h3 className={styles.h3Subtitle} style={{ fontFamily: font_family.fontSubtitle }}>
            {" "}
            {intl.formatMessage({ id: "splashScreen.val3-h3" })}
            <br /> {intl.formatMessage({ id: "splashScreen.val3-h3-br" })}
          </h3>
        ),
      },
    ],
    redirect: onComplete
  };

  if (size.width <= 5000 && size.width >= 876) {
    logoIcon = logo1;
  } else if (size.width < 875 && size.width > 721) {
    logoIcon = logo2;
  } else {
    logoIcon = logo2;
  }

  return (
    <div
      className={`${styles.withBg}`}
      style={{ backgroundImage: `url(${iconCircle})` }}
    >
      <div className={`${styles.features}`}>
        <div
          className={`${styles.icoLogo}`}
          style={{ backgroundImage: `url(${logoIcon})` }}
        ></div>
        <div className={`${styles.container}`}>
          <CarouselBlock {...propsCarousel} />
        </div>
      </div>
    </div>
  );
};

export default Splash;
