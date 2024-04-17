// pages/api/books/index.ts
import { prisma } from "@/utils/prisma";
import { type NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    const page = req.nextUrl.searchParams.get('page') || '0';
    const limit = req.nextUrl.searchParams.get('limit') || '10';
    const page1 = parseInt(page);
    const limit1 = parseInt(limit);

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
    return NextResponse.json({ error: "An error occurred while fetching books." });
  }
}


