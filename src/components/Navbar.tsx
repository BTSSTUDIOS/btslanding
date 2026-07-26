'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ExternalLink, ShieldCheck, Wallet, ChevronRight, Sparkles } from 'lucide-react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showWalletModal, setShowWalletModal] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleWalletClick = () => {
    setShowWalletModal(true);
  };

  const closeWalletModal = () => {
    setShowWalletModal(false);
  };

  return (
    <>
      <nav className={styles.header}>
        <div className={styles.container}>
          {/* LOGO & TITLE: Orange Logo + "BTS STUDIOS" */}
          <Link href="/" className={styles.logo}>
            <Image
              src="/images/logo/bts-logo-orange.png"
              alt="BTS Studios Logo"
              width={38}
              height={38}
              priority
            />
            <span className={styles.logoBrandName}>BTS STUDIOS</span>
          </Link>

          {/* DESKTOP NAVIGATION LINKS */}
          <div className={styles.desktopNav}>
            <Link href="/" className={styles.navItem}>
              Home
            </Link>

            <Link href="/mission" className={styles.navItem}>
              Mission
            </Link>

            <Link href="/tokens" className={styles.navItem}>
              Chain
            </Link>

            <Link href="/fan-controlled" className={styles.navItem}>
              Fan Controlled
            </Link>

            <Link href="/blog" className={styles.navItem}>
              Blog
            </Link>
          </div>

          {/* RIGHT ACTIONS: Connect Wallet & Primary CTAs */}
          <div className={styles.actions}>
            <div className={styles.headerCtas}>
              <button
                onClick={handleWalletClick}
                className="btn-canvas-secondary"
                style={{ padding: '8px 16px', fontSize: '0.84rem', gap: '6px', cursor: 'pointer' }}
              >
                <Wallet size={15} />
                <span>Connect Wallet</span>
              </button>

              <a
                href="https://gulp.wtf/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-canvas-neon"
                style={{ padding: '8px 16px', fontSize: '0.84rem' }}
              >
                <span>GULP Stream</span>
                <ExternalLink size={13} />
              </a>
            </div>

            {/* MOBILE MENU TOGGLE */}
            <button
              onClick={toggleMenu}
              className={styles.mobileMenuBtn}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* MOBILE DRAWER MENU */}
        {isOpen && (
          <div className={styles.mobileDrawer}>
            <Link href="/" onClick={toggleMenu} className={styles.mobileNavItem}>
              <span>Home</span>
            </Link>
            <Link href="/mission" onClick={toggleMenu} className={styles.mobileNavItem}>
              <span>Mission & Founders</span>
            </Link>
            <Link href="/tokens" onClick={toggleMenu} className={styles.mobileNavItem}>
              <span>Chain & Tokens</span>
            </Link>
            <Link href="/fan-controlled" onClick={toggleMenu} className={styles.mobileNavItem}>
              <span>Fan Controlled Cinema</span>
            </Link>
            <Link href="/blog" onClick={toggleMenu} className={styles.mobileNavItem}>
              <span>Blog & Journal</span>
            </Link>

            <div style={{ marginTop: '12px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <button
                onClick={() => {
                  toggleMenu();
                  handleWalletClick();
                }}
                className="btn-canvas-secondary"
                style={{ width: '100%', justifyContent: 'center', padding: '10px' }}
              >
                <Wallet size={16} />
                <span>Connect Wallet</span>
              </button>

              <a
                href="https://gulp.wtf/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-canvas-neon"
                style={{ width: '100%', justifyContent: 'center', padding: '10px' }}
              >
                <span>Launch GULP Stream</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* CONNECT WALLET COMING SOON MODAL */}
      {showWalletModal && (
        <div className={styles.modalOverlay} onClick={closeWalletModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.modalCloseBtn} onClick={closeWalletModal} aria-label="Close modal">
              <X size={20} />
            </button>

            <div className={styles.modalHeader}>
              <div className={styles.modalBadge}>
                <Sparkles size={14} color="#F7D723" />
                <span>BTS CHAIN ($BTS)</span>
              </div>
              <h3 className={styles.modalTitle}>Web3 Wallet Connecting Soon!</h3>
            </div>

            <p className={styles.modalBody}>
              Web3 wallet integration for <strong>BTS Chain Layer 1</strong> & multi-chain tokens on Bitcoin (BRC-20), Ethereum, and XRPL is currently under active development.
              <br /><br />
              Stay tuned for stealth whitelist access and script greenlight voting drops!
            </p>

            <div className={styles.modalFooter}>
              <button onClick={closeWalletModal} className="btn-canvas-neon" style={{ width: '100%', justifyContent: 'center' }}>
                <span>Got It!</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
