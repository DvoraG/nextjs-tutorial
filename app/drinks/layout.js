import styles from '../../styles/DrinksList.module.css';

const DrinksLayout = ({children}) => {
  return (
    <div className='small'>
        <div className={styles.box}></div>
        {children}
    </div>
  )
}

export default DrinksLayout;