import React from "react";
import { Button } from "antd";
import { useIntl } from "umi";
import styles from "./index.less";
import { PinterestInterface } from './interface/pinterest.interface';
import { data_pinterest } from './fixture/pinterest.fixture';
import IconPinterest from './logo/index';

const ShareOnPinterest: React.FC<PinterestInterface> = (props) => {

    const {
        text = data_pinterest.text,
        pageBusiness = data_pinterest.pageBusiness,
        image = data_pinterest.image } = props;

    const intl = useIntl();
    const iconPinterest = <IconPinterest />;

    const urlPinterest = 'https://www.pinterest.com/pin/create/button/?url=' + pageBusiness + '&media=' + image + '&description=' + text;

    return (
        <>
            <Button
                icon={iconPinterest}
                className={styles.pint}
                href={urlPinterest}
                target="_blank" >
                {intl.formatMessage({ id: "Social_Networks.title_button" })}
            </Button>

        </>
    );
}

export default ShareOnPinterest;