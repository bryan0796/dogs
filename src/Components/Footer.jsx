import React from 'react';
import styles from './Footer.module.css';
import {ReactComponent as FooterSvg} from '../Assets/dogs-footer.svg';

const Footer = () => {
  return (
    <footer className={styles.footer} >
      <FooterSvg />
      <p>Dogs. Alguns direitos reservados.</p>
    </footer>
  )
}

export default Footer