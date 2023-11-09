import styles from "./style.module.scss";
import { BackIcon } from "../../../../assets/icons";
import { useAppDispatch, useAppSelector } from "../../../../hooks/useDispatch";
import { set_StepEvent, selectStep_Event } from "../../../../store/Event/slice";
import { useNavigate } from "react-router-dom";

const CreateHeader = () => {
  const dispatch = useAppDispatch();
  const selectStep = useAppSelector(selectStep_Event);
  const navigate = useNavigate();

  const setBack = () => {
    if (selectStep === "0") {
      navigate("/");
    } else {
      dispatch(set_StepEvent((Number(selectStep) - 1).toString()));
    }
  };
  return (
    <div className={styles.header_container}>
      <div className={styles.top}>
        <i onClick={() => setBack()}>
          <BackIcon />
        </i>
        <p>Create a New Event</p>
      </div>
    </div>
  );
};

export default CreateHeader;
