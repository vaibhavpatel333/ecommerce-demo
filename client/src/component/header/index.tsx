import { useRouter } from "next/router";
import styles from "./index.module.css";

const Header = () => {
    const router = useRouter();
    return (
        <>
            <header id={styles.header}>
                <div className={styles.container}>
                    <div className={styles.title}>
                        <img src="https://d2g9wbak88g7ch.cloudfront.net/staticimages/logo-new.png" id="ctl00_imglogo" alt="Bookswagon-24x7 online bookstore" className={styles.logonew} />
                    </div>
                    <ul id={styles.ul}>
                        <li id={styles.li}>
                            <button className={styles.button} onClick={() => {
                                router.push('/customer/login')
                            }}>
                                Login
                            </button>
                        </li>
                    </ul>
                </div>
            </header>
        </>
    )
}

export default Header;
