import React from 'react';
import Link from 'next/link';
import { Compass, Sparkles, Tv, Box, Clapperboard, Layers, ArrowRight, ShieldCheck, Flame, Coins, ExternalLink } from 'lucide-react';
import styles from './explore.module.css';

export const metadata = {
  title: 'Explore Hub | BTS Studios',
  description: 'Navigate the BTS Studios decentralized ecosystem, GULP streaming, $XBTS tokens, metaverse, and community governance.',
};

export default function ExplorePage() {
  const features = [
    {
      title: 'GULP Web3 Streaming',
      desc: 'The decentralized video-on-demand platform powering indie creators & Web3 cinema at gulp.wtf.',
      href: 'https://gulp.wtf/',
      isExternal: true,
      badge: 'Streaming App',
      icon: Tv,
      color: '#1FDB00',
    },
    {
      title: 'BTS Network App',
      desc: 'The primary Web3 portal and application hub for BTS Studios.',
      href: 'https://app.bts.network/',
      isExternal: true,
      badge: 'Studio App',
      icon: ExternalLink,
      color: '#00D1FF',
    },
    {
      title: '$XBTS Tokens',
      desc: 'Multi-chain token ecosystem spanning Bitcoin (BRC-20), Ethereum (ERC-20), and XRPL.',
      href: '/tokens',
      isExternal: false,
      badge: 'Tokenomics',
      icon: Coins,
      color: '#F7D723',
    },
    {
      title: 'Fan Controlled Cinema',
      desc: 'Executive producer voting, script approvals, casting selection, and decentralised film financing.',
      href: '/fan-controlled',
      isExternal: false,
      badge: 'Governance',
      icon: Clapperboard,
      color: '#00D1FF',
    },
    {
      title: 'BTS Metaverse',
      desc: 'Virtual cinemas, 3D premiere red carpets, and XRPL/Hedera lands.',
      href: '/metaverse',
      isExternal: false,
      badge: 'XR & VR',
      icon: Box,
      color: '#1FDB00',
    },
    {
      title: 'Official Journal & OP_CAT',
      desc: 'Articles on Satoshi Nakamoto’s OP_CAT proposal, stealth updates, and release notes.',
      href: '/blog',
      isExternal: false,
      badge: 'Articles',
      icon: Flame,
      color: '#FF4D4D',
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.badge}>
          <Compass size={16} />
          <span>BTS NAVIGATION & HUB</span>
        </div>
        <h1 className={styles.title}>EXPLORE THE ECOSYSTEM</h1>
        <p className={styles.subtitle}>
          The world&apos;s first blockchain & decentralized film production studio from the heart of Los Angeles.
        </p>
      </div>

      <div className={styles.grid}>
        {features.map((feat) => {
          const Icon = feat.icon;
          return (
            <div key={feat.title} className="canvas-card" style={{ padding: '32px', display: 'flex', flexDirection: 'column' }}>
              <div className={styles.cardHeader}>
                <div className={styles.iconBox} style={{ borderColor: feat.color, color: feat.color }}>
                  <Icon size={26} />
                </div>
                <span className="mono-label" style={{ color: feat.color }}>
                  {feat.badge}
                </span>
              </div>
              <h2 className={styles.cardTitle}>{feat.title}</h2>
              <p className={styles.cardDesc}>{feat.desc}</p>
              
              {feat.isExternal ? (
                <a href={feat.href} target="_blank" rel="noopener noreferrer" className={styles.actionBtn} style={{ color: feat.color }}>
                  Launch Platform <ExternalLink size={14} />
                </a>
              ) : (
                <Link href={feat.href} className={styles.actionBtn} style={{ color: feat.color }}>
                  Explore Feature <ArrowRight size={14} />
                </Link>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
