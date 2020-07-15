import { MenuDataItem, getMenuData, getPageTitle } from '@ant-design/pro-layout';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useIntl, ConnectProps, connect } from 'umi';
import React from 'react';
import SelectLang from '@/components/SelectLang';
import { ConnectState } from '@/models/connect';
import styles from './UserLayout.less';
import logoNova from '../assets/logos/logo_nova.png';
import logo from '../assets/logos/bne-logo.png';
import logoTwitter from '../assets/icons/twitter.svg';
import logoFacebook from '../assets/icons/facebook.svg';
import logoInstagram from '../assets/icons/instagram.svg';
import logoLinkedin from '../assets/icons/linkedin.svg';

export interface UserLayoutProps extends Partial<ConnectProps> {
  breadcrumbNameMap: {
    [path: string]: MenuDataItem;
  };
}

const UserLayout: React.FC<UserLayoutProps> = (props) => {
  const {
    route = {
      routes: [],
    },
  } = props;
  const { routes = [] } = route;
  const {
    children,
    location = {
      pathname: '',
    },
  } = props;
  const { formatMessage } = useIntl();
  const { breadcrumb } = getMenuData(routes);
  const title = getPageTitle({
    pathname: location.pathname,
    formatMessage,
    breadcrumb,
    ...props,
  });
  const intl = useIntl();
  const today = new Date();
  const currentYear = today.getFullYear();

  return (
    <HelmetProvider>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={title} />
      </Helmet>

      <div className={styles.container}>
        <div className={styles.lang}>
          <div className={styles.logo_Reboot}>
            <img src="https://images7.bamboohr.com/152496/logos/cropped.jpg?v=39" alt="" />
          </div>
          <SelectLang />
        </div>
        <div className={styles.content}>
          <div className={styles.top}>
            <div className={styles.header}>
              <img alt="logo" className={styles.logo} src={logo} />
              <span className={styles.title}>
                {intl.formatMessage({
                  id: 'login.corporateBanking',
                  defaultMessage: 'Banca empresarial',
                })}
              </span>
            </div>
          </div>
          {children}
        </div>
        <div className={styles.footer}>
          <span className={styles.nova}>
            <a href="https://novasolutionsystems.com/" target="blank" className={styles.novalink}>
              <img src={logoNova} alt="Logo Nova By Reboot" className={styles.logoNova} />
              Nova &copy; Copyright {currentYear}
            </a>
          </span>
          <div className={styles.icons}>
            <a href="https://twitter.com/novasolutionsys/" target="blank" className={styles.icon}>
              <img src={logoTwitter} alt="Logo Twitter" />
            </a>
            <a
              href=" https://www.linkedin.com/company/novasolutionsystems/"
              target="blank"
              className={styles.icon}
            >
              <img src={logoLinkedin} alt="Logo Linkedin" />
            </a>
            <a
              href="https://www.facebook.com/novasolutionsystems/"
              target="blank"
              className={styles.icon}
            >
              <img src={logoFacebook} alt="Logo Facebook" />
            </a>
            <a
              href="https://www.instagram.com/novasolutionsystems/"
              target="blank"
              className={styles.icon}
            >
              <img src={logoInstagram} alt="Logo Instagram" />
            </a>
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
};

export default connect(({ settings }: ConnectState) => ({ ...settings }))(UserLayout);
