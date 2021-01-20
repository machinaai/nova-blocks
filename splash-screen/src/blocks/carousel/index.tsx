import React, { createRef, useState } from "react";
import { Button, Carousel, Image } from "antd";
import { Link } from "umi";
import { useIntl } from "umi";
import { ArrowRightOutlined } from "@ant-design/icons";
import { PropsCarousel } from "./interfaces/carousel.interface";
import { dataFixture } from "./fixture/data.fixture";
import styles from "./index.css";

const CarouselBlock: React.FC<PropsCarousel> = (props = dataFixture) => {
  const { options, redirect } = props;
  const intl = useIntl();
  const carousel: any = createRef();

  const [buttonState, setButtonState] = useState({
    isRegistryButton: false,
    slideNumber: 0,
  });
  const onChange = (a: number) => {
    a === options.length - 1
      ? setButtonState({
          isRegistryButton: true,
          slideNumber: 0,
        })
      : setButtonState({
          isRegistryButton: false,
          slideNumber: buttonState.slideNumber + 1,
        });
  };

  const handleNext = () => carousel.current.next();
  const isRegistryBtn = buttonState.isRegistryButton;
  const slideNumberBtn = buttonState.slideNumber + 1;

  const btnReg = isRegistryBtn ? (
    <Button type="primary" shape="round">
      <Link to={redirect}>{intl.formatMessage({ id: "carousel.signUp" })}</Link>
    </Button>
  ) : (
    <Button onClick={handleNext} type="text">
      {intl.formatMessage({ id: "carousel.next" })}
      <Button size="large" shape="circle" icon={<ArrowRightOutlined />} />
    </Button>
  );
  return (
    <>
      <Carousel
        ref={carousel}
        afterChange={() => {
          onChange(slideNumberBtn);
        }}
      >
        {options.map((option) => (
          <div key={option.img}>
            <img
              src={option.img}
              alt="carouselOption"
              className={`${styles.frameRobot}`}
            />
            {option.valH1}
            {option.valH3}
          </div>
        ))}
      </Carousel>
      <div>{btnReg}</div>
    </>
  );
};

export default CarouselBlock;
