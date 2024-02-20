import styles from '../../styles/Drinks.module.css';

const DrinksLayout = ({children}) => {
  return (
    <div className={styles.small}>
        <div className={styles.box}></div>
        {children}
    </div>
  )
}

export default DrinksLayout;