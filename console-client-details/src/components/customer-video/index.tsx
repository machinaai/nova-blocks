import CarouselBlock from '../../blocks/carouselBlock/index';
import { Col, Row } from 'antd';
import { useIntl } from 'umi';
import React, { useEffect, useState } from 'react'
import { PropsCarousel } from '../../interfaces/carouselInterface.interface';
import { setAudioVideo } from '../../helpers/getCleanData';
import styles from './index.less'

interface Props {
    videoDocs: any,
    nameCustomer: string,
    fontFam:string | any
}

const CustomerVideoComponent: React.FC<Props> = ({ videoDocs, nameCustomer,fontFam}) => {
    const intl = useIntl();
    const [valVideo, setValVideo] = useState('');

    useEffect(()=>{
        if(videoDocs.length !==0){
            const dataVideo = setAudioVideo(videoDocs);
            setValVideo (dataVideo[0].url);
        }    
    },[videoDocs]);
    
    /**
     * Function to get the url of each image inside of carousel.
     * @param val url of the image selected 
     */
    const getValCarousel = (val: any) => {
        setValVideo(val);
    }

    const videoProps: PropsCarousel = {
        data: setAudioVideo(videoDocs),
        action: getValCarousel
    }

    return (
        <>
            <Row style={{marginBottom:16}}>
                <Col span={24}>
                    <Row>
                        <Col xs={24} md={14} xl={14}>
                            <p className={styles.clientInfo} style={{fontFamily:`${fontFam}`}}>{`${intl.formatMessage({ id: 'clientDetails.Video-product' })}:`} <span>{`${intl.formatMessage({ id: 'clientDetails.Video-name-product' })}`}</span></p>
                            <p className={styles.clientInfo} style={{fontFamily:`${fontFam}`}}>{`${intl.formatMessage({ id: 'clientDetails.Video-client' })}:`} <strong>{nameCustomer}</strong></p>
                        </Col>
                        <Col xs={24} md={10} xl={10}>
                            <CarouselBlock  {...videoProps} />
                        </Col>
                    </Row>
                </Col>
                <Col xs={24} xl={24}>
                    {videoDocs.length !== 0 && <video src={`${valVideo}`} className={styles.video} style={{ width: '100%', height: '100%' }} controls></video>}
                </Col>
            </Row>
        </>
    )
}
export default CustomerVideoComponent;
