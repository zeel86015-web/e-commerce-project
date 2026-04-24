import styles from './page.module.css';
import ShoeCard from '@/components/ShoeCard';

const products = [
  { id: '1', name: 'Urban Glide 2.0', price: '₹12,500', category: 'Streetwear', image: '/pngwing.com(1).png' },
  { id: '2', name: 'Nova Element', price: '₹21,000', category: 'Premium', image: '/pngwing.com(2).png' },
  { id: '3', name: 'Neon Pulse', price: '₹16,500', category: 'Running', image: '/pngwing.com(3).png' },
  { id: '4', name: 'Air Phantom', price: '₹18,500', category: 'Running', image: '/pngwing.com(4).png' },
  { id: '5', name: 'Aero Boost', price: '₹19,500', category: 'Athletics', image: '/pngwing.com(5).png' },
  { id: '6', name: 'Street King', price: '₹14,000', category: 'Streetwear', image: '/pngwing.com.png' },
];

export default async function Store({ searchParams }: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {
  const resolvedParams = await searchParams;
  const rawQuery = resolvedParams.query;
  const query = typeof rawQuery === 'string' ? rawQuery.toLowerCase() : '';

  const filteredProducts = query 
    ? products.filter(p => p.name.toLowerCase().includes(query) || p.category.toLowerCase().includes(query))
    : products;

  return (
    <div className={`container ${styles.store}`}>
      <header className={styles.header}>
        <h1 className={styles.title}>
          {query ? `Results for "${rawQuery}"` : "All Collections"}
        </h1>
        <p className={styles.subtitle}>
          {query ? `Found ${filteredProducts.length} items.` : "Explore our full range of premium footwear."}
        </p>
        
        <div className={styles.filters}>
          <button className={styles.filterBtn}>All</button>
          <button className={styles.filterBtn}>Running</button>
          <button className={styles.filterBtn}>Streetwear</button>
          <button className={styles.filterBtn}>Premium</button>
        </div>
      </header>

      <div className={styles.grid}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <ShoeCard key={product.id} {...product} />
          ))
        ) : (
          <p style={{ color: "var(--text-secondary)", fontSize: "1.2rem", gridColumn: "1 / -1" }}>
            No products found matching your search.
          </p>
        )}
      </div>
    </div>
  );
}
