import { IconType } from "react-icons";

interface TypeData {
  Icon: IconType;
  name: string;
  overview?: string;
}
const Card = ({ Icon, name, overview }:TypeData) => {
    return (
      <div className="border-2 border-black w-full h-40 rounded-3xl p-4 flex flex-col justify-between ">
        <div className="text-3xl w-14 h-14 flex items-center justify-center rounded-full bg-green-500 border-2">
          <Icon/>
        </div>
        <div className="text-lg font-semibold">{name}</div>
        <div className="text-sm text-gray-600">{overview}</div>
      </div>
    );
  };
  
  export default Card;
  