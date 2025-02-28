import { Controller, useFormContext } from "react-hook-form";
import { Input } from "../ui/input";

type TInput = {
  type?: string;
  name: string;
  label: string;
  placeholder?: string;
};

const TInput = ({ type = "text", label, name, placeholder }: TInput) => {
  const { control } = useFormContext();

  const inputProps =
    type === "number"
      ? {
          onWheel: (e: React.WheelEvent<HTMLInputElement>) =>
            e.currentTarget.blur(),
        }
      : {};

  return (
    <div className="TInputContainer mb-5 flex flex-col gap-y-1">
      {label && <label htmlFor={name}>{label}</label>}

      <Controller
        name={name}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <>
            <Input
              placeholder={placeholder}
              type={type}
              id={name}
              className="border border-gray-400"
              value={field.value}
              onChange={(e) => field.onChange(e.target.value)}
              {...inputProps}
            />
            {error && (
              <p className="text-xs font-medium text-red-600">
                {error.message}
              </p>
            )}
          </>
        )}
      />
    </div>
  );
};

export default TInput;
