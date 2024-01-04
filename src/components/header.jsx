"use client";
import { UserButton } from '@clerk/nextjs';
import { useAuth } from "@clerk/nextjs";
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
    const pathname = usePathname();
    const { isSignedIn } = useAuth();
    console.log(pathname)
    return (
        <div className='w-full h-16 shadow flex items-center gap-10 px-20 max-sm:px-2 '>
            <span className='font-medium text-xl'>
                <Link href="/">
                    NXT Courses
                </Link>
            </span>

            <nav className='ml-auto'>
                <ul className='flex gap-5 max-sm:gap-2 items-center justify-between'>
                    <li>
                        <Link href="/" className={clsx("after:w-0 after:transition-all after:ease-in", {
                            'relative after:bg-black after:h-[2px] after:!w-full after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:rounded-full': pathname === '/',
                        })}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/courses" className={clsx("after:w-0 after:transition-all after:ease-in", {
                            'relative after:bg-black after:h-[2px] after:!w-full after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:rounded-full': pathname.includes('/courses'),
                        })}>
                            Courses
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" className={clsx("after:w-0 after:transition-all after:ease-in", {
                            'relative after:bg-black after:h-[2px] after:!w-full after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:rounded-full': pathname === '/about',
                        })}>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" className={clsx("after:w-0 after:transition-all after:ease-in", {
                            'relative after:bg-black after:h-[2px] after:!w-full after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:rounded-full': pathname === '/contact',
                        })}>
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>

            <div className='flex'>
                {!isSignedIn && <Link href="/login" className="px-4 py-2 text-white bg-black self-center rounded shadow-lg">Login</Link>}
                {isSignedIn && <UserButton afterSignOutUrl="/login" />}
            </div>
        </div>
    )
}

export default Header;