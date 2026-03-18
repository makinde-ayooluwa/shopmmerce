import styles from "../../styles/user/animatedBackground.module.css"
export default function AnimatedBackground() {
  return (
    <div className={styles.bgContainer}>
      <div className={styles.blob + " " + styles.blob1}></div>
      <div className={styles.blob + " " + styles.blob2}></div>
      <div className={styles.blob + " " + styles.blob3}></div>
    </div>
  );
}