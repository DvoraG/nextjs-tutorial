import Link from "next/link";
import Image from "next/image";
import styles from '../styles/DrinksList.module.css';

const DrinksList = ({drinks}) => {
  return (
    <ul className={styles.menu}>
        {
            drinks.map((drink) => {
                return (
                    <li key={drink.idDrink}>
                        <Link href={`/drinks/${drink.idDrink}`}>
                            <div className={styles.imgContainer} >
                                <Image 
                                    width={275}
                                    height={275}
                                    src={drink.strDrinkThumb} 
                                    alt={drink.strDrink}
                                    className='img'
                                />
                            </div>
                            {drink.strDrink}
                        </Link>
                    </li>
                );
            })
        }
    </ul>
  )
}

export default DrinksList;