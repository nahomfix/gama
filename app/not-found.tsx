import Link from "next/link";

export default function NotFound() {
    return (
        <div className="h-screen flex flex-col items-center justify-center gap-4">
            <h2 className="text-2xl font-bold">Page Not Found 🔍</h2>
            <p className="text-lg">
                Seems like you&apos;re lost. Let&apos;s get you back to the
                homepage.
            </p>
            <Link href="/" className="text-blue-500 hover:text-blue-600">
                Return Home
            </Link>
        </div>
    );
}
