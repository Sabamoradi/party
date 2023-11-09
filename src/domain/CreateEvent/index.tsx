import CreateHeader from "./container/CreateHeader";
import FirstSteps from "./container/FirstSteps";
import styles from "./style.module.scss";
import { occasion } from "../../configs/occasion";
import { guestList } from "../../configs/guestList";
import {
  eInvite,
  arrangment,
  drinks,
  decorator,
  games,
} from "../../configs/thirds";
import { localTexts } from "../../locals/text";
import ThirdSteps from "./container/ThirdSteps";
import SecondSteps from "./container/SecondSteps";
import { selectStep_Event } from "../../store/Event/slice";
import { useAppSelector } from "../../hooks/useDispatch";

const CreateEvent = () => {
  const select_step = useAppSelector(selectStep_Event);

  
  const renderContainer = () => {
    switch (select_step) {
      case "0":
        return (
          <FirstSteps listData={occasion} pageTitle={localTexts.occasion} />
        );
      case "1":
        console.log("omad");

        return (
          <FirstSteps listData={guestList} pageTitle={localTexts.guestList} />
        );
      case "2":
        return <SecondSteps />;
      case "3":
        return (
          <ThirdSteps
            title={eInvite.title}
            img={eInvite.img}
            items={eInvite.items}
          />
        );
      case "4":
        return (
          <ThirdSteps
            title={arrangment.title}
            img={arrangment.img}
            items={arrangment.items}
          />
        );
      case "5":
        return (
          <ThirdSteps
            title={drinks.title}
            img={drinks.img}
            items={drinks.items}
          />
        );
      case "6":
        return (
          <ThirdSteps
            title={decorator.title}
            img={decorator.img}
            items={decorator.items}
          />
        );
      case "7":
        return (
          <ThirdSteps title={games.title} img={games.img} items={games.items} />
        );
    }
  };
  return (
    <div className={styles.create_container}>
      <CreateHeader />
      {renderContainer()}
    </div>
  );
};

export default CreateEvent;
