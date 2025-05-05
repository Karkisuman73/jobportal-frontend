import { useParams } from "react-router-dom";
import { data1 } from "../data/data1";

const Apply = () => {
  const { id } = useParams();
  const job = data1.find((job) => job.id == id);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Successfully submitted!");
  };

  if (!job) {
    return (
      <div className="p-6 text-center text-red-500 text-xl">
        Job not found.
      </div>
    );
  }

  return (
    <div className="p-6 md:px-20">
      <h1 className="text-2xl font-semibold text-emerald-700 mb-2">{job.position}</h1>
      <h2 className="text-lg text-gray-700 mb-4">{job.companyname}</h2>

      <hr className="border-2 border-gray-300 opacity-50 my-6" />

      <form onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row gap-10">
          {/* Left Form */}
          <div className="flex flex-col gap-4 w-full md:w-1/2">
            <h3 className="text-lg font-semibold">Application Form</h3>

            <div>
              <label htmlFor="name" className="block font-medium">
                * Name and surname
              </label>
              <input
                className="w-full h-10 rounded-full border border-gray-400 px-4"
                type="text"
                placeholder="Enter fullname"
                id="name"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block font-medium">
                * Email
              </label>
              <input
                className="w-full h-10 rounded-full border border-gray-400 px-4"
                type="email"
                placeholder="Enter email"
                id="email"
                required
              />
            </div>

            <div>
              <label htmlFor="number" className="block font-medium">
                * Phone Number
              </label>
              <input
                className="w-full h-10 rounded-full border border-gray-400 px-4"
                type="tel"
                placeholder="Enter phone number"
                id="number"
                required
              />
            </div>

            <div>
              <label htmlFor="profile" className="block font-medium">
                LinkedIn Profile
              </label>
              <input
                className="w-full h-10 rounded-full border border-gray-400 px-4"
                type="url"
                placeholder="Paste link"
                id="profile"
              />
            </div>

            <div>
              <label htmlFor="cv" className="block font-medium">
                Attachment (CV, Cover letter, etc.)
              </label>
              <input
                className="w-full border border-gray-400 rounded-xl px-4 py-2"
                type="file"
                id="cv"
              />
            </div>
          </div>

          {/* Right Form */}
          <div className="flex flex-col gap-4 w-full md:w-1/2 mt-6 md:mt-10">
            <div>
              <label htmlFor="reason" className="block font-medium">
                * Why are you a perfect fit for this role?
              </label>
              <textarea
                className="w-full h-40 rounded-xl border border-gray-400 px-4 py-2 resize-none"
                id="reason"
                required
              ></textarea>
            </div>

            <div>
              <label className="block font-medium">
                * Are you eligible to apply?
              </label>
              <div className="flex gap-4 mt-1">
                <label className="flex items-center gap-1">
                  <input type="radio" name="eligible" value="Yes" required /> Yes
                </label>
                <label className="flex items-center gap-1">
                  <input type="radio" name="eligible" value="No" /> No
                </label>
              </div>
            </div>

            <div>
              <label className="block font-medium">
                * Can you commute to office 2 days a week?
              </label>
              <div className="flex gap-4 mt-1">
                <label className="flex items-center gap-1">
                  <input type="radio" name="commute" value="Yes" required /> Yes
                </label>
                <label className="flex items-center gap-1">
                  <input type="radio" name="commute" value="No" /> No
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <button
            type="submit"
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-full transition"
          >
            Submit Application
          </button>
        </div>
      </form>
    </div>
  );
};

export default Apply;
