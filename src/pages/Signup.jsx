import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { signupSchema } from "../schemas";
import { useState } from "react";

export default function Signup() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [apiError, setApiError] = useState("");

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        username: "",
        password: "",
        confirm_password: "",
        registration_code: "",
      },
      validationSchema: signupSchema,

      onSubmit: async (values, action) => {
        console.log(values);

        const { username, password, registration_code } = values;
        const payload = { username, password, registration_code };

        setApiError(""); // reset previous error
        try {
          const response = await fetch("/register", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
          });

          const data = await response.json();
          if (!response.ok) {
            setApiError(data.detail || "Registration failed");
            return;
          }

          console.log("API Response:", data);

          action.resetForm();
          setShowSuccess(true); // show popup

          // redirect after 2 seconds
          setTimeout(() => navigate("/login"), 2000);
        } catch (error) {
          console.error("Error submitting form:", error);
          setApiError("Something went wrong. Please try again.");
        }
      },
    });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full max-w-lg mx-auto">
      <h2 className="text-3xl font-bold mb-2 text-center text-gray-800">
        Create Your Account
      </h2>
      <p className="text-center text-gray-500 mb-6">
        Sign up to get started with{" "}
        <span className="font-semibold">Attendance Tracker</span>
      </p>

      {/*  */}
      {showSuccess && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 backdrop-blur-sm z-50 transition-opacity duration-300">
          <div className="bg-white w-80 sm:w-96 p-6 rounded-xl shadow-xl text-center transform scale-95 animate-scale-up">
            <div className="flex flex-col items-center gap-3">
              <div className="bg-green-100 rounded-full p-3">
                <span className="text-3xl">✅</span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800">
                Signup Completed
              </h3>
              <p className="text-gray-600">Redirecting to login page...</p>
            </div>
          </div>
        </div>
      )}
      {/*  */}

      <form
        onSubmit={handleSubmit}
        className="w-full flex flex-col items-center gap-5"
      >
        {apiError && (
          <div className="w-full bg-red-100 text-red-700 border border-red-300 p-3 rounded mb-4 text-center">
            {apiError}
          </div>
        )}

        {/* username */}
        <div className="form-group flex flex-col gap-2 w-full">
          <label htmlFor="username" className="font-medium text-gray-700">
            Username
          </label>
          <input
            value={values.username}
            onChange={handleChange}
            onBlur={handleBlur}
            type="text"
            name="username"
            id="username"
            autoComplete="off"
            className={`border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 ${
              errors.username && touched.username
                ? "border-red-500 focus:ring-red-300"
                : "border-gray-300 focus:ring-neutral-800"
            }`}
            placeholder="Enter your username"
          />
          {errors.username && touched.username ? (
            <span className="text-red-500 text-sm">{errors.username}</span>
          ) : null}
        </div>

        {/* password */}
        <div className="form-group flex flex-col gap-2 w-full">
          <label htmlFor="password" className="font-medium text-gray-700">
            Password
          </label>
          <input
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            type="password"
            name="password"
            id="password"
            autoComplete="off"
            className={`border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 ${
              errors.password && touched.password
                ? "border-red-500 focus:ring-red-300"
                : "border-gray-300 focus:ring-neutral-800"
            }`}
            placeholder="Create a password"
          />
          {errors.password && touched.password ? (
            <span className="text-red-500 text-sm">{errors.password}</span>
          ) : null}
        </div>

        {/* Confirm password */}
        <div className="form-group flex flex-col gap-2 w-full">
          <label
            htmlFor="confirm_password"
            className="font-medium text-gray-700"
          >
            Confirm Password
          </label>
          <input
            value={values.confirm_password}
            onChange={handleChange}
            onBlur={handleBlur}
            type="password"
            name="confirm_password"
            id="confirm_password"
            autoComplete="off"
            className={`border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 ${
              errors.confirm_password && touched.confirm_password
                ? "border-red-500 focus:ring-red-300"
                : "border-gray-300 focus:ring-neutral-800"
            }`}
            placeholder="Confirm your password"
          />

          {errors.confirm_password && touched.confirm_password ? (
            <span className="text-red-500 text-sm">
              {errors.confirm_password}
            </span>
          ) : null}
        </div>

        {/* Security Code */}
        <div className="form-group flex flex-col gap-2 w-full">
          <label
            htmlFor="registration_code"
            className="font-medium text-gray-700"
          >
            Registration Code
          </label>
          <input
            value={values.registration_code}
            onChange={handleChange}
            onBlur={handleBlur}
            type="text"
            name="registration_code"
            id="registration_code"
            autoComplete="off"
            className={`border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 ${
              errors.registration_code && touched.registration_code
                ? "border-red-500 focus:ring-red-300"
                : "border-gray-300 focus:ring-neutral-800"
            }`}
            placeholder="Enter your registration code"
          />
          <span className="text-sm text-gray-500">
            Contact your admin to get a registration code
          </span>

          {errors.registration_code && touched.registration_code ? (
            <span className="text-red-500 text-sm">
              {errors.registration_code}
            </span>
          ) : null}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-neutral-900 w-full text-white py-2 mt-4 rounded-lg font-medium hover:bg-neutral-800 transition-all duration-200 shadow-md hover:shadow-lg"
        >
          Create Account
        </button>

        <span className="text-gray-700 text-sm mt-2">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-blue-600 font-medium hover:underline"
          >
            Login
          </Link>
        </span>
      </form>
    </div>
  );
}
