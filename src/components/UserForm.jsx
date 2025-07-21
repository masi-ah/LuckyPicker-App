import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  name: yup
  .string()
  .trim()
  .min(3, "Name must be at least 3 characters")
  .max(255, "Name can't be longer than 255 characters")
  .required("Name is required"),
  phone: yup
  .string()
  .trim()
  .matches(/^09\d{9}$/, "phone number must be valid")
  .required("phone number is required"),
});

const UserForm = ({AddUser}) => {
  const{
    register, handleSubmit, formState:{errors}, reset
  } = useForm({
      resolver: yupResolver(schema),
    });

  const onSubmit = (data) => {
    AddUser(data);
    reset();
  };
return (
  <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md bg-white p-6 rounded shadow-md space-y-4" >
    <div>
      <input {...register("name")} placeholder="Name" className="w-full px-4 border border-purple-200 rounded focus:outline-none focus:ring-1 focus:ring-purple-500" />
      {errors.name && <p className="text-red-500 text-sm mt-1" >{errors.name.message}</p> }
    </div>
    <div>
      <input {...register("phone")} placeholder="phone number" className="w-full px-4 border border-purple-200 rounded focus:outline-none focus:ring-1 focus:ring-purple-500"  />
      {errors.phone && <p className="text-red-500 text-sm mt-1" >{errors.phone.message}</p> }
    </div>
    <button type="submit" className='mt-6 bg-purple-400 text-wite px-4 py-2 rounded-md hover:bg-purple-500 transition-colors duration-300' >submit</button>
  </form>
);
};
export default UserForm;
