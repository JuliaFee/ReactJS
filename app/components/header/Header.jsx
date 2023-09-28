import Image from "next/image"
import styles from "./header.module.css"
import Link from "next/link"

const Header =() =>{
    return(
        <div className={styles.header}>
        <Link href={"/menu"} className={styles.geral}>Menu</Link>
        <Link href={"/sobre-nos"} className={styles.geral}>Sobre Nós</Link>
        <Image src="/image.png" alt="Azuno" width={90} height={90}/>
        <Link href={"/contato"} className={styles.geral}>Contato</Link>
        <Link href={"/feedback"}className={styles.geral}>feedback</Link>
        </div>
    )
}
export default Header