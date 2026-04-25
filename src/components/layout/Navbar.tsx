'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '../ui/Button';
import styles from './Navbar.module.css';

export const Navbar = () => {
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === '/') return pathname === path;
    return pathname === path || pathname?.startsWith(`${path}/`);
  };
  return (
    <header className={styles.header}>
      <div className={`container ${styles.navContainer}`}>
        <Link href="/" className={styles.logo}>
          Green<span className={styles.logoAccent}>Tree</span>
        </Link>
        <nav className={styles.navLinks}>
          <Link href="/courses" className={`${styles.link} ${isActive('/courses') ? styles.active : ''}`}>คอร์สเรียน</Link>
          <Link href="/templates" className={`${styles.link} ${isActive('/templates') ? styles.active : ''}`}>เทมเพลต</Link>
          <Link href="/custom-templates" className={`${styles.link} ${isActive('/custom-templates') ? styles.active : ''}`}>เทมเพลตสั่งทำพิเศษ</Link>
          <Link href="/about" className={`${styles.link} ${isActive('/about') ? styles.active : ''}`}>เกี่ยวกับเรา</Link>
        </nav>
        <div className={styles.actions}>
          <Button variant="primary" size="sm">ดูแคตตาล็อกระบบ</Button>
        </div>
      </div>
    </header>
  );
};
