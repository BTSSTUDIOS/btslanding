'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, Sparkles, Film, BookOpen, Layers, ExternalLink, Play, Wallet } from 'lucide-react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [walletConnected, setWalletConnected] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleConnectWallet = () => {
    setWalletConnected(!walletConnected);
  };

  // Streamlined, super clean navigation links
  const navLinks = [
    { name: 'Home', href: '/', icon: Film },
    { name: 'Chain', href: '/tokens', icon: Layers },
    { name: 'Fan Controlled', href: '/fan-controlled', icon: Sparkles },
    { name: 'Blog', href: '/blog', icon: BookOpen },
  ];

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        {/* Main Logo Branding */}
        <Link href="/" className={styles.logo}>
          <Image
            src="/images/logo/bts-logo-orange.png"
            alt="BTS Studios Logo"
            width={32}
            height={32}
            priority
            style={{ borderRadius: '50%', flexShrink: 0 }}
          />
          <span className={styles.logoBrandName}>BTS STUDIOS</span>
        </Link>

        {/* Desktop Nav Pills (Streamlined 4 Links) */}
        <nav className={styles.desktopNav}>
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`${styles.navItem} ${isActive ? styles.active : ''}`}
              >
                <Icon size={14} className={styles.navIcon} />
                <span>{link.name}</span>
              </Link>
            );
          })}
        </nav>

        <div className={styles.actions}>
          {/* Header Action CTAs */}
          <div className={styles.headerCtas}>
            <a
              href="https://gulp.wtf/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-canvas-neon"
              style={{ fontSize: '0.82rem', padding: '7px 16px' }}
            >
              <Play size={13} fill="#fff" />
              <span>GULP Streaming</span>
              <ExternalLink size={11} />
            </a>

            <a
              href="https://app.bts.network/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-canvas-primary"
              style={{ fontSize: '0.82rem', padding: '7px 14px' }}
            >
              <span>BTS App</span>
              <ExternalLink size={11} />
            </a>
          </div>

          {/* Connect Wallet Button */}
          <button
            onClick={handleConnectWallet}
            className="btn-canvas-secondary"
            style={{
              fontSize: '0.82rem',
              padding: '7px 14px',
              borderColor: walletConnected ? 'rgba(31, 219, 0, 0.4)' : 'rgba(255, 255, 255, 0.15)',
              color: walletConnected ? '#1FDB00' : '#fff'
            }}
          >
            <Wallet size={14} color={walletConnected ? '#1FDB00' : '#a855f7'} />
            <span>{walletConnected ? '0x71C...4f9' : 'Connect Wallet'}</span>
          </button>

          <button 
            className={styles.mobileMenuBtn}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* 100% Pure Frosted Glass Mobile Drawer */}
      {mobileMenuOpen && (
        <div className={styles.mobileDrawer}>
          <div className={styles.mobileDrawerHeader}>
            <span className="mono-label" style={{ color: '#a855f7' }}>NAVIGATION MENU</span>
          </div>

          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`${styles.mobileNavItem} ${isActive ? styles.activeMobileItem : ''}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                <Icon size={16} />
                <span>{link.name}</span>
              </Link>
            );
          })}

          <div style={{ marginTop: '12px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <button
              onClick={handleConnectWallet}
              className="btn-canvas-secondary"
              style={{
                width: '100%',
                padding: '12px',
                justifyContent: 'center',
                color: walletConnected ? '#1FDB00' : '#fff'
              }}
            >
              <Wallet size={16} color={walletConnected ? '#1FDB00' : '#a855f7'} />
              <span>{walletConnected ? 'Connected: 0x71C...4f9' : 'Connect Wallet'}</span>
            </button>

            <a
              href="https://gulp.wtf/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-canvas-neon"
              style={{ justifyContent: 'center', width: '100%', padding: '12px' }}
            >
              <Play size={16} fill="#fff" />
              <span>Launch GULP Stream (gulp.wtf)</span>
            </a>

            <a
              href="https://app.bts.network/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-canvas-primary"
              style={{ justifyContent: 'center', width: '100%', padding: '12px' }}
            >
              <span>BTS App (app.bts.network)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
