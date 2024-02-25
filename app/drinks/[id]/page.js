import Link from "next/link";
import Image from "next/image";
// import drinkImg from './drink.jpg';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

const fetchSingleDrink = async (id) => {
    const response = await fetch(`${url}${id}`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch the drink data');
    }
  
    return response.json();
}

const SingleDrinkPage = async ({params}) => {
    const data = await fetchSingleDrink(params.id);
    const title = data?.drinks[0]?.strDrink;
    // const title = data.drinks[0].strDrink;
    const imgSrc = data?.drinks[0]?.strDrinkThumb;
    // const imgSrc = data.drinks[0].strDrinkThumb;
  return (
    <div>
        <Link className='btn btn-primary' href='/drinks'>Back To Drinks</Link>
        <Image src={imgSrc} width={300} height={300} className='img' priority alt={title} />
        {/* <Image src={drinkImg} className='img' width={'320'} height={'320'} alt='drink'/> */}
        <h1>{title}</h1>
    </div>
  );
}

export default SingleDrinkPage;