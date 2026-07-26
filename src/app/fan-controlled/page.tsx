'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Film, Play, Sparkles, ChevronLeft, ChevronRight, ExternalLink, Vote, ShieldCheck, Flame, Layers } from 'lucide-react';
import styles from './fancontrolled.module.css';

interface FilmProject {
  id: string;
  title: string;
  tagline: string;
  genre: string;
  status: string;
  slidesCount: number;
  slides: string[];
}

export default function FanControlledPage() {
  const filmProjects: FilmProject[] = [
    {
      id: 'superposition',
      title: 'SUPERPOSITION',
      tagline: 'Quantum sci-fi thriller & Bitcoin Meta-Protocol cinema project.',
      genre: 'Sci-Fi / Quantum Thriller',
      status: 'In Production • Fan Governance Active',
      slidesCount: 17,
      slides: Array.from({ length: 17 }, (_, i) => `/images/films/superposition/slide-${(i + 1).toString().padStart(2, '0')}.jpg`),
    },
    {
      id: 'drdredd',
      title: 'DR DREDD',
      tagline: 'Futuristic cyberpunk law enforcement & decentralized film deck.',
      genre: 'Cyberpunk / Action',
      status: 'Development • Script Voting Open',
      slidesCount: 9,
      slides: Array.from({ length: 9 }, (_, i) => `/images/films/drdredd/slide-${(i + 1).toString().padStart(2, '0')}.jpg`),
    },
    {
      id: 'eventhelosers',
      title: 'EVEN THE LOSERS',
      tagline: 'High-stakes indie crime drama & fan-funded motion picture.',
      genre: 'Crime Drama / Indie Cinema',
      status: 'Pre-Production • Casting Greenlit',
      slidesCount: 7,
      slides: Array.from({ length: 7 }, (_, i) => `/images/films/eventhelosers/slide-${(i + 1).toString().padStart(2, '0')}.jpg`),
    },
    {
      id: 'nostress',
      title: 'NO STRESS',
      tagline: 'Psychological thriller & decentralized movie presentation deck.',
      genre: 'Psychological Thriller',
      status: 'In Production • Sound Mix',
      slidesCount: 4,
      slides: Array.from({ length: 4 }, (_, i) => `/images/films/nostress/slide-${(i + 1).toString().padStart(2, '0')}.jpg`),
    },
    {
      id: 'flatwoods',
      title: 'FLATWOODS',
      tagline: 'Alien horror & sci-fi mystery film presentation deck.',
      genre: 'Sci-Fi Horror / Mystery',
      status: 'Pre-Production • Concept Art Greenlit',
      slidesCount: 18,
      slides: Array.from({ length: 18 }, (_, i) => `/images/films/flatwoods/slide-${(i + 1).toString().padStart(2, '0')}.jpg`),
    },
    {
      id: 'thegodshatekansas',
      title: 'THE GODS HATE KANSAS',
      tagline: 'Dark fantasy apocalyptic western & fan-controlled cinema.',
      genre: 'Dark Fantasy / Neo-Western',
      status: 'Script Phase • Community Approved',
      slidesCount: 9,
      slides: Array.from({ length: 9 }, (_, i) => `/images/films/thegodshatekansas/slide-${(i + 1).toString().padStart(2, '0')}.jpg`),
    },
  ];

  // Active slide index per film
  const [activeSlides, setActiveSlides] = useState<{ [key: string]: number }>({
    superposition: 0,
    drdredd: 0,
    eventhelosers: 0,
    nostress: 0,
    flatwoods: 0,
    thegodshatekansas: 0,
  });

  const nextSlide = (filmId: string, total: number) => {
    setActiveSlides((prev) => ({
      ...prev,
      [filmId]: (prev[filmId] + 1) % total,
    }));
  };

  const prevSlide = (filmId: string, total: number) => {
    setActiveSlides((prev) => ({
      ...prev,
      [filmId]: (prev[filmId] - 1 + total) % total,
    }));
  };

  return (
    <div className={styles.container}>
      {/* HEADER SECTION */}
      <header className={styles.header}>
        <div className={styles.badge}>
          <Sparkles size={16} color="#a855f7" />
          <span>100% FAN CONTROLLED CINEMA</span>
        </div>
        <h1 className={styles.title}>FILM PRESENTATIONS & FAN GOVERNANCE</h1>
        <p className={styles.subtitle}>
          Explore official film presentation slide decks, vote on script greenlights & participate in IMDb credited Web3 movie productions.
        </p>

        {/* Quick Anchor Jumps */}
        <div className={styles.anchorNav}>
          {filmProjects.map((film) => (
            <a key={film.id} href={`#${film.id}`} className={styles.anchorLink}>
              #{film.title}
            </a>
          ))}
        </div>
      </header>

      {/* FILM PRESENTATIONS SHOWCASE GRID */}
      <div className={styles.filmsList}>
        {filmProjects.map((film) => {
          const currentSlide = activeSlides[film.id] || 0;
          return (
            <div key={film.id} id={film.id} className="canvas-card" style={{ padding: '24px', scrollMarginTop: '100px' }}>
              <div className={styles.filmHeader}>
                <div>
                  <div className={styles.tagRow}>
                    <span className={styles.genreBadge}>{film.genre}</span>
                    <span className={styles.statusTag}>{film.status}</span>
                  </div>
                  <h2 className={styles.filmTitle}>{film.title}</h2>
                  <p className={styles.filmTagline}>{film.tagline}</p>
                </div>

                <a
                  href="https://gulp.wtf/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-canvas-neon"
                  style={{ padding: '8px 18px', fontSize: '0.85rem' }}
                >
                  <Play size={14} fill="#fff" />
                  <span>Stream on GULP</span>
                  <ExternalLink size={12} />
                </a>
              </div>

              {/* PRESENTATION SLIDE VIEWER CAROUSEL */}
              <div className={styles.viewerContainer}>
                <div className={styles.slideTopBar}>
                  <div className={styles.navControlButtons}>
                    <button
                      onClick={() => prevSlide(film.id, film.slidesCount)}
                      className={styles.slideControlBtn}
                      aria-label="Previous slide"
                    >
                      <ChevronLeft size={18} />
                      <span>Prev</span>
                    </button>
                    <button
                      onClick={() => nextSlide(film.id, film.slidesCount)}
                      className={styles.slideControlBtn}
                      aria-label="Next slide"
                    >
                      <span>Next</span>
                      <ChevronRight size={18} />
                    </button>
                  </div>

                  <div className={styles.slideCounter}>
                    <span>SLIDE {currentSlide + 1} OF {film.slidesCount}</span>
                  </div>
                </div>

                <div className={styles.slideDisplay}>
                  <img
                    src={film.slides[currentSlide]}
                    alt={`${film.title} Presentation Slide ${currentSlide + 1}`}
                    className={styles.slideImg}
                  />
                </div>

                {/* THUMBNAIL STRIP SLIDER */}
                <div className={styles.thumbStrip}>
                  {film.slides.map((slideUrl, sIdx) => (
                    <button
                      key={sIdx}
                      onClick={() => setActiveSlides((prev) => ({ ...prev, [film.id]: sIdx }))}
                      className={`${styles.thumbBtn} ${sIdx === currentSlide ? styles.activeThumb : ''}`}
                    >
                      <img
                        src={slideUrl}
                        alt={`Thumb ${sIdx + 1}`}
                        style={{ height: '50px', width: 'auto', objectFit: 'contain', borderRadius: '4px', display: 'block' }}
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
