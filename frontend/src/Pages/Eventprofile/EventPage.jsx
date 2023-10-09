import React, { useState, useEffect } from "react";
import ResponsiveDrawer from "../../components/SideBar/SideBar";
import DropFileInput from "../../components/drop-file-input/DropFileInput";
import {
  Button,
  Checkbox,
  Dialog,
  DialogTitle,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  TextField,
} from "@mui/material";
import "./eventpage.css";
import AddEvent from "../../components/AddEvent/AddEvent";
import { useParams } from "react-router";
import axios from "axios";


const EventPage = () => {
  const [About, setAbout] = useState(true);
  
  const [Admin, setAdmin] = useState(false);

  const [event, setEvent] = useState({})
  const userId = useParams().id;

  useEffect(() => {
    const fetchPost = async () => {
      const res = await axios.get(`/products/${userId}`);
      setEvent(res.data)
    };
    fetchPost();
  }, [userId]);

    function AboutPage() {
      return (
        <>
          <Grid container>
            <Grid item sm={12} lg={9} className='pr-20'>
  
              <div>
                <p className="text-lg text-bold pt-6">Description:</p>
                <p className="text-md">{event.description}</p>
              </div>
  
              <div>
                <p className="text-lg text-bold pt-6">Purpose of the Event:</p>
                <p className="text-md">{event.purpose}</p>
              </div>
  
              <div>
                <p className="text-lg text-bold pt-6">Topics:</p>
                <p className="text-md">{event.topics}</p>
              </div>
  
              <div>
                <p className="text-lg text-bold pt-6">Who Can Attend:</p>
                <p className="text-md">{event.attendees}</p>
              </div>
  
            </Grid>
            <Grid item sm={12} lg={3} className='sm:pt-6 lg:pt-0 pr-20'>
              <p className="text-lg text-bold pt-6">Speaker:{event.speaker}</p>
              <p className="text-lg text-bold pt-6">Organizers:{event.organizers}</p>
              <p className="text-lg text-bold pt-6">Mode: online</p>
              </Grid>
          </Grid>
        </>
      );
    }

  
  
  function AdminPage() {
    /*
          // You will have to fetch the current data for this page. 

      */

    const fileTypes = ["JPG", "PNG", "GIF", "PDF"];
    const [file, setFile] = useState(null);
    const handleChange = (file) => {
      setFile(file);
    };
    return (
      <>
        <div className="text-2xl pl-16">Edit Information About the Event</div>

        <div className="AddEvent">
          <AddEvent />
        </div>
      </>
    );
  }
  return (
    <Grid container>
      <Grid item lg={12} md={12} sm={12} xs={12}>
        <ResponsiveDrawer></ResponsiveDrawer>
      </Grid>
      <Grid item lg={12} style={{ height: "100vmax" }}>
        <div className="xs:ml-0 sm:ml-72 mx-5">
          <div className="container mt-10 p-5 justify-between mx-auto flex flex-wrap flex-col md:flex-row md:justify-around bg-blue-600 rounded-lg ">
            <div class="align-middle p-3 text-center">
              <p className="text-2xl text-white pb-4">{event.title}</p>
              <p className="text-xl text-white">Organized By: CSI Terna</p>
              <p className="text-xl text-white">{event.startDate}</p>
            </div>
            
          </div>
        </div>

        <div className="grid grid-cols-12 gap-5 py-5 xs:ml-0 sm:ml-72">
          <div className="lg:col-start-1 align-middle lg:col-end- col-start-1 col-end-13">
            <div class="tabs rounded-lg tabs-boxed h-7 bg-slate-200">
              <a
                className={`${
                  About
                    ? " underline tab mx-5 text-black"
                    : "tab mx-5 text-black"
                }`}
                onClick={() => {
                  setAbout(true);
                   
                  setAdmin(false);
                }}
              >
                About
              </a>
               
               
              <a
                className={`${
                  Admin
                    ? "underline tab mx-5 text-black"
                    : "tab mx-5 text-black"
                }`}
                onClick={() => {
                  setAbout(false);
                 
                  setAdmin(true);
                }}
              >
                Admin
              </a>
            </div>
            <div className="m-10">
              {About === true && <AboutPage></AboutPage>}
               
              {Admin === true && <AdminPage></AdminPage>}
            </div>
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default EventPage;
