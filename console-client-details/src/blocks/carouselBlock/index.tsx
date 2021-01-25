import React from 'react';
import { Carousel} from 'antd';
import styles from './index.less';
import { actionFixture, dataFixture } from './fixture/dataFixture';
import { PropsBlock } from './interfaces/carouselInterface.interface';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

const CarouselBlock: React.FC<PropsBlock> = ({ data = dataFixture, action=actionFixture }) => {
  /**
   * Function to change the url of the each item of video
   * @param item url of each item of video
   */
  const changeVideo = (item: any) => {
    action(item);
  }

  /**
   * Function to access the next video item
   * @param props 
   */
  const SampleNextArrow = (props: any) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          color: 'black',
          fontSize: '15px',
          lineHeight: '1.5715',
        }}
        onClick={onClick}
      >
        <RightOutlined />
      </div>
    );
  };

  /**
   * Function to access the previous element of the carousel.
   * @param props 
   */
  const SamplePrevArrow = (props: any) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          color: 'black',
          fontSize: '15px',
          lineHeight: '1.5715',
        }}
        onClick={onClick}
      >
        <LeftOutlined />
      </div>
    );
  };

  return (
    <> 
    <Carousel
      arrows
      dots={false}
      infinite={false}
      slidesToShow={2}
      nextArrow={<SampleNextArrow />}
      prevArrow={<SamplePrevArrow />}
      className={styles.carousel}
      style={{ height: 10,marginLeft: 20, marginRight: 20}} >
      {data.map((item: any) => (
        <div key={item.uid} onClick={() => changeVideo(item.url)} className={styles.videoCont}>
          <video src={item.url} width={120} height={56} />
        </div>
      ))}
    </Carousel>
    </>
  )
}
export default CarouselBlock;