import Link from "next/link";

const AboutInfoPage = () => {
  return (
    <div>
        <h1>Info Page</h1>
        <Link className='link' href='/about'>back to about</Link>
    </div>
  );
}

export default AboutInfoPage;