import Head from 'next/head'
import Link from 'next/link'
import { HButton } from '../components/Accessories/button'
import { ImArrowUpRight2 } from 'react-icons/im'

const ErrorPage = () => {
    return (
        <div id="notfound">
            <Head>
                <link 
                    href="https://fonts.googleapis.com/css?family=Josefin+Sans:400,700&display=swap" 
                    rel="stylesheet" 
                />
            </Head>
            <div className="notfound">
                <div className="notfound-404">
                    <h1>4<span>0</span>4</h1>
                </div>
                <p className="txt">
                    The page you are looking for might have been removed or is temporarily unavailable.
                </p>
                <Link href="/" passHref>
                    <HButton name="Home Page" icon={<ImArrowUpRight2 />} />
                </Link>
            </div>
        </div>
    )
}

export default ErrorPage
