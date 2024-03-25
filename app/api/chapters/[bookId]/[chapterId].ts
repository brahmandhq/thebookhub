// pages/api/chapters/[bookId]/[chapterId].js
import prisma from '@/utils/prisma';
import { type NextRequest } from 'next/server'
import { NextResponse } from 'next/server';
export async function GET(req: NextRequest) {
  const { bookId, chapterId } = req.query;

  try {
    const chapter = await prisma.chapter.findFirst({
      where: {
        id: parseInt(chapterId),
        bookId: parseInt(bookId)
      }
    });


    NextResponse.json(chapter);
  } catch (error) {
    NextResponse.json({ error: error || 'An error occurred while fetching the chapter.' });
  }
}
