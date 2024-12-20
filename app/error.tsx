"use client";

export default function Error({
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    return (
        <div className="h-screen flex flex-col items-center justify-center gap-4">
            <h2 className="text-2xl font-bold">Something went wrong!</h2>
            <button
                onClick={() => reset()}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
                Try again
            </button>
        </div>
    );
}
