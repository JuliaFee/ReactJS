import { BsFacebook } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { BsFillTelephoneFill } from 'react-icons/bs'
import styles from './footer.module.css'

const Footer = () => {
    return (
        <>
            <div className={styles.footer}>
                <BsFacebook />
                <BsInstagram />
                <BsGithub />
                <BsFillTelephoneFill />
            </div>
            
            <div className={styles.footer2}>
                <p>©Todos os Direitos Reservados</p>
            </div>
        </>
    )
}
export default Footer