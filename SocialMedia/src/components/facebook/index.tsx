import React from "react";
import { useIntl } from "umi";
import { Button } from "antd";
import { FacebookFilled } from "@ant-design/icons";
import styles from "./index.less";
import { FbInterface } from './interfaces/fb.interface';
import { url } from './fixture/data.fixture'


const ShareOnFacebook: React.FC<FbInterface> = (props) => {

    const intl = useIntl();

    const { pageShare = url.share } = props;

    const iconFacebook = <FacebookFilled />;
    const urlComplete = "https://www.facebook.com/sharer/sharer.php?u=" + pageShare + "%2F&amp;src=sdkpreparse";

    return (
        <>
            <Button
                icon={iconFacebook}
                className={styles.fb}
                target="_blank"
                href={urlComplete} >
                {intl.formatMessage({ id: "Social_Networks.title_button" })}
            </Button>
        </>
    );
}

export default ShareOnFacebook;