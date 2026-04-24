import Image from 'next/image';
import Link from 'next/link';
import styles from './ShoeCard.module.css';

interface ShoeCardProps {
  id: string;
  name: string;
  price: string;
  image: string;
  category: string;
}

export default function ShoeCard({ name, price, image, category }: ShoeCardProps) {
  return (
    <Link href="/checkout" className={styles.card}>
      <div className={styles.imageWrapper}>
        <div className={styles.imageBackground}></div>
        <Image 
          src={image} 
          alt={name} 
          fill 
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={styles.image} 
        />
      </div>
      <div className={styles.info}>
        <div className={styles.header}>
          <h3 className={styles.name}>{name}</h3>
          <span className={styles.price}>{price}</span>
        </div>
        <p className={styles.category}>{category}</p>
      </div>
    </Link>
  );
}
