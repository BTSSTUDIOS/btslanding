import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ShieldCheck, Sparkles, ExternalLink, Clapperboard, Award, Film, Layers, Cpu, Globe2, Flame } from 'lucide-react';
import styles from './mission.module.css';

export const metadata = {
  title: 'Mission & Founders | Blackpaper V2 | BTS Studios',
  description: 'Meet the founders and team behind BTS Studios. Revolutionizing Hollywood with decentralized Web3 cinema, Bitcoin Meta-Protocol & fan-controlled film production.',
};

export default function MissionPage() {
  const teamMembers = [
    {
      name: 'BIDKAR RAMOS',
      role: 'CHIEF EXECUTIVE OFFICER & CO-FOUNDER',
      image: '/images/logo/bts-logo-orange.png',
      imdb: 'https://www.imdb.com/name/nm5979991/',
      twitter: 'https://x.com/btsstudiosntwrk',
      bio: `Bidkar Ramos is the Chief Executive Officer and Co-Founder of BTS Studios. With over 20 years of experience in film production, directing, editing, and technical engineering, Bidkar transitioned into full-stack development to eliminate industry friction faced by creators. He spearheaded the creation of the BTS Studios namespace on the Bitcoin blockchain to pioneer a fairer, transparent, and decentralized future for indie creators worldwide.`,
    },
    {
      name: 'LANDON WILLIAMS',
      role: 'CHIEF BUSINESS OFFICER & CHIEF CREATIVE OFFICER',
      image: '/images/logo/bts-logo-orange.png',
      imdb: 'https://www.imdb.com/name/nm2034621/',
      twitter: 'https://x.com/btsstudiosntwrk',
      bio: `Landon Williams is the Chief Business Officer and Chief Creative Officer of BTS Studios. A creative visionary and director of the groundbreaking high dynamic range feature ANABOLIC LIFE (2017), Landon has written, directed, and edited commercials and motion pictures for major Hollywood studios. At BTS Studios, he bridges traditional Hollywood production with Web3 cinema and content acquisition.`,
    },
    {
      name: 'ANDRE RAMOS',
      role: 'CHIEF METAVERSE OFFICER & METAVERSE ENGINEER',
      image: '/images/logo/bts-logo-orange.png',
      imdb: 'https://www.imdb.com/name/nm8391162/',
      twitter: 'https://x.com/btsstudiosntwrk',
      bio: `Andre Ramos is a Co-Founder and Chief Metaverse Officer at BTS Studios. A FUN-gineer working at the intersection of gaming, technology, and cinema, Andre architected the original XRPL-based metaverse within ZERPCRAFT. He leads next-gen metaverse, Unreal Engine, and Unity development for BTS Studios, crafting immersive cinema worlds for movie lovers.`,
    },
  ];

  return (
    <div className={styles.container}>
      {/* HEADER SECTION */}
      <header className={styles.header}>
        <div className={styles.badge}>
          <Sparkles size={16} color="#a855f7" />
          <span>BLACKPAPER V2 • BTS STUDIOS MISSION</span>
        </div>
        <h1 className={styles.title}>REVOLUTIONIZING HOLLYWOOD THROUGH DECENTRALIZED CINEMA</h1>
        <p className={styles.subtitle}>
          We are a team of passionate filmmakers, coders, and visionaries creating a fairer, transparent, and fan-controlled future for film creation, distribution, and streaming.
        </p>
      </header>

      {/* MISSION STATEMENT CARDS */}
      <section className={styles.missionSection}>
        <div className="canvas-card" style={{ padding: '40px', border: '1px solid rgba(168, 85, 247, 0.35)' }}>
          <div className={styles.missionGrid}>
            <div>
              <span className="mono-label" style={{ color: '#a855f7' }}>THE VISION</span>
              <h2 className={styles.cardTitle}>Why We Built BTS Studios</h2>
              <p className={styles.cardText}>
                For over two decades, independent filmmakers and creators have faced systemic friction, middlemen fees, and gatekeeping in traditional Hollywood distribution.
                <br /><br />
                BTS Studios solves this by leveraging **Bitcoin Meta-Protocol**, decentralized video-on-demand at **gulp.wtf**, and fan-controlled governance. We empower creators to own their IP and allow audiences to directly greenlight films.
              </p>
            </div>

            <div className={styles.statBoxGroup}>
              <div className={styles.statBox}>
                <span className={styles.statNumber}>100%</span>
                <span className="mono-label">Fan Controlled</span>
              </div>
              <div className={styles.statBox}>
                <span className={styles.statNumber}>Bitcoin</span>
                <span className="mono-label">Meta-Protocol</span>
              </div>
              <div className={styles.statBox}>
                <span className={styles.statNumber}>GULP</span>
                <span className="mono-label">Web3 Streaming</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOUNDERS & LEADERSHIP TEAM */}
      <section className={styles.teamSection}>
        <div className={styles.sectionHeader}>
          <p className="mono-label">Leadership & Visionaries</p>
          <h2 className={styles.sectionTitle}>MEET THE FOUNDERS</h2>
        </div>

        <div className={styles.teamGrid}>
          {teamMembers.map((member) => (
            <div key={member.name} className="canvas-card" style={{ padding: '28px', display: 'flex', flexDirection: 'column' }}>
              <div className={styles.avatarWrapper}>
                <Image
                  src={member.image}
                  alt={member.name}
                  width={140}
                  height={140}
                  className={styles.avatarImg}
                />
              </div>

              <div style={{ marginTop: '16px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <span className={styles.roleTag}>{member.role}</span>
                <h3 className={styles.memberName}>{member.name}</h3>
                <p className={styles.memberBio}>{member.bio}</p>

                <div className={styles.socialRow} style={{ marginTop: 'auto', paddingTop: '16px' }}>
                  {member.imdb && (
                    <a href={member.imdb} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                      <Film size={14} />
                      <span>IMDb Profile</span>
                    </a>
                  )}
                  {member.twitter && (
                    <a href={member.twitter} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                      <ExternalLink size={14} />
                      <span>X / Twitter</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CORE PILLARS & COLLABORATIONS */}
      <section className={styles.pillarsSection}>
        <div className="canvas-card" style={{ padding: '40px' }}>
          <div className={styles.sectionHeader} style={{ marginBottom: '24px' }}>
            <p className="mono-label">Ecosystem Pillars</p>
            <h2 className={styles.sectionTitle}>OUR DECENTRALIZED CINEMA STACK</h2>
          </div>

          <div className={styles.pillarGrid}>
            <div className={styles.pillarItem}>
              <Clapperboard size={28} color="#a855f7" />
              <h3>GULP Web3 Cinema</h3>
              <p>Decentralized video-on-demand platform powering indie creators & vertical series at <strong>gulp.wtf</strong>.</p>
            </div>
            <div className={styles.pillarItem}>
              <Cpu size={28} color="#00D1FF" />
              <h3>Bitcoin Meta-Protocol</h3>
              <p>Leveraging Bitcoin smart contracts and OP_CAT proposals for permanent, tamper-proof film funding.</p>
            </div>
            <div className={styles.pillarItem}>
              <Sparkles size={28} color="#F7D723" />
              <h3>Fan Governance</h3>
              <p>100% community-driven script greenlighting, casting votes, and IMDb credited film participation.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
