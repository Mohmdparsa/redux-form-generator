import * as Yup from "yup"

const ValidationSchema = Yup.object({
    name:Yup.string().required("name is required"),
    email:Yup.string().email("invalid email address").required("email is required"),
    password:Yup.string().required("password is required")
})

export default ValidationSchema