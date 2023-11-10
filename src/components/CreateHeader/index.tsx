import styles from "./style.module.scss";
import { BackIcon } from "../../assets/icons";
import { useAppDispatch, useAppSelector } from "../../hooks/useDispatch";
import { set_StepEvent, selectStep_Event } from "../../store/Event/slice";
import { useNavigate } from "react-router-dom";

interface Props {
  title: string;
}

const CreateHeader = (props: Props) => {
  const { title } = props;
  const dispatch = useAppDispatch();
  const selectStep = useAppSelector(selectStep_Event);
  const navigate = useNavigate();

  const setBack = () => {
    if (selectStep === "1") {
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
        <p>{title}</p>
      </div>
      <div className={styles.bottom}>
        <div className={styles.bottom_wrapper}>
          <div
            className={styles.progress_bar}
            style={{
              width: `${(Number(selectStep) * 12.5)}%`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default CreateHeader;
