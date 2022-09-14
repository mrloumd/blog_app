import mongoose from "mongoose";

const blogSchema = mongoose.Schema(
  {
    // get the user name and id who created the blog
    firstName: {
      type: String,
      required: true,
      ref: "User",
    },
    lastName: {
      type: String,
      required: true,
      ref: "User",
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    title: {
      type: String,
      required: [true, "Please add title"],
    },
    description: {
      type: String,
      required: [true, "Please add description"],
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Blog", blogSchema);
