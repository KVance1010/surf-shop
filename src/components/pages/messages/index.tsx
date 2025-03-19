import { AddMediaForm } from "@/components/ui-custom/add-media-form";

export const Messages = () => {
  return (
    <div className="min-h-screen">
      <AddMediaForm user={{ name: "John Doe" }} />
    </div>
  );
};
