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
  <form onSubmit={handleSubmit(onSubmit)}>
    <div>
      <input {...register("name")} placeholder="Name"/>
      {errors.name && <p>{errors.name.message}</p> }
    </div>
    <div>
      <input {...register("phone")} placeholder="phone number"/>
      {errors.phone && <p>{errors.phone.message}</p> }
    </div>
    <button type="submit">submit</button>
  </form>
);
};
export default UserForm;
