import CreateHeader from './container/CreateHeader';
import Occasion from './container/Occasion';
import styles from './style.module.scss';

const CreateEvent = () =>{
  return(
    <div className={styles.create_container}>
      <CreateHeader/>
      <Occasion/>
    </div>
  )
}

export default CreateEvent
