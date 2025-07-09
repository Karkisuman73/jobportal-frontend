import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import useFetchJobs from "@/utils/useFetchJobs";
import PDFViewer from "./PdfViewer";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

interface Form {
  _id: string;
  username: string;
  email: string;
  number: string;
  link: string;
  formText: string;
  eligible: string;
  office: string;
  cv: string;
  jobid: string; 
}

interface Props {
  id: string;
}

function InboxComponent({ id }: Props) {
  const { data } = useFetchJobs<Form[]>("/userFormData");
  const job = data?.find((job) => job._id === id);
  const jobId = job?.jobid;
  console.log("Job ID:", jobId);

  const [showPdf, setShowPdf] = useState(false);

  const openPdf = () => setShowPdf(true);
  const closePdf = () => setShowPdf(false);

  const handleClick = async (status: string) => {
    try {
      if (!job?.email) {
        alert("User email not found");
        return;
      }

      const response = await axios.post(`http://localhost:3001/notification/${job.email}`, {
        status,
        Jobid: jobId,
      });
      toast.success(response.data.message);

      if (status === "rejected") {
        await axios.delete(`http://localhost:3001/deleteinbox/${id}`);
        toast.success("Deleted from inbox");
        setTimeout(() => window.location.reload(), 2000);
      }
    } catch (e) {
      toast.error("An error occurred while sending the notification");
      console.error(e);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">View</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[800px]">
        <DialogHeader>
          <DialogTitle>Applicant Details</DialogTitle>
        </DialogHeader>

        {job ? (
          <div className="grid gap-5 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label className="text-right">Name:</Label>
              <p className="col-span-3">{job.username}</p>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label className="text-right">Email:</Label>
              <p className="col-span-3">{job.email}</p>
            </div>
            <div className="grid grid-cols-4 items-start gap-4">
              <Label className="text-right mt-1">Contact Number:</Label>
              <p className="col-span-3">{job.number}</p>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label className="text-right">LinkedIn Profile:</Label>
              <p className="col-span-3 break-all">{job.link}</p>
            </div>
            <div className="grid grid-cols-4 items-start gap-4">
              <Label className="text-right mt-1">Perfect for this role:</Label>
              <p className="col-span-3">{job.formText}</p>
            </div>
            <div className="grid grid-cols-4 items-start gap-4">
              <Label className="text-right mt-1">Eligibility:</Label>
              <p className="col-span-3">{job.eligible}</p>
            </div>
            <div className="grid grid-cols-4 items-start gap-4">
              <Label className="text-right mt-1">Commute Office:</Label>
              <p className="col-span-3">{job.office}</p>
            </div>
            <div className="grid grid-cols-4 items-start gap-4">
              <Label className="text-right mt-1">CV:</Label>
              <p
                className="col-span-3 text-blue-600 cursor-pointer hover:underline"
                onClick={openPdf}
              >
                View CV
              </p>
            </div>
            <div className="flex justify-end gap-3">
              <Button
                onClick={() => handleClick("accepted")}
                className="border-2 border-black"
                variant="outline"
              >
                Accept
              </Button>
              <Button
                onClick={() => handleClick("rejected")}
                className="border-2 border-black"
                variant="outline"
              >
                Reject
              </Button>
            </div>
            {showPdf && <PDFViewer cv={job.cv} onClose={closePdf} />}
          </div>
        ) : (
          <p className="text-red-500">Applicant data not found.</p>
        )}
      </DialogContent>
    </Dialog>
  );
}

export default InboxComponent;
