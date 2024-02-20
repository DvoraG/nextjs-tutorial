
const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a';

const fetchDrinks = async () => {
  await new Promise((resolve) => setTimeout(resolve, 5000));

  const response = await fetch(url);
  const data = await response.json();
  return data;
}

const DrinksPage = async () => {
  const drinks = await fetchDrinks();

  return (
    <div>
        <h1>Drinks Page</h1>
    </div>
  );
}

export default DrinksPage;