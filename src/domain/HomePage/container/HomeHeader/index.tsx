import styles from './style.module.scss';
import { Profile } from '../../../../assets/icons';

const HomeHeader = () =>{
  return(
    <div className={styles.home_header_container}>
        <div className={styles.header_left}>
          <p>

          Hi,Saba
          </p>
        </div>
        <div className={styles.header_right}>
          <div className={styles.img_wrapper}>
              <Profile />
          </div>
        </div>
    </div>
  )
}

export default HomeHeader
