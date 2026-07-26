import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getAllPosts } from '@/lib/blog';
import { BookOpen, Calendar, ArrowRight } from 'lucide-react';
import styles from './blog.module.css';

export const metadata = {
  title: 'Journal & Stealth Updates | BTS Studios',
  description: 'Deep dives into Web3 cinema, Bitcoin Meta-Protocol, stealth development milestones & decentralized film production.',
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.badge}>
          <BookOpen size={16} />
          <span>BTS STUDIOS JOURNAL</span>
        </div>
        <h1 className={styles.title}>COMMUNITY & STEALTH UPDATES</h1>
        <p className={styles.subtitle}>
          Deep dives into Web3 cinema, Bitcoin Meta-Protocol, stealth development milestones & decentralized film production.
        </p>
      </header>

      <div className={styles.grid}>
        {posts.map((post) => (
          <article key={post.slug} className="canvas-card" style={{ padding: '20px', display: 'flex', flexDirection: 'column' }}>
            {post.featuredImage && (
              <Link href={`/blog/${post.slug}`} className={styles.imageLink} style={{ display: 'block', overflow: 'hidden', borderRadius: '12px' }}>
                <Image
                  src={post.featuredImage}
                  alt={post.title}
                  width={500}
                  height={280}
                  className={styles.postThumbnail}
                  style={{ width: '100%', height: '200px', objectFit: 'cover', display: 'block', transition: 'transform 0.3s ease' }}
                />
              </Link>
            )}

            <div style={{ marginTop: '16px', flex: 1, display: 'flex', flexDirection: 'column' }}>
              <div className={styles.metaRow}>
                <span className="mono-label" style={{ fontSize: '0.72rem' }}>
                  <Calendar size={12} style={{ display: 'inline', marginRight: '4px' }} />
                  {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                </span>
                {post.categories[0] && <span className={styles.catBadge}>{post.categories[0]}</span>}
              </div>

              <h2 className={styles.postTitle}>
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h2>

              <p className={styles.excerpt}>{post.excerpt || 'Read the full post on BTS Studios...'}</p>

              <div className={styles.footerRow} style={{ marginTop: 'auto', paddingTop: '12px' }}>
                <Link href={`/blog/${post.slug}`} className={styles.readBtn}>
                  <span>Read Article</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
