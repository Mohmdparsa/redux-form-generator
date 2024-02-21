import ValidationSchema from "../Validation/FormValidation";
import { useFormik } from "formik";
import { TextField, Button, Grid } from "@mui/material";


const FormList = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    ValidationSchema,
  });

  return (
    <>
  
        <Grid
          container
          style={{ marginTop: "100px", justifyContent: "center" }}
        >
          <Grid
            item
            style={{
              marginLeft: "30px",
              boxShadow: "0 0 5px 5px gray",
              borderRadius: "20px",
            }}
          >
            <h1 style={{ textAlign: "center" }}>SignIn Form</h1>
            <form
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                marginLeft: "20px",
                marginRight: "20px",
                marginBottom: "40px",
              }}
            >
              <div>
                <TextField
                  type="text"
                  label="name"
                  name="name"
                  style={{ width: "40vw", marginTop: "22px", color: "black" }}
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.name && Boolean(formik.errors.name)}
                  helperText={formik.touched.name && formik.errors.name}
                />
              </div>
              <div>
                <TextField
                  type="text"
                  label="email"
                  name="email"
                  style={{ width: "40vw", marginTop: "22px" }}
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
              </div>
              <div>
                <TextField
                  type="password"
                  label="password"
                  name="password"
                  style={{ width: "40vw", marginTop: "22px" }}
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.password && Boolean(formik.errors.password)}
                  helperText={formik.touched.password && formik.errors.password}
                />
              </div>
              <Button
                style={{ marginTop: "30px" }}
                type="submit"
                variant="contained"
                color="primary"
                onClick={(e)=>e.preventDefault()}
              >
                {" "}
                SignIn
              </Button>
            </form>
          </Grid>
        </Grid>
    </>
  );
};

export default FormList;
