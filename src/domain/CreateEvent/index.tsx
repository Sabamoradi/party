import CreateHeader from "./container/CreateHeader";
import FirstSteps from "./container/FirstSteps";
import styles from "./style.module.scss";
import { occasion } from "../../configs/occasion";
import { guestList } from "../../configs/guestList";
import { eInvite } from "../../configs/thirds";
import { localTexts } from "../../locals/text";
import ThirdSteps from "./container/ThirdSteps";

const CreateEvent = () => {
  return (
    <div className={styles.create_container}>
      <CreateHeader />
      {/* <FirstSteps listData={occasion} pageTitle={localTexts.occasion} /> */}
      <FirstSteps listData={guestList} pageTitle={localTexts.guestList} />
      {/* <ThirdSteps
        title={eInvite.title}
        img={eInvite.img}
        items={eInvite.items}
      /> */}
    </div>
  );
};

export default CreateEvent;
