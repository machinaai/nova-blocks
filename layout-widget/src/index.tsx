import React from 'react';
import { Card } from 'antd';
import { Link } from 'umi';
import { WidgetLayoutPropsInterface } from './interfaces/widget-layout.interface';
import { getDropDown } from './dropdown';
import styles from './index.less';

/**
 * WidgetLayoutNbe
 * 
 * Container for widgets
 *
 * @param {*} {
 *   title,
 *   options,
 *   children,
 *   detail,
 * }
 * @return {ReactNode} 
 */
const WidgetLayoutNbe: React.FC<WidgetLayoutPropsInterface> = ({
  title,
  options,
  children,
  detail,
}) => {
  const prop = {
    bordered: true,
    title,
    extra: options && getDropDown(options),
  };

  return (
    <>
      <Card {...prop}>
        {children}
        {detail && (
          <div className={styles.detail} style={{textAlign: detail?.align}}>
            <Link to={detail?.action}>{detail?.legend}</Link>
          </div>
        )}
      </Card>
    </>
  );
};

export default WidgetLayoutNbe;
