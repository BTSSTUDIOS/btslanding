'use client';

import React, { useState } from 'react';
import styles from './NewsletterForm.module.css';

interface Props {
  buttonText?: string;
  placeholder?: string;
  className?: string;
}

export default function NewsletterForm({ buttonText = 'Subscribe Now', placeholder = 'Enter your email address' }: Props) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className={styles.successMsg}>
        ✓ Thank you for subscribing to BTS Studios updates!
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={placeholder}
        required
        className={styles.input}
      />
      <button type="submit" className="btn-primary">
        {buttonText}
      </button>
    </form>
  );
}
