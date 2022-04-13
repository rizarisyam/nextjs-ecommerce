import styles from '../../styles/LoadingSpinner.module.css'

import Overlay from '../UI/Header/Overlay'

const LoadingSpinner = () => {
    return (
        <Overlay >
            <div className={styles.spinner}>
                <div className={styles.rect1}></div>
                <div className={styles.rect2}></div>
                <div className={styles.rect3}></div>
                <div className={styles.rect4}></div>
                <div className={styles.rect5}></div>
            </div>
        </Overlay>
    )
}

export default LoadingSpinner