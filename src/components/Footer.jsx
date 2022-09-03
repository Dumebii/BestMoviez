import NavBrand from "./NavBrand"
import styles from './styles/footer.module.css'

function Footer() {
   return(
    <div>
       <NavBrand className={styles.navbrand} />
       <div className={styles.anchors}>
        <a className={styles.anchor} href='#'>Connect</a>
        <a className={styles.anchor} href='#'>Feedback</a> 
        <a className={styles.anchor} href='#'>More Movies</a> 
        <a className={styles.anchor} href='#'>Support us</a> 
       </div>
       
       <div className={styles.secondAnchors}>
       <a className={styles.anchor2} href='#'><i class="fa-brands fa-twitter"></i></a> 
       <a className={styles.anchor2} href='#'><i class="fa-brands fa-facebook"></i></a>
       <a className={styles.anchor2} href='#'><i class="fa-brands fa-instagram"></i></a>  
       </div>
    </div>

   )
}

export default Footer