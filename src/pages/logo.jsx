import styles from '../styles/logo.module.css'

export default function Logo(){
    return (
	    <a className={styles.logo} target="_blank" href="http:www.planosassessoria.com.br/site/">
            <img src="logo.png" alt=""/>
        </a>
    )
}