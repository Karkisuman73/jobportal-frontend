import InboxComponent from "@/RecruterComponents/InboxButtonComponent";
import useFetchJobs from "../../utils/useFetchJobs";

interface form {
  username: string;
  email: string;
  number: string;
  link: string;
  formText: string;
  eligible: string;
  office: string;
  _id:string
}

const Inbox = () => {
  const { data } = useFetchJobs<form[]>("/userFormData");
    const {data:companyname}=useFetchJobs("/joblist")
  console.log(data);
  console.log("form", data);
  return (
    <div className="ml-48 lg:ml-64 ">
      <div className="bg-gray-900 h-20 flex items-center justify-between px-10 shadow-md">
        <p className="text-2xl lg:text-3xl text-white font-semibold">
          Inbox
        </p>
      </div>
      <div className="mt-2 flex px-4 gap-3">
        {data?.map((result, i) => (
          <>
          
            <div
              className=" bg-white shadow-md rounded-2xl p-6 border hover:shadow-lg transition-shadow w-100"
              key={i}
            >
               {/* <div>
                {companyname?.map((name,k)=>(
              <div className="text-2xl font-medium underline" key={k}> Position: {name.position}</div>
               ))}
              </div> */}
             <p> {result.username}</p>
             <p> {result.number}</p>
              <p className="mb-2">{result.email}</p>
              <  InboxComponent id={result._id}/>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Inbox;
