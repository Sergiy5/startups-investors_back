import mongoose, { Schema, Document } from "mongoose";

// Define roles enum
export enum UserRole {
  ADMIN = "admin",
  STARTUP = "startup",
  INVESTOR = "investor",
  // Add more roles here as needed in the future
}

// Define the User interface
export interface IUser extends Document {
  login: string;
  password: string;
  role: UserRole;
  company_startups: mongoose.Types.ObjectId[]; // Array of references to Company_Startups
  company_investors: mongoose.Types.ObjectId[]; // Array of references to Company_Investors
}

// Define the User schema
const UserSchema: Schema = new Schema(
  {
    login: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: Object.values(UserRole),
      required: true,
    },
    company_startups: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Company_Startup",
      },
    ],
    company_investors: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Company_Investor",
      },
    ],
  },
  {
    timestamps: true, // Adds createdAt and updatedAt timestamps
  }
);

// Export the model
export default mongoose.model<IUser>("User", UserSchema);
