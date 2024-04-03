import mongoose, { Schema } from "mongoose";
//  user scheme
const userScheme = new Schema(
  {
    name: {
      required: [true, "please a enter a name"],
      type: Schema.Types.String,
    },
    email: {
      required: [true, "please a enter a email"],
      type: Schema.Types.String,
    },
    password: {
      types: Schema.Types.String,
    },
  },
  { timestamps: true, versionKey: false }
);
const User = mongoose.models.User || mongoose.model("User", userScheme);
export default User;
