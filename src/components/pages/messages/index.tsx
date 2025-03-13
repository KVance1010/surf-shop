import { CreatePostForm } from "./create-post-form";

export const Messages = () => {
  return (
    <div>
      <CreatePostForm user={{ name: "John Doe" }} />
    </div>
  );
};
