import styles from "./Footer.module.scss"
function Footer() {
    return (
        <footer className={ `${styles.footer} d-flex flex-row align-items-center justify-content-center p-10`}>
            <p>
                Copyright c 2024 Cookchek Snuflruf, Inc.</p>
        </footer>
    )
}

export default Footer;