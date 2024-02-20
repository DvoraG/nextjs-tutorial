import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      <h1>NextJS Tutorial</h1>
      <Link className='link btn btn-accent' href='/client'>
        Get Started
      </Link>
    </div>
  );
}

export default HomePage;