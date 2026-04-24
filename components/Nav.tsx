"use client";
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './Nav.module.css';

export default function Nav() {
  const [isSearching, setIsSearching] = useState(false);
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/store?query=${encodeURIComponent(query)}`);
      setIsSearching(false);
      setQuery("");
    }
  };

  return (
    <header className={styles.header}>
      <div className={`container ${styles.navContainer}`}>
        <Link href="/" className={styles.logo}>
          JOOTA<span>CHAPPAL</span>
        </Link>
        <nav className={styles.navLinks}>
          <Link href="/" className={styles.link}>Home</Link>
          <Link href="/store" className={styles.link}>Store</Link>
          <Link href="/store" className={styles.link}>Collections</Link>
        </nav>
        <div className={styles.actions}>
          {isSearching ? (
             <form onSubmit={handleSearch} className={styles.searchForm}>
               <input 
                 type="text" 
                 value={query} 
                 onChange={e => setQuery(e.target.value)} 
                 placeholder="Search shoes..." 
                 autoFocus
                 className={styles.searchInput} 
               />
               <button type="button" onClick={() => setIsSearching(false)} className={styles.closeBtn}>&times;</button>
             </form>
          ) : (
            <button className={styles.iconBtn} aria-label="Search" onClick={() => setIsSearching(true)}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <circle cx="11" cy="11" r="8"/>
                <line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
            </button>
          )}
          <Link href="/checkout" className={styles.iconBtn} aria-label="Cart">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
              <line x1="3" y1="6" x2="21" y2="6"/>
              <path d="M16 10a4 4 0 01-8 0"/>
            </svg>
          </Link>
        </div>
      </div>
    </header>
  );
}
