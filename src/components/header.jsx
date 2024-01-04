import { UserButton } from '@clerk/nextjs';
import { auth } from "@clerk/nextjs";
import Link from 'next/link';

const Header = () => {
    const { userId } = auth();

    return (
        <div className='w-full h-16 shadow flex items-center gap-10 px-20 max-sm:px-2 '>
            <span className='font-medium text-xl'>
                <Link href="/">
                    NXT Courses
                </Link>
            </span>

            <nav className='ml-auto'>
                <ul className='flex gap-5 max-sm:gap-2 items-center justify-between'>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/courses">Courses</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>
            </nav>

            <div className='flex'>
                {!userId && <Link href="/login" className="px-4 py-2 text-white bg-black self-center rounded shadow-lg">Login</Link>}
                {userId && <UserButton afterSignOutUrl="/login" />}
            </div>
        </div>
    )
}

export default Header;