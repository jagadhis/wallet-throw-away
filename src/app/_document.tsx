import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link rel="manifest" href="../app/manifest.json" />
                <link rel="icon" href="../assets/digital-wallet-icon.jpeg" />
                <meta name="theme-color" content="#000000" />
                <link rel="apple-touch-icon" href="../assets/digital-wallet-icon.jpeg" />
            </Head>
            <body>
            <Main />
            <NextScript />
            <script async src="../app/service-worker.js"></script>
            </body>
        </Html>
    );
}