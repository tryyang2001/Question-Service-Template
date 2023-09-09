import Category from "../utils/enums/Category";
import Complexity from "../utils/enums/Complexity";

type Example = {
  input: string;
  output: string;
  explanation?: string;
};

type Question = {
  id: string;
  title: string;
  description: string;
  category: string[]; // enum
  complexity: Complexity; // enum
  url: string;
  // optional attributes
  examples?: Example[];
  constraints?: string[];
  createdOn?: number;
  updatedOn?: number;
  author?: string;
};
