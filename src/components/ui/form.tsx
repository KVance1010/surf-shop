import { UseFormRegisterReturn } from "react-hook-form";

interface FormProps {
  message?: string;
}

export const FormSuccess = ({ message }: FormProps) => {
  if (!message) return null;
  return (
    <div className="bg-emerald-500/15 p-3 rounded-md flex items-center gap-x-2 text-emerald-500 mt-4">
      <p>{message}</p>
    </div>
  );
};

export const FormWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-screen h-screen flex flex-1 flex-col justify-center items-center">
      {children}
    </div>
  );
};

export const FormError = ({ message }: FormProps) => {
  if (!message) return null;
  return (
    <div className="bg-red-600 p-3 rounded-md flex items-center gap-x-2 mt-4 text-destructive">
      <p>{message}</p>
    </div>
  );
};

export const FormButton = ({
  children,
  disabled
}: {
  children: string;
  disabled: boolean;
}) => {
  return (
    <button
      disabled={disabled}
      type="submit"
      className="bg-white my-4 w-full hover:bg-blue-400 text-black p-2 
   text-center rounded-lg"
    >
      {children}
    </button>
  );
};

interface FormInputProps {
  label?: string;
  name: string;
  type?: string;
  placeholder?: string;
  autoComplete?: string;
  required?: boolean;
  error?: string;
  register: UseFormRegisterReturn;
}

export const FormInput = ({
  label,
  name,
  type = "text",
  placeholder = "",
  autoComplete,
  required = false,
  error,
  register
}: FormInputProps) => {
  return (
    <div className="mb-4">
      {label && (
        <label htmlFor={name} className="block text-sm font-medium text-white">
          {label}
        </label>
      )}
      <input
        {...register}
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        autoComplete={autoComplete}
        required={required}
        className="mt-1 p-2 w-full border text-black border-gray-300 rounded-md"
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};
