import { IconType } from "react-icons";
import { useNavigate } from "react-router-dom";

interface TypeData {
  Icon: IconType;
  name: string;
  overview: string;
}

const Card = ({ Icon, name }: TypeData) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/category/${name}`);
  };
  return (
    <button onClick={handleClick}>
      <div className="border lg:w-75 lg:h-20 rounded-2xl p-4 flex flex-col justify-between ">
        <div className="flex ">
          <div className="text-3xl w-10 h-10 flex items-center justify-center rounded-full bg-green-500 border-2">
            <Icon />
          </div>
          <div className=" font-semibold">{name}</div>
        </div>
        {/* <div className="text-sm text-gray-600">{overview}</div> */}
      </div>
    </button>
  );
};

export default Card;
