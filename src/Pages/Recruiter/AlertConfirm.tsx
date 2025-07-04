import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

interface AlertDialogBoxProps {
  id: string;

}

export function AlertDialogBox({ id }: AlertDialogBoxProps) {
    const navigate=useNavigate()
  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:3001/delete/${id}`);
      toast.success ("Job deleted successfully");
      setTimeout(()=>{
    window.location.reload()
    navigate("/joblist")
    },1000)
    } catch (error) {
      console.log("Error deleting job:", error);
      toast.error("Delete failed");
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive">Delete</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete this job posting.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleDelete}>
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
