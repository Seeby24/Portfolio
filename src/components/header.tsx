import Link from 'next/link';

export default function Header(){
    return(
        <header>
            <div>
                <Link href="/"> Home </Link>
                <Link href="/aboutme">Über mich</Link>
                <Link href="/projects">Projekte</Link>
                <Link href="/contact">Contact</Link>
            </div>
        </header>
    )
}
