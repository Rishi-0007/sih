import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(3, "Username must be at least 3 characters"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

type FormData = z.infer<typeof schema>;

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const navigate = useNavigate();

  const onSubmit = (data: FormData) => {
    if (data.name === "admin" && data.password === "password") {
      navigate("/admin");
    } else {
      navigate("/employee");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl>
        <FormLabel>Username</FormLabel>
        <Input {...register("name", { required: true })} type="text"></Input>
        {errors.name && <p>{errors.name.message}</p>}
        <FormLabel>Password</FormLabel>
        <Input {...register("password")} type="password"></Input>
        {errors.name && <p>{errors.name.message}</p>}
        <button className="btn btn-primary mt-3" type="submit">
          Login
        </button>
      </FormControl>
    </form>
  );
};

export default LoginForm;
