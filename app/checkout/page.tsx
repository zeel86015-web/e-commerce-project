import Image from 'next/image';
import styles from './page.module.css';

export default function Checkout() {
  return (
    <div className={`container ${styles.checkoutContainer}`}>
      <div className={styles.header}>
        <h1 className={styles.title}>Secure Checkout</h1>
        <p className={styles.subtitle}>Complete your order, Aiman.</p>
      </div>

      <div className={styles.checkoutGrid}>
        {/* Left Form side */}
        <div className={styles.formSection}>
          <div className={styles.formGroup}>
            <h2 className={styles.sectionTitle}>1. Shipping Address</h2>
            <div className={styles.inputGroup}>
              <label>Full Name</label>
              <input type="text" defaultValue="Aiman" className={styles.input} />
            </div>
            <div className={styles.inputGroup}>
              <label>Street Address</label>
              <input type="text" placeholder="House No, Street Area" className={styles.input} />
            </div>
            <div className={styles.row}>
              <div className={styles.inputGroup}>
                <label>City</label>
                <input type="text" placeholder="Metropolis" className={styles.input} />
              </div>
              <div className={styles.inputGroup}>
                <label>PIN Code</label>
                <input type="text" placeholder="110001" className={styles.input} />
              </div>
            </div>
          </div>

          <div className={styles.formGroup}>
            <h2 className={styles.sectionTitle}>2. Payment Method</h2>
            <div className={styles.paymentOptions}>
              <div className={styles.paymentOption}>
                <input type="radio" id="upi" name="payment" defaultChecked />
                <label htmlFor="upi">
                  <span className={styles.methodName}>UPI Banking</span>
                  <span className={styles.methodDesc}>Google Pay, PhonePe, Paytm, BHIM</span>
                </label>
              </div>
              <div className={styles.upiDetails}>
                <input type="text" placeholder="Enter your UPI ID (eg. aiman@okicici)" className={styles.input} />
                <button className={styles.verifyBtn}>Verify</button>
              </div>

              <div className={styles.paymentOption}>
                <input type="radio" id="card" name="payment" />
                <label htmlFor="card">
                  <span className={styles.methodName}>Credit / Debit Card</span>
                </label>
              </div>
              <div className={styles.paymentOption}>
                <input type="radio" id="cod" name="payment" />
                <label htmlFor="cod">
                  <span className={styles.methodName}>Cash on Delivery</span>
                </label>
              </div>
            </div>
          </div>

          <button className={`btn-primary ${styles.placeOrderBtn}`}>
            <span>Place Order - ₹16,500.00</span>
          </button>
        </div>

        {/* Right Summary Side */}
        <div className={styles.summarySection}>
          <h2 className={styles.sectionTitle}>Order Summary</h2>
          <div className={styles.orderItem}>
            <div className={styles.itemImageWrapper}>
              <Image src="/pngwing.com(3).png" alt="Neon Pulse" width={80} height={80} className={styles.itemImage} />
            </div>
            <div className={styles.itemDetails}>
              <h3>Neon Pulse</h3>
              <p>Size: UK 9</p>
              <span className={styles.itemPrice}>₹16,500.00</span>
            </div>
          </div>
          <div className={styles.totals}>
            <div className={styles.totalRow}>
              <span>Subtotal</span>
              <span>₹16,500.00</span>
            </div>
            <div className={styles.totalRow}>
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className={`${styles.totalRow} ${styles.grandTotal}`}>
              <span>Total</span>
              <span>₹16,500.00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
