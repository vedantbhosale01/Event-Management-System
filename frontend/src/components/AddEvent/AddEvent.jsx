import {
  Box,
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
import React, { useContext, useState } from "react";
import "./AddEvent.css";
import PropTypes from "prop-types";
import { FileUploader } from "react-drag-drop-files";
import DropFileInput from "../drop-file-input/DropFileInput";
import axios from "axios";
import {Context} from '../../context/Context'

const AddEvent = () => {
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [topics, setTopics] = useState('')
  // const [file, setFile] = useState(null)
  const {user} = useContext(Context)

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const newPost = {
        title,
        desc, 
        topics,
      };
      axios.post("http://localhost:4000/api/v1/admin/product/add", newPost)
      
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="AddEvent">
      <Box component="form" onSubmit={handleSubmit} noValidate >
      <Grid container>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <Grid item className="GridItems">
            <TextField
              fullWidth
              label="Event Title"
              name="title"
              placeholder="Introduction to AI/ML"
              InputLabelProps={{ shrink: true }}
              variant="filled"
              onChange={e=>setTitle(e.target.value)}
            ></TextField>
          </Grid>
          <Grid item className="GridItems">
            <TextField
              fullWidth
              label="Description"
              name="description"
              placeholder="About the Event-"
              InputLabelProps={{ shrink: true }}
              variant="filled"
              multiline
              rows={3}
              onChange={e=>setDesc(e.target.value)}
            ></TextField>
          </Grid>
          <Grid container direction="row" className="TimePickers">
            <Grid item className="GridItems">
              <TextField
                id="datetime-local"
                label="Starting Time"
                type="datetime-local"
                variant="filled"
                defaultValue="2021-03-19T10:30"
                sx={{ width: 250 }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item className="GridItems">
              <TextField
                id="datetime-local"
                label="Ending Time"
                type="datetime-local"
                variant="filled"
                defaultValue="2021-03-19T10:30"
                sx={{ width: 250 }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <h1>Add Event Poster</h1>
          <DropFileInput multiple={false} name="file"  />
          {/* <p>{file ? `File name: ${file.name}` : "No files uploaded yet"}</p> */}
        </Grid>
        <h1>Add Information about the Event</h1>
        <Grid container>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Grid item className="GridItems">
              <TextField
                fullWidth
                label="Speaker"
                name="speaker"
                placeholder="Mr. Narendra Modi"
                InputLabelProps={{ shrink: true }}
                variant="filled"
                
              ></TextField>
            </Grid>
            <Grid item className="GridItems">
              <TextField
                fullWidth
                label="Purpose of the Event"
                placeholder="To introduce students to the concepts of AI/ML"
                InputLabelProps={{ shrink: true }}
                variant="filled"
                multiline
                rows={3}
                name="purpose"
                sonChange={e=>setTopics(e.target.value)}
              ></TextField>
            </Grid>
            <Grid item className="GridItems">
              <TextField
                fullWidth
                label="Topics to be covered"
                placeholder="Introduction to AI and ML and their modern use cases-"
                InputLabelProps={{ shrink: true }}
                variant="filled"
                multiline
                rows={3}
                name="topics"
                
              ></TextField>
            </Grid>
          </Grid>
        </Grid>

        <h1>Add Final Information about the Event</h1>
        <Grid container>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Grid item className="GridItems">
              <TextField
                fullWidth
                label="Organized by"
                placeholder="Terna Engineering College, Computer Department"
                InputLabelProps={{ shrink: true }}
                variant="filled"
                name="organizers"
                
              ></TextField>
            </Grid>
            <Grid item className="GridItems">
              <TextField
                fullWidth
                label="Additional Information"
                placeholder="Certificates will be provided to the attendees"
                InputLabelProps={{ shrink: true }}
                variant="filled"
                multiline
                rows={3}
              ></TextField>
            </Grid>
          </Grid>

          <Grid
            container
            lg={12}
            md={12}
            sm={12}
            xs={12}
            direction="row"
            className="Buttons"
          >
            <Grid item className="Grid Items" lg={12} md={12} sm={12} xs={12}>
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">
                  Who Can Attend
                </FormLabel>

                <FormControlLabel
                  value="faculty"
                  control={<Checkbox />}
                  label="Terna Faculty"
                />
                <FormControlLabel
                  value="students"
                  control={<Checkbox />}
                  label="Terna Students"
                />
                <FormControlLabel
                  value="others"
                  control={<Checkbox />}
                  label="Others"
                />
              </FormControl>
            </Grid>
            <Grid item lg={4} md={6} sm={8} xs={12}>
              <Button variant="contained" type="submit" >Submit</Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      </Box>
    </div>
  );
};

export default AddEvent;
