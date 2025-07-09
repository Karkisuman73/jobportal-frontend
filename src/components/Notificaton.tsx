import React, { useEffect } from "react";
import { io } from "socket.io-client";
import { toast } from "react-toastify";

// Create socket outside component to avoid multiple connections
const socket = io("http://localhost:3001");

interface Job {
  companyname: string;
  // add other fields if needed
}

const Notification: React.FC = () => {
  useEffect(() => {
    socket.on("connect", () => {
      console.log("Socket connected:", socket.id);
    });

    socket.on("job-posted", (savejob: Job) => {
      console.log("Job posted received:", savejob);
      toast.success(`New job posted: ${savejob.companyname}`);
    });

    return () => {
      socket.off("connect");
      socket.off("job-posted");
    };
  }, []);

  // Return null to render nothing
  return null;
};

export default Notification;
