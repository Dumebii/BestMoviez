import styles from './styles/buttons.module.css'


function Buttons() {
    return(
        <div className={styles.flex}>
        <div className={styles.flexContainer}>
        <button>◀</button>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>▶</button>
        </div>
        </div>
    )
}

export default Buttons