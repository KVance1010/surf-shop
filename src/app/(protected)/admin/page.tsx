import { redirect } from "next/navigation";
import { Suspense } from "react";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { currentUser } from "@/utils/auth-session";
import { AdminForm } from "../../../components/admin/admin-from";

const AdminPage = async () => {
  const user = await currentUser();
  if (!user || user.role !== "ADMIN") {
    redirect(DEFAULT_LOGIN_REDIRECT);
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AdminForm user={{ ...user }} />;
    </Suspense>
  );
};

export default AdminPage;
