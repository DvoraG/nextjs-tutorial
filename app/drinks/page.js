
const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a';

const DrinksPage = async () => {
  const response = await fetch(url);
  const drinks = await response.json();
  console.log(drinks);
  return (
    <div>
        <h1>Drinks Page</h1>
    </div>
  );
}

export default DrinksPage;