import { Controller, useFormContext } from "react-hook-form";

type TFileInput = {
  name: string;
  label: string;
};

const TFileInput = ({ name, label }: TFileInput) => {
  const { control } = useFormContext();

  return (
    <div className="TFileInputContainer mb-5 flex flex-col gap-y-1">
      {label && <label htmlFor={name}>{label}</label>}

      <Controller
        name={name}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <>
            <input
              type="file"
              id={name}
              className="border border-gray-400"
              onChange={(e) => field.onChange(e.target.files?.[0] || null)}
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

export default TFileInput;
