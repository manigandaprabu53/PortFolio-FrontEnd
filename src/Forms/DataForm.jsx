import React from 'react'
import { TextField, Button, Box, Typography } from "@mui/material";
import Textarea from '@mui/joy/Textarea';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useState } from "react";
import axios from 'axios';
import './DataForm.css'

function DataForm() {

    const [value, setValue] = React.useState('1');
    const [file, setFile] = useState(null);
    const [imgName, setimgName] = useState("");
    const [skill, setSkill] = useState([]);
    const [skillIcon, setSkillIcon] = useState([]);
    const [resume, setResume] = useState(null);
    const [pdf, setPdf] = useState("");
    const [thumbnail, setThumbnail] = useState("");

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        aboutMe: "",
        image: "",
        resume: "",
        stack: ""
    });

    const [project, setProject] = useState({
      title: "",
      description: "",
      github: "",
      livePage: "",
      thumbnail: ""
    })

    const [expierence, setExpierence] = useState({title: "", description: ""});

    // const [socialLinks, setSocialLinks] = useState({
    //   github: "",
    //   linkedin: ""
    // })

    const [errors, setErrors] = useState({
      Name: "",
      stack: "",
      email: "",
      title: "",
      description: ""
    });

      const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        let ext = ["png", "jpg", "jpeg", "svg"];
        console.log(ext.includes(selectedFile.name.split(".")[selectedFile.name.split(".").length-1]));
        
        if (selectedFile && ext.includes(selectedFile.name.split(".")[selectedFile.name.split(".").length-1])) {
          setimgName(selectedFile.name)
          let reader = new FileReader();
          reader.readAsDataURL(selectedFile);
          reader.onload = () =>{
          setFile(reader.result)
          setFormData({...formData, image: reader.result})
          }
        }
      };

      const handleThumbnail = (e)=>{
        const selectedFile = e.target.files[0];
        let ext = ["png", "jpg", "jpeg", "svg"];
        if (selectedFile && ext.includes(selectedFile.name.split(".")[selectedFile.name.split(".").length-1])) {
          setThumbnail(selectedFile.name)
          let reader = new FileReader();
          reader.readAsDataURL(selectedFile);
          reader.onload = () =>{
          setThumbnail(reader.result)
          setProject({...project, thumbnail: reader.result})
          }
          console.log(thumbnail)
        }
      }

      const handlePdf = (event) => {
            const selectedFile = event.target.files[0];
            let ext = ["pdf"];
            console.log(selectedFile.name.split(".")[selectedFile.name.split(".").length-1])
            console.log(ext.includes(selectedFile.name.split(".")[selectedFile.name.split(".").length-1]));
            
            if (selectedFile && ext.includes(selectedFile.name.split(".")[selectedFile.name.split(".").length-1])) {
                setPdf(selectedFile.name)
                console.log("Inside PDF Format")
                let reader = new FileReader();
                reader.readAsDataURL(selectedFile);
                reader.onload = () =>{
                setResume(reader.result)
                setFormData({...formData, resume: reader.result})
                }
                
            }
      };

      const handleMultipleImage = (e) => {
        const selectedFile = e.target.files;
        let arr = [];
        let iconsLink = [];
        if(selectedFile){
          for(let i of selectedFile){
            arr.push(i.name);
          }
          setSkill(arr);
          for(let i of selectedFile){
            let reader = new FileReader();
            reader.readAsDataURL(i);
            reader.onload=()=>{
              iconsLink.push(reader.result);
            }
          }
          setSkillIcon(iconsLink)
        }
      }

    
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };

      const handleProjectChange = (e) => {
        setProject({
          ...project,
          [e.target.name]: e.target.value,
        });
      };

      const handleChangeExpierence = (e) => {
        setExpierence({
          ...expierence,
          [e.target.name]: e.target.value,
        });
      };
    
      const validate = () => {
        const newErrors = {};
        let isValid = true;
    
        if (!formData.firstName) {
          newErrors.firstName = "First Name is required";
          isValid = false;
        }
    
        if (!formData.stack) {
          newErrors.stack = "Stack Name is required";
          isValid = false;
        }
    
        if (!formData.email) {
          newErrors.email = "Email is required";
          isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
          newErrors.email = "Email is invalid";
          isValid = false;
        }
    
        setErrors(newErrors);
        return isValid;
      };

      const validateExpierence = () => {
        const newErrors = {};
        let isValid = true;
    
        if (!expierence.title) {
          newErrors.title = "Title is required";
          isValid = false;
        }
    
        if (!expierence.description) {
          newErrors.description = "Description is required";
          isValid = false;
        }
    
        setErrors(newErrors);
        return isValid;
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        if (validate()) {
          let res = await axios.post('http://localhost:8000/data/aboutMe/', formData)
          if(res.status == 201){
            console.log(res.data)
          }
          console.log("Form Submitted Successfully", formData);
        }
      };

      const handleProjectSubmit = async (e)=>{
        e.preventDefault();
        let res = await axios.post("http://localhost:8000/projects/addProject/", project);
        if(res.status == 201){
          console.log(res.data);
        }
        console.log("Project Submitted Successfully", project);
      }

      const handleSubmitExpierence = async (e) => {
        e.preventDefault();
        if (validateExpierence()) {
          let res = await axios.post("http://localhost:8000/experience/addExperience/", expierence);
          if(res.status == 201){
            console.log(res.data.data)
          }
          console.log("Form Submitted Successfully", expierence);
        }
      };

      const handleSubmitSkills = async (e)=>{
        e.preventDefault();
        let SkillIcon = {icons: skillIcon};
        console.log(SkillIcon)
        let res = await axios.post("http://localhost:8000/skills/addSkills/", SkillIcon)
        if(res.status == 201){
          console.log(res.data)
        }
        // console.log(skillIcon)
      }

      const handleChange2 = (event, newValue) => {
        setValue(newValue);
      };

  return (
    <div className='dataform-wrapper'>
        <h1>Data Form</h1>
        <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange2} aria-label="lab API tabs example">
                <Tab label="About Me" value="1" />
                <Tab label="Expierence" value="2" />
                <Tab label="Skills" value="3" />
                <Tab label="Projects" value="4" />
            </TabList>
            </Box>
            <TabPanel value="1">
                <TextField
                    label="First Name"
                    variant="outlined"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    error={!!errors.firstName}
                    helperText={errors.firstName}
                    sx={{ marginBottom: 2, width: '60%' }}
                    required
                />

                <TextField
                    label="Last Name"
                    variant="outlined"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    error={!!errors.lastName}
                    helperText={errors.lastName}
                    sx={{ marginBottom: 2, width: '60%' }}
                    required
                />

                <TextField
                    label="Email"
                    variant="outlined"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    error={!!errors.email}
                    helperText={errors.email}
                    sx={{ marginBottom: 2, width: '60%' }}
                    required
                />
                <TextField
                    label="stack"
                    variant="outlined"
                    name="stack"
                    value={formData.stack}
                    onChange={handleChange}
                    error={!!errors.stack}
                    helperText={errors.stack}
                    sx={{ marginBottom: 2, width: '60%' }}
                    required
                />
                <Textarea
                disabled={false}
                placeholder="Type Here"
                size="lg"
                variant="outlined"
                name='aboutMe'
                value={formData.aboutMe}
                sx={{marginBottom: 2, width: '60%'}}
                onChange={handleChange}
                />

                <Box sx={{ padding: 2 }}>
                    <Typography variant="h6">Profile Upload</Typography>

                    <input
                        accept="image/*"
                        style={{ display: "none" }}
                        id="file-upload"
                        type="file"
                        onChange={handleFileChange}
                    />
                    
                    <label htmlFor="file-upload">
                        <Button variant="contained" component="span">
                        Select File
                        </Button>
                    </label>

                    {imgName && (
                        <Box sx={{ marginTop: 2 }}>
                        <Typography variant="body1">Selected File: {imgName}</Typography>
                        </Box>
                    )}
                </Box>
                <Box sx={{ padding: 2 }}>
                    <Typography variant="h6">Resume Upload</Typography>

                    <input
                        // accept="image/*"
                        style={{ display: "none" }}
                        id="pdf-upload"
                        type="file"
                        onChange={handlePdf}
                    />
                    
                    <label htmlFor="pdf-upload">
                        <Button variant="contained" component="span">
                        Select File
                        </Button>
                    </label>

                    {pdf && (
                        <Box sx={{ marginTop: 2 }}>
                        <Typography variant="body1">Selected File: {pdf}</Typography>
                        </Box>
                    )}
                </Box>
                <br />
                <Button variant="contained" onClick={handleSubmit}>
                    Submit
                </Button>
            </TabPanel>
            <TabPanel value="2">
                <TextField
                    label="Title"
                    variant="outlined"
                    name="title"
                    value={expierence.title}
                    onChange={handleChangeExpierence}
                    error={!!errors.title}
                    helperText={errors.title}
                    sx={{ marginBottom: 2, width: '60%' }}
                    required
                />

                <Textarea
                    disabled={false}
                    placeholder="Expierence Description"
                    size="lg"
                    variant="outlined"
                    name='description'
                    value={expierence.description}
                    sx={{width: '60%', marginBottom: 2}}
                    onChange={handleChangeExpierence}
                    required
                />

                <Button variant="contained" onClick={handleSubmitExpierence}>
                    Submit
                </Button>
            </TabPanel>
            <TabPanel value="3">
            <Box sx={{ padding: 2 }}>
                <Typography variant="h6">File Upload</Typography>

                <input
                    accept="image/*"
                    style={{ display: "none" }}
                    id="file-upload"
                    type="file"
                    onChange={handleMultipleImage}
                    multiple
                />
                
                <label htmlFor="file-upload">
                    <Button variant="contained" component="span">
                    Select File
                    </Button>
                </label>

                {skill && (
                    <Box sx={{ marginTop: 2 }}>
                    <Typography variant="body1">Selected File: {skill.length > 1 ? skill.join(", ") : skill.join(" ")}</Typography>
                    </Box>
                )}
              </Box>
              <Button variant="contained" onClick={handleSubmitSkills}>
                  Submit
              </Button>
            </TabPanel>

            <TabPanel value="4">
                <TextField
                    label="title"
                    variant="outlined"
                    name="title"
                    value={project.title}
                    onChange={handleProjectChange}
                    // error={!!errors.firstName}
                    // helperText={errors.firstName}
                    sx={{ marginBottom: 2, width: '60%' }}
                    // required
                />

                <TextField
                    label="description"
                    variant="outlined"
                    name="description"
                    value={project.description}
                    onChange={handleProjectChange}
                    // error={!!errors.lastName}
                    // helperText={errors.lastName}
                    sx={{ marginBottom: 2, width: '60%' }}
                    required
                />

                <TextField
                    label="github"
                    variant="outlined"
                    name="github"
                    value={project.github}
                    onChange={handleProjectChange}
                    // error={!!errors.email}
                    // helperText={errors.email}
                    sx={{ marginBottom: 2, width: '60%' }}
                    required
                />
                <TextField
                    label="livePage"
                    variant="outlined"
                    name="livePage"
                    value={project.livePage}
                    onChange={handleProjectChange}
                    // error={!!errors.stack}
                    // helperText={errors.stack}
                    sx={{ marginBottom: 2, width: '60%' }}
                    required
                />

                <Box sx={{ padding: 2 }}>
                    <Typography variant="h6">Thumbnail</Typography>

                    <input
                        accept="image/*"
                        style={{ display: "none" }}
                        id="thumbnail"
                        type="file"
                        onChange={handleThumbnail}
                    />
                    
                    <label htmlFor="thumbnail">
                        <Button variant="contained" component="span">
                        Select File
                        </Button>
                    </label>

                    {thumbnail && (
                        <Box sx={{ marginTop: 2 }}>
                        <Typography variant="body1">Selected File: {thumbnail}</Typography>
                        </Box>
                    )}
                </Box>
                <br />
                <Button variant="contained" onClick={handleProjectSubmit}>
                    Submit
                </Button>
            </TabPanel>
        </TabContext>
    </Box>
      
    </div>
  )
}

export default DataForm