import React, { ReactNode } from "react";
import { useIntl } from "umi";
import { TwitterOutlined } from "@ant-design/icons";
import { Button } from "antd";
import styles from "./index.less";
import { TwitterInterface } from './interfaces/twitter.interface';
import { data_twitter } from './fixture/twitter.fixture';

const ShareOnTwitter: React.FC<TwitterInterface> = (props) => {

    const intl = useIntl();

    let { type = data_twitter.type,
        messageHashtag = data_twitter.messageHaststag,
        messageMention = data_twitter.messageMention,
        pageBusiness = data_twitter.pageBusiness,
        messageUrl = data_twitter.messageUrl,
        followUrl = data_twitter.followUrl,
        business = data_twitter.business } = props;

    const iconTwitter = <TwitterOutlined />;

    let content: ReactNode = '';

    const urlHashtag = 'https://twitter.com/intent/tweet?text=' + messageHashtag + '&hashtags=' + business;
    const urlMention = 'https://twitter.com/intent/tweet?screen_name=' + messageMention + '&ref_src=twsrc%5Etfw&amp;text=Page&amp;';
    const shareLinkComplete = 'https://twitter.com/intent/tweet?text=' + messageUrl + '&url=' + pageBusiness;

    type = type.toLowerCase();

    if (type === 'follow') {
        content =
            <Button
                icon={iconTwitter}
                className={styles.tw}
                href={followUrl}
                target="_blank"
            >{intl.formatMessage({ id: "Social_Networks.title_button" })}
            </Button>

    } else if (type === 'hashtag') {
        content =
            <Button
                icon={iconTwitter}
                className={styles.tw}
                href={urlHashtag}
                target="_blank" >
                {intl.formatMessage({ id: "Social_Networks.title_button" })}
            </Button>

    } else if (type === 'mention') {
        content =
            <Button
                icon={iconTwitter}
                className={styles.tw}
                href={urlMention}
                target="_blank">
                {intl.formatMessage({ id: "Social_Networks.title_button" })}
            </Button>

    } else if (type === 'share') {
        content =
            <Button
                icon={iconTwitter}
                className={styles.tw}
                href={shareLinkComplete}
                target="_blank">
                {intl.formatMessage({ id: "Social_Networks.title_button" })}
            </Button>

    } else {
        <Button
            icon={iconTwitter}
            className={styles.tw}
            href={followUrl}
            target="_blank"
        >{intl.formatMessage({ id: "Social_Networks.title_button" })}
        </Button>
    }

    return (
        <>
            {content}
        </>
    );
}

export default ShareOnTwitter;