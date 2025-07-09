import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import useFetchJobs from "@/utils/useFetchJobs";
import axios from "axios";
import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

interface JobData {
  companyname: string;
  position: string;
  level: string;
  type: string;
  time: string;
  view: string;
  aboutCompany: string;
  responsibilities: string;
  requiredSkills: string;
  roleDescription: string;
  category: string;
  _id?: string;
}

function Buttoncomponent({ id }: { id: string }) {
  const navigate = useNavigate();
  const { data } = useFetchJobs<JobData[]>("/joblist");

  const [save, setSave] = useState<JobData>({
    companyname: "",
    position: "",
    level: "",
    type: "",
    time: "",
    view: "",
    aboutCompany: "",
    responsibilities: "",
    requiredSkills: "",
    roleDescription: "",
    category: "",
  });

  useEffect(() => {
    if (data && id) {
      const selectedJob = data.find((job) => job._id === id);
      if (selectedJob) {
        setSave(selectedJob);
      }
    }
  }, [data, id]);

  const handleInfo = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setSave({ ...save, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`http://localhost:3001/jobedit/${id}`, save);
      toast.success("Job updated successfully");
      navigate("/joblist");
    } catch (error) {
      console.error("Error updating job:", error);
      toast.error("Failed to update job");
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Edit Job</DialogTitle>
          <DialogDescription>Update the job details and click save.</DialogDescription>
          <form className="grid gap-4 py-4" onSubmit={(e) => e.preventDefault()}>
            {[
              { name: "position", label: "Position" },
              { name: "companyname", label: "Company Name" },
              { name: "level", label: "Level (Senior, Mid, Junior)" },
              { name: "type", label: "Type (Onsite, Remote)" },
              { name: "time", label: "Time (Part-time, Full-time)" },
              { name: "category", label: "Category", type: "select" },
            ].map((field) => (
              <div key={field.name} className="grid gap-2">
                <Label htmlFor={field.name}>{field.label}</Label>
                {field.name === "category" ? (
                  <select
                    id={field.name}
                    name={field.name}
                    value={save.category}
                    onChange={handleInfo}
                    required
                    className="border border-gray-300 rounded-md p-2"
                  >
                    <option value="">Select..</option>
                    <option value="finance">Finance</option>
                    <option value="education">Education</option>
                    <option value="sales-marketing">Sales & Marketing</option>
                    <option value="it-service">It Service</option>
                    <option value="health-care">Health & Care</option>
                    <option value="skilled-trades-construction">Skilled Trades & Construction</option>
                    <option value="customer-service">Customer Service</option>
                    <option value="human-resources">Human Resources</option>
                    <option value="project-management">Project Management</option>
                  </select>
                ) : (
                  <Input
                    id={field.name}
                    name={field.name}
                    value={save[field.name as keyof JobData] || ""}
                    onChange={handleInfo}
                    required
                  />
                )}
              </div>
            ))}

            {[
              { name: "view", label: "Overview", rows: 3 },
              { name: "aboutCompany", label: "About Company", rows: 3 },
              { name: "responsibilities", label: "Responsibilities", rows: 4 },
              { name: "requiredSkills", label: "Required Skills", rows: 3 },
              { name: "roleDescription", label: "Role Description", rows: 3 },
            ].map((field) => (
              <div key={field.name} className="grid gap-2">
                <Label htmlFor={field.name}>{field.label}</Label>
                <Textarea
                  id={field.name}
                  name={field.name}
                  rows={field.rows}
                  value={save[field.name as keyof JobData] || ""}
                  onChange={handleInfo}
                  required
                />
              </div>
            ))}
          </form>
        </DialogHeader>

        <DialogFooter>
          <Button type="button" onClick={handleUpdate}>
            Save Changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default Buttoncomponent;
