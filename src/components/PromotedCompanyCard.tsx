import { IconType } from "react-icons";

interface TypeData {
  Icon: IconType;
  name: string;
}
const Card = ({ Icon, name }:TypeData) => {
    return (
     
          <div className="border-2 border-black w-full h-40 rounded-3xl p-4 flex flex-col items-center">
            <div className="text-3xl w-20 h-15 flex items-center justify-center rounded-full mt-2 bg-green-500 border-2">
              <Icon/>
            </div>
            <div className="text-lg font-semibold mt-2">{name}</div>
          </div>
     
    );
  };
  
  export default Card;
  