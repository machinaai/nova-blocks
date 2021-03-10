import React from "react";
import styles from "./index.less";

const icon = 'https://addons.opera.com/media/extensions/55/19155/1.1-rev1/icons/icon_64x64.png';

const IconPinterest: React.FC = () => {
    return (
        <span>
            <img className={styles.image} src={icon}></img>
        </span>
    );
}

export default IconPinterest;