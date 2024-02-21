import { Typography } from "@mui/material";
import { useSelector } from "react-redux";

const WelcomePage = () => {
  const Name = useSelector((state) => state.form.name);
  return (
    <>
      <Typography style={{textAlign:"center" ,  marginTop:"150px"}} variant="h1">Welcome <span style={{color:"red"}}>{Name}</span>!</Typography>
    </>
  );
};

export default WelcomePage;
