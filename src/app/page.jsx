import Link from 'next/link';

export default function Home() {
    return (
        <div className="flex justify-center flex-col gap-y-7 mt-40 w-full">
            <h1 className="font-light text-4xl max-sm:text-2xl text-center">Welcome to NXT Course</h1>
            <Link href="/courses" className="px-5 py-3 text-white bg-black self-center rounded shadow-lg">Get Started</Link>
        </div>
    )
}
