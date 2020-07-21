import React from 'react';
import styles from './index.less';
import logoTwitter from './assets/icons/twitter.svg';
import logoFacebook from './assets/icons/facebook.svg';
import logoInstagram from './assets/icons/instagram.svg';
import logoLinkedin from './assets/icons/linkedin.svg';
import logoNova from './assets/logos/nova.svg';

const FooterNbe: React.FC = () => {
  const today = new Date();
  const currentYear: number = today.getFullYear();

  return (
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
  );
};

export default FooterNbe;
