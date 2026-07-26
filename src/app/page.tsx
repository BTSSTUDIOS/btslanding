import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Film, Play, Sparkles, ArrowRight, ShieldCheck, Cpu, Tv, Clapperboard, Globe2, Flame, ExternalLink, Terminal, CheckCircle2, Coins, Layers, Star, Bot } from 'lucide-react';
import { getAllPosts } from '@/lib/blog';
import NewsletterForm from '@/components/NewsletterForm';
import TwitterFeed from '@/components/TwitterFeed';
import styles from './page.module.css';

export default function HomePage() {
  // Take 4 posts to make the blog section perfectly flush with the Twitter feed height
  const posts = getAllPosts().slice(0, 4);

  return (
    <div className={styles.wrapper}>
      {/* HERO SECTION - Hollywood & Web3 Cinema Theme */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <div className={styles.statusBadge}>
            <Clapperboard size={14} color="#a855f7" />
            <span className="mono-label" style={{ color: '#fff', fontSize: '0.78rem' }}>GULP.WTF & APP.BTS.NETWORK • HOLLYWOOD REVOLUTION</span>
          </div>

          <h1 className={styles.heroTitle}>
            The Future of Web3 Cinema, <br />
            <span className={styles.highlight}>In A New Dimension.</span>
          </h1>

          <p className={styles.heroSub}>
            BTS Studios rewrites Hollywood with decentralized video-on-demand at <strong>gulp.wtf</strong>, Bitcoin Meta-Protocol & fan-controlled film production.
          </p>

          <div className={styles.heroCtas}>
            {/* 1ST HERO CTA: LAUNCH GULP */}
            <a href="https://gulp.wtf/" target="_blank" rel="noopener noreferrer" className="btn-canvas-neon">
              <Play size={16} fill="#fff" />
              <span>LAUNCH GULP</span>
              <ExternalLink size={14} />
            </a>

            {/* 2ND HERO CTA: BITCOIN A.I APP */}
            <a href="https://app.bts.network/" target="_blank" rel="noopener noreferrer" className="btn-canvas-primary">
              <Bot size={16} color="#00D1FF" />
              <span>BITCOIN A.I APP</span>
              <ExternalLink size={14} />
            </a>

            {/* 3RD HERO CTA: BTS CHAIN */}
            <Link href="/tokens" className="btn-canvas-secondary">
              <span>BTS Chain ($BTS)</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* CINEMA SPOTLIGHT SHOWCASE CARD: SUPERZERO (gulp.wtf/vertical-series/superzero) */}
          <div className={styles.cinemaSpotlightCard}>
            <div className={styles.spotlightHeader}>
              <div className={styles.spotlightBadgeGroup}>
                <span className={styles.liveBadge}>
                  <span className={styles.liveDot}></span> NOW STREAMING
                </span>
                <span className={styles.qualityTag}>VERTICAL SERIES</span>
                <span className={styles.qualityTag}>4K ULTRA HD</span>
                <span className={styles.qualityTag}>BITCOIN META-PROTOCOL</span>
              </div>
              <div className={styles.ratingBadge}>
                <Star size={12} fill="#F7D723" color="#F7D723" />
                <span>FEATURED SERIES</span>
              </div>
            </div>

            <div className={styles.spotlightPosterArea}>
              <Image
                src="/images/superzero-spotlight.png"
                alt="SUPERZERO Movie Series Spotlight"
                width={860}
                height={320}
                className={styles.spotlightImg}
                priority
              />
              <div className={styles.posterOverlay}>
                <div className={styles.posterText}>
                  <span className="mono-label" style={{ color: '#F7D723' }}>SPOTLIGHT SERIES</span>
                  <h3 className={styles.movieTitle}>SUPERZERO 🎥</h3>
                  <p className={styles.movieMeta}>
                    Starring Michael Berryman (Weird Science) & P.J. Marshall (The Blacklist) • Vertical Series on GULP
                  </p>
                </div>
                {/* Watch Trailer Link to https://gulp.wtf/vertical-series/superzero */}
                <a
                  href="https://gulp.wtf/vertical-series/superzero"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.playTrailerBtn}
                >
                  <Play size={18} fill="#fff" />
                  <span>WATCH ON GULP.WTF</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>

            <div className={styles.spotlightFooter}>
              <div className={styles.specItem}>
                <span className="mono-label">Primary Portal</span>
                <a href="https://gulp.wtf/vertical-series/superzero" target="_blank" rel="noopener noreferrer" className={styles.specVal} style={{ color: '#a855f7' }}>
                  gulp.wtf/vertical-series/superzero <ExternalLink size={12} />
                </a>
              </div>
              <div className={styles.specItem}>
                <span className="mono-label">L1 Blockchain</span>
                <span className={styles.specVal} style={{ color: '#F7D723' }}>BTS CHAIN ($BTS COMING SOON)</span>
              </div>
              <div className={styles.specItem}>
                <span className="mono-label">Governance</span>
                <span className={styles.specVal}>100% Fan Controlled</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOLLYWOOD MARQUEE TICKER BANNER */}
      <div className={styles.marqueeBanner}>
        <div className={styles.marqueeContent}>
          <span>🎬 GULP STREAMING NOW LIVE AT GULP.WTF</span>
          <span>•</span>
          <span>🍿 WATCH SUPERZERO AT GULP.WTF/VERTICAL-SERIES/SUPERZERO</span>
          <span>•</span>
          <span>⚡ BITCOIN META-PROTOCOL</span>
          <span>•</span>
          <span>🏆 100% FAN CONTROLLED FILM PRODUCTION</span>
          <span>•</span>
          <span>🚀 BTS CHAIN $BTS COMING SOON</span>
          <span>•</span>
        </div>
      </div>

      {/* CORE ECOSYSTEM CARDS & TERMINAL WINDOW WIDGET */}
      <section className={`${styles.section} dashed-section`}>
        <div className="crosshair-corner crosshair-top-left"></div>
        <div className="crosshair-corner crosshair-top-right"></div>
        
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <p className="mono-label">The Cinema Ecosystem</p>
            <h2 className={styles.sectionTitle}>FEATURED PLATFORMS & PORTALS</h2>
          </div>

          <div className={styles.cardGrid}>
            {/* GULP Stream Card */}
            <div className="canvas-card" style={{ padding: '32px' }}>
              <div className={styles.cardHeader}>
                <span className="mono-label" style={{ color: '#a855f7' }}>STREAMING APP</span>
                <span className={styles.badgePulse}>FEATURED</span>
              </div>
              <h3 className={styles.cardTitle}>GULP Web3 Cinema</h3>
              <p className={styles.cardDesc}>
                Decentralized video-on-demand platform powering indie creators & Web3 cinema at <strong>gulp.wtf</strong>.
              </p>
              <a href="https://gulp.wtf/" target="_blank" rel="noopener noreferrer" className={styles.cardLink} style={{ color: '#a855f7' }}>
                Open gulp.wtf <ExternalLink size={14} />
              </a>
            </div>

            {/* BTS App Card */}
            <div className="canvas-card" style={{ padding: '32px' }}>
              <div className={styles.cardHeader}>
                <span className="mono-label" style={{ color: '#00D1FF' }}>STUDIO APP</span>
              </div>
              <h3 className={styles.cardTitle}>BITCOIN A.I APP</h3>
              <p className={styles.cardDesc}>
                The primary decentralized Web3 portal and AI application hub for BTS Studios.
              </p>
              <a href="https://app.bts.network/" target="_blank" rel="noopener noreferrer" className={styles.cardLink} style={{ color: '#00D1FF' }}>
                Open app.bts.network <ExternalLink size={14} />
              </a>
            </div>

            {/* BTS Chain & $XBTS Tokens Card */}
            <div className="canvas-card" style={{ padding: '32px' }}>
              <div className={styles.cardHeader}>
                <span className="mono-label" style={{ color: '#F7D723' }}>CHAIN & TOKENS</span>
                <span className="mono-label" style={{ background: 'rgba(247, 215, 35, 0.15)', color: '#F7D723', padding: '2px 8px', borderRadius: '4px' }}>SOON</span>
              </div>
              <h3 className={styles.cardTitle}>BTS CHAIN & $XBTS</h3>
              <p className={styles.cardDesc}>
                Upcoming BTS Chain Layer 1 & multi-chain tokens on Bitcoin (BRC-20), Ethereum, and XRPL.
              </p>
              <Link href="/tokens" className={styles.cardLink} style={{ color: '#F7D723' }}>
                View Chain & Tokens <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* FULL TERMINAL WINDOW CARD WITH CODE PROMPT & WINDOW DOTS */}
          <div style={{ marginTop: '36px' }}>
            <div className={styles.heroTerminalCard}>
              <div className={styles.terminalHeader}>
                <div className={styles.terminalDots}>
                  <span style={{ background: '#ff5f56' }}></span>
                  <span style={{ background: '#ffbd2e' }}></span>
                  <span style={{ background: '#27c93f' }}></span>
                </div>
                <span className="mono-label">bts.network/registry</span>
                <span className={styles.statusIndicator}>
                  <CheckCircle2 size={12} color="#a855f7" /> Active
                </span>
              </div>
              <div className={styles.terminalBody}>
                <p className={styles.codeLine}>
                  <span style={{ color: '#00D1FF' }}>$</span> npx bts-network@latest connect <span style={{ color: '#a855f7' }}>--stream=https://gulp.wtf/</span>
                </p>
                <div className={styles.metricsGrid}>
                  <div className={styles.metricItem}>
                    <span className="mono-label">Streaming App</span>
                    <span className={styles.metricVal}>gulp.wtf</span>
                  </div>
                  <div className={styles.metricItem}>
                    <span className="mono-label">Chain</span>
                    <span className={styles.metricVal} style={{ color: '#F7D723' }}>$BTS (COMING SOON)</span>
                  </div>
                  <div className={styles.metricItem}>
                    <span className="mono-label">Governance</span>
                    <span className={styles.metricVal}>100% Fan Controlled</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BITCOIN & OP_CAT HIGHLIGHT */}
      <section className={`${styles.opcatSection} dashed-section`}>
        <div className="crosshair-corner crosshair-top-left"></div>
        <div className="crosshair-corner crosshair-top-right"></div>

        <div className={styles.container}>
          <div className="canvas-card" style={{ padding: '48px', border: '1px solid rgba(247, 215, 35, 0.35)' }}>
            <div className={styles.opcatContent}>
              <p className="mono-label" style={{ color: '#F7D723', marginBottom: '12px' }}>Special Cinema Feature</p>
              <h2 className={styles.opcatTitle}>Dreaming of a CAT Named OP 😻</h2>
              <p className={styles.opcatText}>
                &ldquo;The design supports a tremendous variety of possible transaction types that I designed years ago&rdquo; - Satoshi Nakamoto
                <br /><br />
                Discover how Bitcoin&apos;s OP_CAT proposal empowers BTS Studios to create Bitcoin Meta-Protocol film financing directly on Bitcoin.
              </p>
              <Link href="/blog/dreaming-of-op-cat" className="btn-canvas-primary">
                Read OP_CAT Article <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* LATEST JOURNAL & LIVE TWITTER FEED (SPLIT GRID - 4 POSTS TO FIT FLUSH WITH TWEETS) */}
      <section className={`${styles.section} dashed-section`}>
        <div className="crosshair-corner crosshair-top-left"></div>
        <div className="crosshair-corner crosshair-top-right"></div>

        <div className={styles.container}>
          <div className={styles.splitGrid}>
            {/* Left: Latest Articles (4 Posts to match Twitter Feed height) */}
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <div className={styles.sectionHeader} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <p className="mono-label">The Journal</p>
                  <h2 className={styles.sectionTitle} style={{ fontSize: '1.7rem' }}>LATEST POSTS</h2>
                </div>
                <Link href="/blog" className="btn-canvas-secondary" style={{ padding: '6px 14px', fontSize: '0.8rem' }}>
                  View All ({getAllPosts().length})
                </Link>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', flex: 1 }}>
                {posts.map((post) => (
                  <div key={post.slug} className="canvas-card" style={{ padding: '16px', display: 'flex', gap: '16px', alignItems: 'center' }}>
                    {post.featuredImage && (
                      <Link href={`/blog/${post.slug}`} style={{ width: '130px', height: '90px', flexShrink: 0, overflow: 'hidden', borderRadius: '10px', display: 'block' }}>
                        <Image 
                          src={post.featuredImage} 
                          alt={post.title} 
                          width={130} 
                          height={90} 
                          style={{ objectFit: 'cover', width: '100%', height: '100%', display: 'block' }} 
                        />
                      </Link>
                    )}
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '4px' }}>
                      <div className={styles.blogMeta}>
                        <span className="mono-label" style={{ fontSize: '0.7rem' }}>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                        {post.categories[0] && <span className={styles.blogCat}>{post.categories[0]}</span>}
                      </div>
                      <h3 className={styles.blogPostTitle} style={{ fontSize: '0.98rem', margin: '2px 0', lineHeight: '1.3' }}>
                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                      </h3>
                      <Link href={`/blog/${post.slug}`} className={styles.readMore} style={{ marginTop: '2px' }}>
                        Read Article <ArrowRight size={12} />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Live X / Twitter Feed */}
            <div>
              <TwitterFeed />
            </div>
          </div>
        </div>
      </section>

      {/* NEWSLETTER CTA */}
      <section className={`${styles.ctaSection} dashed-section`}>
        <div className="crosshair-corner crosshair-top-left"></div>
        <div className="crosshair-corner crosshair-top-right"></div>

        <div className={styles.container}>
          <div className="canvas-card" style={{ padding: '48px 32px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <p className="mono-label" style={{ color: '#a855f7' }}>Stay Connected</p>
            <h2 className={styles.ctaHeading}>JOIN THE DECENTRALIZED CINEMA REVOLUTION</h2>
            <p className={styles.ctaSub}>Subscribe to receive stealth drops, script greenlight alerts & early whitelist access.</p>
            <NewsletterForm />
          </div>
        </div>
      </section>
    </div>
  );
}
