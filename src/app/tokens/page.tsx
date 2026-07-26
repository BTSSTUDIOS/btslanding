import React from 'react';
import Link from 'next/link';
import { Coins, ExternalLink, ShieldAlert, Cpu, Layers, Sparkles, Flame, Clock } from 'lucide-react';
import styles from './tokens.module.css';

export const metadata = {
  title: 'BTS CHAIN (COMING SOON) & $XBTS Tokens',
  description: 'BTS Chain (Coming Soon) & $XBTS multi-token ecosystem across Bitcoin, Ethereum, and XRPL for decentralized film financing.',
};

export default function TokensPage() {
  const tokenMarkets = [
    {
      chain: 'BITCOIN (BRC-20)',
      ticker: '$XBTS',
      color: '#F7D723',
      href: 'https://uniscan.cc/brc20/XBTS',
      explorer: 'Uniscan BRC-20',
    },
    {
      chain: 'ETHEREUM (ERC-20)',
      ticker: '$XBTS',
      contract: '0x0af05d0d594e9871e52bb60f4c527fdc2be97060',
      color: '#00D1FF',
      href: 'https://etherscan.io/token/0x0af05d0d594e9871e52bb60f4c527fdc2be97060',
      explorer: 'Etherscan',
    },
    {
      chain: 'XRPL (Sologenic)',
      ticker: '$XBTS',
      color: '#1FDB00',
      href: 'https://sologenic.org/market-index/7842545300000000000000000000000000000000+rap2LWtavwsczeUVeWrXBQvizkTnhxWvLU/',
      explorer: 'Sologenic Market',
    },
  ];

  return (
    <div className={styles.container}>
      {/* BIG BTS CHAIN (COMING SOON) HERO BANNER */}
      <div className={styles.chainBannerCard}>
        <div className={styles.bannerBadge}>
          <Clock size={14} color="#F7D723" />
          <span style={{ color: '#F7D723' }}>NEXT GENERATION NETWORK</span>
        </div>
        <h1 className={styles.chainTitle}>BTS CHAIN</h1>
        <div className={styles.comingSoonTag}>COMING SOON</div>

        <p className={styles.chainDesc}>
          The dedicated Layer 1 blockchain built for Hollywood & Web3 film streaming. Powered by native <strong>$BTS</strong> transaction fees, Bitcoin Meta-Protocol, and decentralized profit-sharing protocols.
        </p>

        <div className={styles.chainFeatures}>
          <div className={styles.featItem}>
            <Cpu size={18} color="#F7D723" />
            <span>Bitcoin Meta-Protocol</span>
          </div>
          <div className={styles.featItem}>
            <Sparkles size={18} color="#1FDB00" />
            <span>Decentralized Film Financing</span>
          </div>
          <div className={styles.featItem}>
            <Layers size={18} color="#00D1FF" />
            <span>Multi-Chain Token Bridge</span>
          </div>
        </div>
      </div>

      {/* MULTI-TOKEN XBTS SECTION */}
      <div className={styles.hero}>
        <div className={styles.badge}>
          <Coins size={16} />
          <span>MULTI-CHAIN TOKEN ECOSYSTEM</span>
        </div>
        <h2 className={styles.title}>$BTS / $XBTS TOKENS</h2>
        <h3 className={styles.subtitle}>Make your wallet legendary!</h3>
        
        <p className={styles.description}>
          At BTS Studios, we&apos;re pioneering a multi-token approach to decentralize Hollywood. Our XBTS token spans <strong>BITCOIN</strong>, <strong>ETHEREUM</strong>, and the <strong>XRPL</strong>, offering exclusive token-gated content and airdrop rewards. Holding our tokens not only looks sleek in your wallet but also helps the team pull off this ambitious project, reshaping the future of entertainment. Join us in revolutionizing film! 🎬✨
        </p>
      </div>

      {/* Token Markets Grid */}
      <div className={styles.grid}>
        {tokenMarkets.map((token) => (
          <div key={token.chain} className="canvas-card" style={{ padding: '32px' }}>
            <p className="mono-label" style={{ color: token.color, marginBottom: '8px' }}>{token.chain}</p>
            <h3 className={styles.tokenTicker}>{token.ticker}</h3>
            {token.contract && (
              <p className={styles.contractAddr}>
                Contract: <span>{token.contract.slice(0, 10)}...{token.contract.slice(-8)}</span>
              </p>
            )}
            <a
              href={token.href}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-canvas-primary"
              style={{ marginTop: '24px', width: '100%', justifyContent: 'center' }}
            >
              <span>Trade on {token.explorer}</span>
              <ExternalLink size={14} />
            </a>
          </div>
        ))}
      </div>

      {/* Disclaimer */}
      <div className={styles.disclaimerBox}>
        <ShieldAlert size={20} color="#F7D723" />
        <p>
          🎯 You are fully responsible for your own token transactions and exchanges, as well as all the risks associated with crypto/tokens.
        </p>
      </div>
    </div>
  );
}
