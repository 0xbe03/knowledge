import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
    return ( 
        <div>
            <nav>
                <div className="logo">
                    <Image src="/Personal.png" width={77} height={77} />
                </div>
                <Link href="/"><a>Home</a></Link>
                <Link href="/about"><a>About</a></Link>
                <Link href="/lists"><a>Lists</a></Link>
            </nav>
        </div>
     );
}
 
export default Navbar;
