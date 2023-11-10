import styles from "./style.module.scss";

interface Props {
  title: string;
  onClick?: any;
  icon?: string;
  disabled?: boolean;
  customClass?:string
}

function Button(props: Props) {
  const {
    title,
    onClick,
    disabled,
    customClass
  } = props;

  return (
    <button
      className={`${styles.button} ${customClass}`}
      onClick={onClick}
      disabled={disabled}
    >
      {title}
    </button>
  );
}

export default Button;
