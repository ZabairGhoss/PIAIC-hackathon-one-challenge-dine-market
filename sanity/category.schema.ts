import { defineField, defineType } from "sanity";

export const category = defineType({
  name: "category",
  type: "document",
  title: "Category",
  fields: [
    defineField({
        name: "category",
        title: "Category",
        type: "string",
      }),
  ],
});
