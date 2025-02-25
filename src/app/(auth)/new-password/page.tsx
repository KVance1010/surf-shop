import { Suspense } from "react";
import NewPasswordForm from "../../../components/auth/change-password-form";

const NewPassWordPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NewPasswordForm />
    </Suspense>
  );
};

export default NewPassWordPage;
