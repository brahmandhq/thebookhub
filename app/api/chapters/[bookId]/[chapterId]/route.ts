// pages/api/chapters/[bookId]/[chapterId].js
import prisma from '@/utils/prisma';
import { type NextRequest } from 'next/server'
import { NextResponse } from 'next/server';
export async function GET(req: NextRequest, context: any) {
  const { params } = context;
  console.log(params)

  try {
    const chapter = await prisma.chapter.findFirst({
      where: {
        id: parseInt(params.chapterId),
        bookId: parseInt(params.bookId)
      }
    });


    
    return NextResponse.json(chapter);
  } catch (error) {
    return NextResponse.json({ error: error || 'An error occurred while fetching the chapter.' });
  }
}
