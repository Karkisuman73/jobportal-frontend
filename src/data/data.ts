import { IconType } from "react-icons";
import { FaCircleDollarToSlot } from "react-icons/fa6";
import { HiSpeakerphone } from "react-icons/hi";
import { FaComputer } from "react-icons/fa6";
import { GiMaterialsScience } from "react-icons/gi";
import { DiTechcrunch } from "react-icons/di";
import { FcSalesPerformance } from "react-icons/fc";
import { MdFoodBank } from "react-icons/md";
import { GiUnicorn } from "react-icons/gi";
import { CiBank } from "react-icons/ci";
import { GiHamburger } from "react-icons/gi";
interface TypeData {
  Icon: IconType;
  name: string;
  overview?: string;
}
export const data: TypeData[] = [
  {
    name: "Finance & Accounting",
    // overview: "Facilitating and improving the financial practices.",
    Icon: FaCircleDollarToSlot ,
  },
  {
    name: "Sales & Marketing",
    // overview: "Facilitating and improving the marketing practices.",
    Icon: HiSpeakerphone,
  },
  {
    name: "It Service",
    // overview: "Facilitating and improving the it services practices.",
    Icon: FaComputer,
  },
  {
    name: "Education",
    // overview: "Facilitating and improving the science practices.",
    Icon: GiMaterialsScience,
  },
  {
    name: "Customer Service",
    // overview: "Facilitating and improving the tech practices.",
    Icon: DiTechcrunch,
  },
  {
    name: "Skilled Trades & Construction",
    // overview: "Facilitating and improving the gastronomy practices.",
    Icon:MdFoodBank ,
  },
  {
    name: "Project Management",
    // overview: "Facilitating and improving the sales practices.",
    Icon: FcSalesPerformance,
  },
  {
    name: "Human Resources",
    // overview: "Facilitating and improving the sales practices.",
    Icon: FcSalesPerformance,
  },
  {
    name: "Health & Care",
    // overview: "Facilitating and improving the sales practices.",
    Icon: FcSalesPerformance,
  }
];

// Promoted Companies
 export const promoteddata:TypeData[]=[

  {
    Icon:GiUnicorn,
  name:"Unicorn",
},
{
  Icon:CiBank,
  name:"Bank",
},
{
  Icon:GiHamburger,
  name:"McBurger"
},
{
Icon:DiTechcrunch ,
name:"TechFoals"

},




 ]
