import { Box, FormControl, FormLabel, Input } from "@chakra-ui/react";
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
    <Box
      className="container mt-5"
      maxW="sm"
      p={5}
      boxShadow="md"
      borderRadius="md"
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl className="mb-3">
          <FormLabel htmlFor="username">Username</FormLabel>
          <Input
            id="username"
            type="text"
            placeholder="Enter your username"
            className="form-control"
            {...register("name")}
          />
          {errors.name && <p className="text-danger">{errors.name.message}</p>}
        </FormControl>

        <FormControl className="mb-3">
          <FormLabel htmlFor="password">Password</FormLabel>
          <Input
            id="password"
            type="password"
            placeholder="Enter your password"
            className="form-control"
            {...register("password")}
          />
          {errors.password && (
            <p className="text-danger">{errors.password.message}</p>
          )}
        </FormControl>

        <button type="submit" className="btn btn-primary w-100">
          Submit
        </button>
      </form>
    </Box>
  );
};

export default LoginForm;
