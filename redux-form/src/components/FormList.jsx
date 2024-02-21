import ValidationSchema from "../Validation/FormValidation";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { TextField, Button, Grid } from "@mui/material";

const FormList = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };
  return (
    <>
      <Formik initialValues={initialValues} validationSchema={ValidationSchema}>
        <Grid container style={{marginTop:"100px" , justifyContent:"center"}}>
          <Grid
            item
            style={{
              marginLeft: "30px",
             boxShadow:"0 0 5px 5px gray",
              borderRadius: "20px",
            }}
          >
            <h1 style={{textAlign:"center"}}>SignIn Form</h1>
            <Form
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
                <Field
                  as={TextField}
                  type="text"
                  label="name"
                  name="name"
                  error={<ErrorMessage name="name" />}
                  style={{ width: "40vw", marginTop: "22px" , color:"black"}}
                />
              </div>
              <div>
                <Field
                  as={TextField}
                  type="text"
                  label="email"
                  name="email"
                  error={<ErrorMessage name="email" />}
                  style={{ width: "40vw", marginTop: "22px" }}
                />
              </div>
              <div>
                <Field
                  as={TextField}
                  type="text"
                  label="password"
                  name="password"
                  error={<ErrorMessage name="password" />}
                  style={{ width: "40vw", marginTop: "22px" }}
                />
              </div>
              <Button
                style={{ marginTop: "30px" }}
                type="submit"
                variant="contained"
                color="primary"
              >
                {" "}
                SignIn
              </Button>
            </Form>
          </Grid>
        </Grid>
      </Formik>
    </>
  );
};

export default FormList;
