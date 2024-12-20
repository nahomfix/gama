import { ReactQueryClientProvider } from "@/providers/ReactQueryProvider";
import { Provider as JotaiProvider } from "jotai";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
    variable: "--font-outfit",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Gama",
    description: "Gama is a movie streaming platform.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={outfit.className}>
                <ReactQueryClientProvider>
                    <JotaiProvider>{children}</JotaiProvider>
                </ReactQueryClientProvider>
            </body>
        </html>
    );
}
