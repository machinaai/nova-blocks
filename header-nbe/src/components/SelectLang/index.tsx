import { GlobalOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { getLocale, setLocale } from 'umi';
import { ClickParam } from 'antd/es/menu';
import React from 'react';
import classNames from 'classnames';
import HeaderDropdown from '../HeaderDropdown';
import styles from './index.less';

interface SelectLangProps {
  className?: string;
}

const SelectLang: React.FC<SelectLangProps> = (props) => {
  const { className } = props;
  const selectedLang = getLocale();

  const changeLang = ({ key }: ClickParam): void => setLocale(key);

  const locales = ['es-ES', 'en-US'];
  const languageLabels = {
    'es-ES': 'Español',
    'en-US': 'English',
  };

  const langMenu = (
    <Menu className={styles.menu} selectedKeys={[selectedLang]} onClick={changeLang}>
      {locales.map((locale) => (
        <Menu.Item key={locale}>{languageLabels[locale]}</Menu.Item>
      ))}
    </Menu>
  );
  return (
    <HeaderDropdown overlay={langMenu} placement="bottomRight">
      <span className={classNames(styles.dropDown, className)}>
        <GlobalOutlined title="Language" />
      </span>
    </HeaderDropdown>
  );
};

export default SelectLang;
