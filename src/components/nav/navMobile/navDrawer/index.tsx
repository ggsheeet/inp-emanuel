// Open logic can be found in navIcon component file

import React from 'react';
import { NavLink } from '../../navLink';
import styles from './NavDrawer.module.css';

export const NavDrawer = React.forwardRef<HTMLDivElement, {}>((_, ref) => {
  return (
    <div className={styles.drawer_container} ref={ref}>
      <NavLink href='/mision'>Misión</NavLink>
      <hr className={styles.solid} />
      <NavLink href='/visitanos'>Visítanos</NavLink>
      <hr className={styles.solid} />
      <NavLink href='/eventos'>Eventos</NavLink>
      <hr className={styles.solid} />
      <NavLink href='/blog'>Blog</NavLink>
      <hr className={styles.solid} />
      <NavLink href='/contacto'>Contáctanos</NavLink>
      <hr className={styles.solid} />
      <NavLink href='/contribucion'>Contribuir</NavLink>
      <hr className={styles.solid} />
    </div>
  );
});
