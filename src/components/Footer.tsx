'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Disc as Discord, Send, Share2, ArrowUpRight } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <Link href="/" className={styles.logo}>
              <Image
                src="/images/logo/bts-logo-orange.png"
                alt="BTS Studios Main Logo"
                width={36}
                height={36}
                style={{ borderRadius: '50%', flexShrink: 0 }}
              />
              <span className={styles.logoBrandName}>BTS STUDIOS</span>
            </Link>
            <p className={styles.tagline}>
              Rewriting the rules of Hollywood & Film with Web3, Bitcoin & Decentralized Streaming.
            </p>
            <div className={styles.socials}>
              {/* Official X / Twitter Link: https://x.com/btsstudiosntwrk */}
              <a
                href="https://x.com/btsstudiosntwrk"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialBtn}
                aria-label="X / Twitter (@btsstudiosntwrk)"
              >
                <svg viewBox="0 0 24 24" style={{ width: 16, height: 16, fill: 'currentColor' }}>
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117l11.966 15.644Z"></path>
                </svg>
              </a>

              {/* Instagram: https://instagram.com/btsstudiosla */}
              <a
                href="https://www.instagram.com/btsstudiosla/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialBtn}
                aria-label="Instagram (@btsstudiosla)"
              >
                <Share2 size={16} />
              </a>

              {/* Discord */}
              <a
                href="https://discord.gg/Dzp9UJY6f9"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialBtn}
                aria-label="Discord"
              >
                <Discord size={16} />
              </a>

              {/* Telegram */}
              <a
                href="https://t.me"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialBtn}
                aria-label="Telegram"
              >
                <Send size={16} />
              </a>
            </div>
          </div>

          <div className={styles.linksGrid}>
            <div className={styles.col}>
              <h4>Ecosystem</h4>
              <a href="https://gulp.wtf/" target="_blank" rel="noopener noreferrer">
                GULP Stream (gulp.wtf) <ArrowUpRight size={14} />
              </a>
              <a href="https://app.bts.network/" target="_blank" rel="noopener noreferrer">
                BTS App <ArrowUpRight size={14} />
              </a>
              <Link href="/tokens">$XBTS Tokens</Link>
              <Link href="/explore">Explore Hub</Link>
              <Link href="/metaverse">Metaverse</Link>
              <Link href="/fan-controlled">Fan Controlled</Link>
            </div>

            <div className={styles.col}>
              <h4>Community & Socials</h4>
              <a href="https://x.com/btsstudiosntwrk" target="_blank" rel="noopener noreferrer">
                X / Twitter (@btsstudiosntwrk) <ArrowUpRight size={14} />
              </a>
              <Link href="/blog">Official Journal</Link>
              <a href="https://bitcointalk.org" target="_blank" rel="noopener noreferrer">
                BitcoinTalk <ArrowUpRight size={14} />
              </a>
              <Link href="/blog/dreaming-of-op-cat">OP_CAT Post</Link>
            </div>

            <div className={styles.col}>
              <h4>Newsletter</h4>
              <p className={styles.newsDesc}>Subscribe for stealth drops & community updates.</p>
              <form className={styles.form} onSubmit={(e) => { e.preventDefault(); alert('Subscribed to BTS Newsletter!'); }}>
                <input type="email" placeholder="Enter your email" required className={styles.input} />
                <button type="submit" className="btn-canvas-neon" style={{ padding: '8px 16px', fontSize: '0.85rem' }}>
                  Join
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© {new Date().getFullYear()} BTS STUDIOS. All rights reserved.</p>
          <div className={styles.legal}>
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
