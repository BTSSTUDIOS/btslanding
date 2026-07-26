'use client';

import React from 'react';
import Image from 'next/image';
import { ExternalLink, Heart, Repeat, MessageCircle, Share, Pin } from 'lucide-react';
import styles from './TwitterFeed.module.css';

interface Tweet {
  id: string;
  name: string;
  handle: string;
  date: string;
  views: string;
  isPinned?: boolean;
  content: string[];
  image?: string;
  likes: number;
  retweets: number;
  replies: number;
  url: string;
}

export default function TwitterFeed() {
  const tweets: Tweet[] = [
    {
      id: '2081322283034132854',
      name: 'BTS STUDIOS NETWORK 🟠🎬',
      handle: '@btsstudiosntwrk',
      date: 'Jul 26, 2026 • 3:14 AM',
      views: '36 Views',
      content: [
        '🎬 FILM x BITCOIN = CULTURE! 🍿',
        '',
        'BEHIND THE SCENES Studios 🎬',
        'GULP STUDIOS 🎥',
        'Bitcoin & BTS Chain ONLY! 🟠',
        '',
        "We don't just make content — we build empires.",
        '🚀 Crypto obsessed.',
        '🎬 Movie making.',
        '💰 Domination mode ON.',
        '',
        'Are you IN? 🟢'
      ],
      likes: 2,
      retweets: 1,
      replies: 0,
      url: 'https://x.com/btsstudiosntwrk/status/2081322283034132854'
    },
    {
      id: '2080377903297032444',
      name: 'BTS STUDIOS NETWORK 🟠🎬',
      handle: '@btsstudiosntwrk',
      date: 'Jul 23, 2026 • 12:41 PM',
      views: '90 Views',
      content: [
        'While Elon promises AI-generated blockbuster movies by the end of the year, legacy studios are busy stripping real camera crews of their livelihoods.',
        '',
        'Human cinema needs a new home at GULP.'
      ],
      image: '/images/tweets/tweet-elon.png',
      likes: 3,
      retweets: 2,
      replies: 1,
      url: 'https://x.com/btsstudiosntwrk/status/2080377903297032444'
    },
    {
      id: '1741192282907254817',
      name: 'BTS STUDIOS NETWORK 🟠🎬',
      handle: '@btsstudiosntwrk',
      date: 'Dec 30, 2023 • 12:19 PM',
      views: '6,576 Views',
      isPinned: true,
      content: [
        'Introducing BTS Studios Namespaces - Where Film Meets Forever on Bitcoin🚀🚀🚀'
      ],
      image: '/images/tweets/tweet-hellobts.png',
      likes: 29,
      retweets: 10,
      replies: 3,
      url: 'https://x.com/btsstudiosntwrk/status/1741192282907254817'
    }
  ];

  return (
    <div className={styles.feedWrapper}>
      <div className={styles.header}>
        <div className={styles.headerTitle}>
          <svg viewBox="0 0 24 24" className={styles.xLogo} aria-hidden="true">
            <path fill="currentColor" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117l11.966 15.644Z"></path>
          </svg>
          <div>
            <h3>LIVE ON X</h3>
            <span className="mono-label" style={{ fontSize: '0.75rem', color: '#a855f7' }}>@btsstudiosntwrk</span>
          </div>
        </div>

        <a
          href="https://x.com/btsstudiosntwrk"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-canvas-neon"
          style={{ padding: '6px 14px', fontSize: '0.8rem' }}
        >
          <span>Follow @btsstudiosntwrk</span>
          <ExternalLink size={12} />
        </a>
      </div>

      <div className={styles.tweetsList}>
        {tweets.map((t, idx) => (
          <a
            key={t.id}
            href={t.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.tweetCard} ${idx === 0 ? styles.latestCard : ''}`}
          >
            {t.isPinned && (
              <div className={styles.pinnedLabel}>
                <Pin size={12} color="#a855f7" />
                <span>Pinned Post</span>
              </div>
            )}

            <div className={styles.tweetHeader}>
              <div className={styles.author}>
                <Image
                  src={idx === 0 ? "/images/logo/bts-logo-orange.png" : "/images/logo/bts-logo-purple.png"}
                  alt="BTS Studios Logo"
                  width={38}
                  height={38}
                  style={{ borderRadius: '50%', flexShrink: 0 }}
                />
                <div>
                  <div className={styles.authorTitleRow}>
                    <span className={styles.authorName}>{t.name}</span>
                    <span className={styles.verifiedBadge}>✓</span>
                  </div>
                  <span className={styles.authorHandle}>{t.handle} • {t.date}</span>
                </div>
              </div>
              <svg viewBox="0 0 24 24" className={styles.miniXLogo} aria-hidden="true">
                <path fill="currentColor" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117l11.966 15.644Z"></path>
              </svg>
            </div>

            <div className={styles.tweetText}>
              {t.content.map((line, lIdx) => (
                <p key={lIdx}>{line || '\u00A0'}</p>
              ))}
            </div>

            {t.image && (
              <div className={styles.tweetImageWrapper}>
                <Image
                  src={t.image}
                  alt="Tweet Attachment"
                  width={600}
                  height={320}
                  style={{ width: '100%', height: 'auto', borderRadius: '12px', display: 'block' }}
                />
              </div>
            )}

            <div className={styles.tweetStats}>
              <span>{t.views}</span>
              <span>• {t.date}</span>
            </div>

            <div className={styles.tweetActions}>
              <span className={styles.stat}><MessageCircle size={14} /> {t.replies}</span>
              <span className={styles.stat}><Repeat size={14} /> {t.retweets}</span>
              <span className={styles.stat}><Heart size={14} color="#a855f7" /> {t.likes}</span>
              <span className={styles.stat}><Share size={14} /></span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
