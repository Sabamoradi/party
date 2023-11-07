import CreateHeader from './container/CreateHeader';
import FirstStep from './container/FirstStep';
import Occasion from './container/Occasion';
import styles from './style.module.scss';
import { occasion } from '../../configs/occasion';
import { guestList } from '../../configs/guestList';
import { localTexts } from '../../locals/text';

const CreateEvent = () =>{
  return(
    <div className={styles.create_container}>
      <CreateHeader/>
      {/* <FirstStep listData={occasion} pageTitle={localTexts.occasion}/> */}
      <FirstStep listData={guestList} pageTitle={localTexts.guestList}/>
    </div>
  )
}

export default CreateEvent
