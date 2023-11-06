import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const MainLayout = (props: Props) => {
  const { children } = props;
  return <div className="container">{children}</div>;
};

export default MainLayout;