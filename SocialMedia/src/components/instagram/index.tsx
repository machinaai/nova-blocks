import React from "react";
import { useIntl } from "umi";
import { Button } from "antd";
import { InstagramOutlined } from "@ant-design/icons";
import styles from "./index.less";

export interface ShareOnInstagramProps {

}

const ShareOnInstagram: React.FC<ShareOnInstagramProps> = () => {
    const intl = useIntl();
    const iconInstagram = <InstagramOutlined />;


    return (
        <>
            <Button
                icon={iconInstagram}
                className={styles.inst}
                href="#">
                {intl.formatMessage({ id: "Social_Networks.title_button" })}
            </Button>
        </>
    );
}

export default ShareOnInstagram;