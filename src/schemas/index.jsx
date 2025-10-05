import * as Yup from "yup";

export const signupSchema = Yup.object({
  username: Yup.string()
    .min(3, "Username must be at least 3 characters")
    .max(20, "Username must be at most 20 characters")
    .required("Username is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  confirm_password: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
  registration_code: Yup.string().required("Registration Code is required"),
});

export const loginSchema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  password: Yup.string().required("Password is required"),
});
export const profileSchema = Yup.object().shape({
  full_name: Yup.string()
    .min(3, "Full Name must be at least 3 characters")
    .max(50, "Full Name must be at most 50 characters")
    .required("Full Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string()
    .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
    .required("Phone number is required"),
  department: Yup.string()
    .min(2, "Department must be at least 2 characters")
    .max(50, "Department must be at most 50 characters")
    .required("Department is required"),
});
export const editProfileSchema = Yup.object().shape({
  full_name: Yup.string()
    .min(3, "Full Name must be at least 3 characters")
    .max(50, "Full Name must be at most 50 characters")
    .required("Full Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string()
    .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
    .required("Phone number is required"),
  department: Yup.string()
    .min(2, "Department must be at least 2 characters")
    .max(50, "Department must be at most 50 characters")
    .required("Department is required"),
});
export const adminLoginSchema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  password: Yup.string().required("Password is required"),
});
export const adminEmployeeEditSchema = Yup.object().shape({
  full_name: Yup.string()
    .min(3, "Full Name must be at least 3 characters")
    .max(50, "Full Name must be at most 50 characters")
    .required("Full Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string()
    .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
    .required("Phone number is required"),
  department: Yup.string()
    .min(2, "Department must be at least 2 characters")
    .max(50, "Department must be at most 50 characters")
    .required("Department is required"),
  username: Yup.string()
    .min(3, "Username must be at least 3 characters")
    .max(20, "Username must be at most 20 characters")
    .required("Username is required"),
});
