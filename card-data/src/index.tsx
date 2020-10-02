import React, { CSSProperties, useState, useEffect } from "react";
import { Statistic, Card, Row, Col, Tooltip } from "antd";
import styles from "./index.less";
import { IRequestClose } from "../interfaces/closeData";
import deal from "./assets/icons/ico-cierre.svg";
import help from "./assets/icons/ico-info.svg";

export interface DataCardProps {
  title?: string;
  subtitle?: string;
  suffix?: string | React.ReactNode;
  valueStyle?: CSSProperties;
  subtitle2?: string;
  suffix2?: string | React.ReactNode;
  valueStyle2?: CSSProperties;
  icon?: string;
}

const DataCard: React.SFC<DataCardProps> = (props) => {
  const {
    title,
    subtitle,
    suffix,
    valueStyle,
    subtitle2,
    suffix2,
    valueStyle2,
    icon,
  } = props;

  const [values, setValues] = useState({
    oneSession: 0,
    moreSessions: 0,
  });

  let mockData = {
    title: "Porcentaje de cierre",
    subtitle: "1 sesión",
    suffix: "%",
    valueStyle: { fontWeight: 600, fontSize: "35px" },
    subtitle2: "+ 1 sesión",
    suffix2: "%",
    valueStyle2: { fontSize: "35px" },
    icon: { deal },
  };

  return (
    <>
      <Card className={styles.cardContainer}>
        <Row gutter={8}>
          <p className={styles.titleCard}>{title ? title : mockData.title}</p>
          <Tooltip title={"Ayuda"}>
            <img src={help} className={styles.infoIcon} />
          </Tooltip>
        </Row>
        <Row gutter={8} align={"middle"} justify={"space-between"}>
          <Col xl={8}>
            <Statistic
              value={values.oneSession}
              suffix={suffix ? suffix : mockData.suffix}
              valueStyle={valueStyle ? valueStyle : mockData.valueStyle}
            ></Statistic>
            <span className={styles.subtitleCard}>
              {subtitle ? subtitle : mockData.subtitle}
            </span>
          </Col>
          <Col xl={8}>
            <Statistic
              value={values.moreSessions}
              suffix={suffix2 ? suffix2 : mockData.suffix2}
              valueStyle={valueStyle2 ? valueStyle2 : mockData.valueStyle2}
            ></Statistic>
            <span className={styles.subtitleCard}>
              {subtitle2 ? subtitle2 : mockData.subtitle2}
            </span>
          </Col>
          <img src={icon ? icon : deal} className={styles.imgCard} />
        </Row>
      </Card>
    </>
  );
};

export default DataCard;
