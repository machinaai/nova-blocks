import React from "react";
import { Typography } from 'antd';
import { useIntl } from "umi";
import styles from "./index.less";
import ShareOnFacebook from './components/facebook';
import ShareOnPinterest from './components/pinterest';
import ShareOnTwitter from './components/twitter';
import ShareOnInstagram from './components/instagram';

export interface ShareOnSocialNetworksProps {

}

const ShareOnSocialNetworks: React.FC<ShareOnSocialNetworksProps> = () => {

  const intl = useIntl();
  const { Title } = Typography;

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <Title level={2}>{intl.formatMessage({ id: "Social_Networks.title" })}</Title>
      </div>
      <div className={styles.box}>
        <ShareOnFacebook pageShare="https://developers.facebook.com/docs/plugins" />
        <ShareOnPinterest image="https://raw.githubusercontent.com/machinaai/nova-pro-blocks/master/assets/nova-bank/ico-paperless.png" />
        <ShareOnTwitter type="hashtag" messageHashtag="He tenido el mejor viaje gracias" business="Nova" />
      </div>
    </div>
  );
}

export default ShareOnSocialNetworks;