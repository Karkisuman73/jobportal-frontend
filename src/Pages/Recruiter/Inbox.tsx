import InboxComponent from "@/RecruterComponents/InboxButtonComponent";
import useFetchJobs from "../../utils/useFetchJobs";

interface Form {
  username: string;
  email: string;
  number: string;
  link: string;
  formText: string;
  eligible: string;
  office: string;
  _id: string;
}

const Inbox = () => {
  const { data } = useFetchJobs<Form[]>("/userFormData");

  console.log("form", data);

  return (
    <div className="ml-48 lg:ml-64">
      <div className="bg-gray-900 h-20 flex items-center justify-between px-10 shadow-md">
        <p className="text-2xl lg:text-3xl text-white font-semibold">Inbox</p>
      </div>

      <div className="mt-2 flex px-4 gap-3 flex-wrap">
        {data?.map((result, i) => (
          <div
            className="bg-white shadow-md rounded-2xl p-6 border hover:shadow-lg transition-shadow w-100"
            key={i}
          >
            <p className="font-medium text-lg">{result.username}</p>
            <p className="text-gray-600">{result.number}</p>
            <p className="mb-2 text-gray-600">{result.email}</p>
            <InboxComponent id={result._id} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Inbox;
