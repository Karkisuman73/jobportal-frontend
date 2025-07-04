import React, { useEffect } from 'react';
import { io } from 'socket.io-client';
import { toast } from 'react-toastify';

const socket = io('http://localhost:3001');

const Notification: React.FC = () => {
  useEffect(() => {
    socket.on('connect', () => {
      console.log('Socket connected:', socket.id);
    });

    socket.on('job-posted', (savejob) => {
      console.log(' Job posted received:', savejob);
      toast.success(`New job posted: ${savejob.companyname}`);
    });


    return () => {
      socket.off('connect');
      socket.off('job-posted');
    };
  }, []);

  return;
};

export default Notification;
