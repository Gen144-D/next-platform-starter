import '../styles/globals.css';

export const metadata = {
    title: {
        template: '%s | SultiAI',
        default: 'SultiAI — Learn Bisaya through real conversations'
    },
    description: 'Discover your voice in Bisaya. Explore SultiAI, your AI-powered companion for Cebuano, Hiligaynon, and Waray.'
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/images/sulti-icon.png" />
            </head>
            <body>{children}</body>
        </html>
    );
}
