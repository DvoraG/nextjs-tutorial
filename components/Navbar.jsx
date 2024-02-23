import Link from "next/link";
import styles from '../styles/Navbar.module.css';

const links = [
    {id: 1, href: '/client', label: 'client'},
    {id: 2, href: '/drinks', label: 'drinks'},
    {id: 3, href: '/prisma-example', label: 'prisma'},
    {id: 4, href: '/tasks', label: 'tasks'},
];

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
        <div className={styles.menu}>
            <Link href='/' className='btn btn-primary link'>NextJS</Link>
            <ul className={styles.items}>
                {
                    links.map((link) => {
                        return (
                            <li key={link.id}>
                                <Link href={link.href} className={styles.item}>{link.label}</Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    </nav>
  )
}

export default Navbar