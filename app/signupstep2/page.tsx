"use client";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function SignupStep2() {
  const { push } = useRouter();
  const formik = useFormik({
    initialValues: {
      userName: "",
      password: "",
    },
    validationSchema: Yup.object({
      userName: Yup.string()
        .min(3, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
      password: Yup.string()
        .min(3, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
    }),
    onSubmit: function (values) {
      console.log(JSON.stringify(values, null, 4));
      alert(
        `You are registered! userName: ${values.userName}. password: ${values.password}`
      );
    },
  });
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <form onSubmit={formik.handleSubmit} className="max-w-2xl">
        <div className="flex flex-wrap border shadow rounded-lg p-3 dark:bg-gray-600">
          <h2 className="text-xl text-gray-600 pb-2">Account settings:</h2>

          <div className="flex flex-col gap-2 w-full border-gray-400">
            <div>
              <label className="text-gray-600 ">username</label>
              <input
                id="userName"
                name="userName"
                className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.userName}
              />
            </div>

            <div>
              <label className="text-gray-600 dark:text-gray-400">
                password
              </label>
              <input
                id="password"
                name="password"
                className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                type="password"
                onChange={formik.handleChange}
                value={formik.values.password}
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  push("/signupstep1");
                }}
                className="py-1.5 px-3 m-1 text-center bg-violet-700 border rounded-md text-white  hover:bg-violet-500 hover:text-gray-100"
              >
                prev
              </button>

              <button
                className="py-1.5 px-3 m-1 text-center bg-violet-700 border rounded-md text-white  hover:bg-violet-500 hover:text-gray-100"
                type="submit"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
