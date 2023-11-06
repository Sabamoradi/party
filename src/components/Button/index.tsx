import styles from "./style.module.scss";

interface Props {
  title: string;
  onClick?: any;
  icon?: string;
  disabled?: boolean;
}

function Button(props: Props) {
  const {
    title,
    onClick,
    disabled,
  } = props;

  return (
    <button
      className={styles.button}
      onClick={onClick}
      disabled={disabled}
    >
      {title}
    </button>
  );
}

export default Button;
