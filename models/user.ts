import mongoose, { Schema } from "mongoose";
//  user scheme
const userScheme = new Schema(
  {
    name: {
      required: true,
      type: Schema.Types.String,
    },
    email: {
      required: true,
      type: Schema.Types.String,
    },
    password: {
      types: Schema.Types.String,
    },
  },
  { timestamps: true }
);
const User = mongoose.models.User || mongoose.model("User", userScheme);
export default User;
