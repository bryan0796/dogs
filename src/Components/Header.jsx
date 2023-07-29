import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import DogSvg from './DogSvg';
import { UserContext } from '../UserContext';

const Header = () => {
  const { data } = React.useContext(UserContext);
  const [olho, setOlho] = React.useState(4);

  function handleDown() {
    if (olho == 4) {
      setOlho(0);
    }
  }

  function handleUp() {
    let interval;
    interval = setInterval(() => {
      setOlho((olho) => Math.min(olho + 1, 4));
    }, 160);

    if (olho == 4) clearInterval(interval);
  }

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link
          style={{ padding: '12px' }}
          onMouseDown={handleDown}
          onTouchStart={handleDown}
          onTouchEnd={handleUp}
          onMouseUp={handleUp}
          className={styles.logo}
          to="/dogs"
          aria-label="Dogs - Home"
        >
          <DogSvg olho={olho} />
        </Link>
        {data ? (
          <Link className={styles.login} to="/conta">
            {data.nome}
          </Link>
        ) : (
          <Link className={styles.login} to="dogs/login">
            Login / Criar
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
