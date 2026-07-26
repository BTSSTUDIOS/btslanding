import React from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { ArrowLeft, Calendar, Share2 } from 'lucide-react';
import { getPostBySlug, getAllPosts } from '@/lib/blog';
import styles from './post.module.css';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: 'Post Not Found' };

  const ogImage = post.featuredImage
    ? `https://bts.network${post.featuredImage}`
    : 'https://bts.network/images/logo/bts-logo-orange.png';

  return {
    title: `${post.title} | BTS Studios`,
    description: post.excerpt || `Read ${post.title} on the official BTS Studios journal.`,
    openGraph: {
      title: post.title,
      description: post.excerpt || `Read ${post.title} on the official BTS Studios journal.`,
      url: `https://bts.network/blog/${post.slug}`,
      siteName: 'BTS Studios',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      type: 'article',
      publishedTime: post.date,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt || `Read ${post.title} on the official BTS Studios journal.`,
      site: '@btsstudiosntwrk',
      creator: '@btsstudiosntwrk',
      images: [ogImage],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className={styles.articleContainer}>
      <div className={styles.backNav}>
        <Link href="/blog" className={styles.backBtn}>
          <ArrowLeft size={16} />
          <span>Back to All Journal Posts</span>
        </Link>
      </div>

      <header className={styles.header}>
        <div className={styles.metaRow}>
          <span className={styles.date}>
            <Calendar size={14} />
            {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </span>
          {post.categories.map((cat) => (
            <span key={cat} className={styles.categoryBadge}>
              {cat}
            </span>
          ))}
        </div>

        <h1 className={styles.title}>{post.title}</h1>

        {post.excerpt && <p className={styles.excerpt}>{post.excerpt}</p>}
      </header>

      {/* SINGLE OFFICIAL FEATURED POST IMAGE */}
      {post.featuredImage && (
        <div className={styles.featuredImgWrapper}>
          <Image
            src={post.featuredImage}
            alt={post.title}
            width={1200}
            height={630}
            priority
            style={{ width: '100%', height: 'auto', borderRadius: '16px', objectFit: 'cover' }}
          />
        </div>
      )}

      {/* CLEAN MDX BODY CONTENT */}
      <div className={styles.contentBody}>
        <MDXRemote source={post.content} />
      </div>

      <footer className={styles.footer}>
        <div className={styles.tagsRow}>
          {post.tags.map((tag) => (
            <span key={tag} className={styles.tagChip}>
              #{tag}
            </span>
          ))}
        </div>

        <div style={{ marginTop: '24px', display: 'flex', justifyContent: 'center' }}>
          <a
            href={`https://x.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://bts.network/blog/${post.slug}`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-canvas-neon"
            style={{ fontSize: '0.88rem' }}
          >
            <Share2 size={14} />
            <span>Share Article on X</span>
          </a>
        </div>
      </footer>
    </article>
  );
}
