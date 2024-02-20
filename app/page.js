import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <Link className='link' href='/about'>about page</Link>
    </div>
  );
}

export default HomePage;