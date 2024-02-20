import Link from "next/link";

const AboutPage = () => {
  return (
    <div>
        <h1>About Page</h1>
        <div className='flex'>
          <Link className='link' href='/'>home page</Link>
          <Link className='link' href='/about/info'>info page</Link>
        </div>
    </div>
  );
}

export default AboutPage;