import mongoose, { Schema, Document } from "mongoose";

// Define the interface for Company_Investor
export interface ICompanyInvestor extends Document {
  name: string;
  surname: string;
  email: string;
  organization: string;
  phone: string;
  logo: string; // Image URL or path
  favorites: mongoose.Types.ObjectId[]; // Array of references to Company_Startups
}

// Define the schema
const CompanyInvestorSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    surname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    organization: {
      type: String,
    },
    phone: {
      type: String,
      required: true,
    },
    logo: {
      type: String, // Assuming a URL or file path for the logo image
    },
    favorites: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Company_Startup", // Referencing the Company_Startups collection
      },
    ],
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields
  }
);

// Export the model
export default mongoose.model<ICompanyInvestor>(
  "Company_Investor",
  CompanyInvestorSchema
);
