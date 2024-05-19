import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// Define a Zod schema
const schema = z.object({
  name: z
    .string()
    .min(3, "Name should be at least 3 characters long"),
  age: z.number().min(18, "Age should be at least 18"),
});

interface FormData {
  name: string;
  age: number;
}

function Form() {
  // Use the useForm hook with the zodResolver
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          {...register("name")}
          type="text"
          className="form-control"
          id="name"
          placeholder="Enter name..."
        />
        {errors.name && (
          <span className="text-danger">{errors.name.message}</span>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="age">Age</label>
        <input
          {...register("age",{valueAsNumber:true})}
          type="number"
          className="form-control"
          id="age"
          placeholder="Enter your age"
        />
        {errors.age && (
          <span className="text-danger">{errors.age.message}</span>
        )}
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default Form;
