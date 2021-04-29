import Head from 'next/head'
import styles from '../../styles/Home.module.scss'
import Link from "next/link";

export default function Portfolio() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Portfolio</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1 className="title">
                <Link href="/">
                    <a>Back</a>
                </Link>
            </h1>
            <main className={styles.main}>
                <h1 className={styles.title}>
                    Learn <a href="https://nextjs.org">Next.js!</a>
                </h1>
            </main>

            <footer className={styles.footer}>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{' '}
                    <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
                </a>
            </footer>
        </div>
    )
}
