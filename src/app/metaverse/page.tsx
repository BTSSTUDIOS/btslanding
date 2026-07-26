import React from 'react';
import Link from 'next/link';
import { Box, Sparkles, Tv, Layers, Globe, Shield, ArrowRight, Eye } from 'lucide-react';
import NewsletterForm from '@/components/NewsletterForm';
import styles from './metaverse.module.css';

export const metadata = {
  title: 'METAVERSE @ BTS STUDIOS',
  description: 'Step into the BTS Studios Metaverse — virtual cinema screenings, premiere red carpets & digital lands.',
};

export default function MetaversePage() {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <div className={styles.badge}>
          <Box size={16} />
          <span>VIRTUAL CINEMA EXPERIENCE</span>
        </div>
        <h1 className={styles.title}>METAVERSE @ BTS STUDIOS</h1>
        <p className={styles.subtitle}>
          The next frontier of cinema. Immersive 3D virtual theater experiences, red carpet movie premieres, and XRPL/Hedera virtual land integration.
        </p>

        <div className={styles.heroCtas}>
          <a href="https://gulp.bts.network" target="_blank" rel="noopener noreferrer" className="btn-primary">
            <Eye size={18} />
            <span>Enter Virtual Realm</span>
          </a>
          <Link href="/explore" className="btn-secondary">
            Back to Hub
          </Link>
        </div>
      </div>

      <div className={styles.grid}>
        <div className="glass-panel" style={{ padding: '36px' }}>
          <div className={styles.iconBox}>
            <Tv size={32} color="#1FDB00" />
          </div>
          <h3>3D Premiere Theaters</h3>
          <p>Gather with global film lovers in custom-rendered 3D IMAX theaters to watch exclusive film debuts in real-time.</p>
        </div>

        <div className="glass-panel" style={{ padding: '36px' }}>
          <div className={styles.iconBox}>
            <Globe size={32} color="#00D1FF" />
          </div>
          <h3>Virtual Land & Parcels</h3>
          <p>Own studio lots and movie theater land backed by Hedera Hashgraph & XRPL NFTs.</p>
        </div>

        <div className="glass-panel" style={{ padding: '36px' }}>
          <div className={styles.iconBox}>
            <Sparkles size={32} color="#F7D723" />
          </div>
          <h3>Avatar VIP Passes</h3>
          <p>Access exclusive backstages, talk with directors & actors live after red carpet screenings.</p>
        </div>
      </div>

      {/* Newsletter */}
      <div className={styles.ctaBox}>
        <h2>BE THE FIRST IN THE METAVERSE</h2>
        <p>Subscribe for early VR access codes & metaverse land whitelist announcements.</p>
        <NewsletterForm buttonText="Get Access" placeholder="ENTER YOUR EMAIL ADDRESS" />
      </div>
    </div>
  );
}
