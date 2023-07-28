import { StaticImageData } from "next/image";

export type Product = {
  id: number;
  title: string;
  tagline: string;
  price: number;
  category: string;
  img: string | StaticImageData;
  details: string;
  careItems: string;
};

// All the properties of defined TYPES are required when defining from data, to make any proprty option just use the Question Mark(?) after the of property e.g. category?: string
