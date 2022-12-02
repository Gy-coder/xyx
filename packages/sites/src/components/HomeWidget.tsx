import { FC } from "react";

type Props = {
  title: string;
  subtitle: string;
  imgSrc: string;
};

const HomeWidget: FC<Props> = (props) => {
  const { imgSrc, title, subtitle } = props;
  return (
    <div className="p-16 flex flex-col justify-center items-center">
      <img className="h-20" src={imgSrc} />
      <span className="py-2">{title}</span>
      <span className="text-gray-700 text-xs py-1">{subtitle}</span>
    </div>
  );
};

export default HomeWidget;
