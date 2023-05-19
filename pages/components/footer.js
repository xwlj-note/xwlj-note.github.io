import Link from "next/link";
const Footer = () =>(
    <div>
        <footer>
            <Link href="/" >
                <a  style={{textDecoration: 'none'}} target="_blank"
                   rel="noopener noreferrer">
                    Powered by xwlj.eu.org
                </a>
            </Link>
        </footer>
    </div>
)
export default Footer;
