import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';
import ShoeCard from '@/components/ShoeCard';

export default function Home() {
  return (
    <div className={styles.home}>
      <section className={styles.hero}>
        <div className={styles.bgText}>JOOTA CHAPPAL</div>
        <div className={`container ${styles.heroContainer}`}>
          <div className={styles.heroContent}>
            <span className={styles.newBadge}>Just Dropped</span>
            <h1 className={styles.title}>
              Air <br/><span>Phantom</span>
            </h1>
            <p className={styles.subtitle}>
              Engineered for velocity. Built for the streets. Experience the ultimate fusion of modern performance and crisp aesthetics.
            </p>
            <div className={styles.ctaGroup}>
              <Link href="/checkout" className="btn-primary"><span>Buy Now</span></Link>
              <Link href="/store" className="btn-secondary"><span>Explore</span></Link>
            </div>
          </div>
          <div className={styles.heroImageWrapper}>
            <Image 
              src="/pngwing.com(3).png" 
              alt="Joota Chappal Hero Shoe" 
              width={900} 
              height={900}
              priority
              className={styles.heroImage} 
            />
          </div>
        </div>
      </section>

      <section className={`container ${styles.featured}`}>
        <div className={styles.sectionHeader}>
          <h2>Latest Drops</h2>
        </div>
        <div className={styles.grid}>
          <ShoeCard id="1" name="Urban Glide 2.0" price="₹12,500" category="Streetwear" image="/pngwing.com(1).png" />
          <ShoeCard id="2" name="Nova Element" price="₹21,000" category="Premium" image="/pngwing.com(2).png" />
          <ShoeCard id="3" name="Neon Pulse" price="₹16,500" category="Running" image="/pngwing.com(3).png" />
        </div>
      </section>
    </div>
  );
}
