
import { prisma } from "@/utils/prisma";
import { type NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export async function GET(req: NextRequest, context: any) {
  try {
    const {params} = context
    const page1 = parseInt(params.page);
    const limit1 = parseInt(params.limit);
   

    const books = await prisma.book.findMany({
      skip: page1 * limit1,
      take: limit1,
      orderBy: {
        queue: 'asc',
      },
      include: {
        author: true,
        chapters: true,
        genres: true,
      },
    });

    return NextResponse.json(books);
  } catch (error) {
    console.error("Error fetching books:", error);
    return NextResponse.json({ error: error });
  }
}


