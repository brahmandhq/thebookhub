import { PrismaClient } from '@prisma/client';


// export async function getChaptersByBookId(bookId: string) {
//     try{
//         const chapters = await prisma.chapter.findMany({
//             where: {
//               bookId: parseInt(bookId),
//             },
      
//           });
//           return chapters;
//     }catch(error){
//         throw new Error("Error getting the chapter, please try again")
//     }
   
//   }

//@ts-ignore

  // export async function getChapterIdRangeByBookId(bookId: string) {
  //   try {
  //       const chapters = await prisma.chapter.findMany({
  //     where: { bookId: parseInt(bookId) },
  //     orderBy: { id: 'asc' },
  //     select: { id: true }, // Only fetch the id
  //   });
  //   const ids = chapters.map(chapter => chapter.id);
  //   const range = { from: ids[0], to: ids[ids.length - 1] };
  //   return range;
  //   } catch (error) {
  //       throw new Error("Error getting the chapter, please try again")
  //   }
    
  // }
  
  
  