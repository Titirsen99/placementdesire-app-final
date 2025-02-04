"use server";

import { revalidatePath } from "next/cache";
// import { prisma } from "@/lib/";
import  prisma  from "../../../../lib/prisma"

export type FormData = {
  name: string;
  description: string;
  location: string;
  author: string;
  salary: string;
  img: string;
  employmentType: string;
};

export async function createJob(data: FormData) {
  await prisma.jobPosting.create({
    data: {
      name: data.name,
      description: data.description,
      location: data.location,
      author: data.author,
      Salary: parseFloat(data.salary), // Change 'salary' to 'Salary'
      img: data.img,
      employmentType: data.employmentType,
    },
  });

  revalidatePath("/create");
}
