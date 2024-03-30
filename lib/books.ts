import { fictionGenre, hobbyGenre, LiteratureGenres, nonFictionGenres } from "@/data/genre";
import {prisma }from "@/utils/prisma"
import { cache, useMemo } from 'react'

export const getBooks = cache(async ({ page , limit = 10  } : { page?: string | number | null, limit?: string | number | null } = {}) => {

    try {
        const page1 = parseInt(page as any) || 0;
        const limit1 = parseInt(limit as any) || 10;
      
        const books = await prisma.book.findMany({
          skip: page1 * limit1,
          take: limit1,
          orderBy: {
            queue: 'asc', // Order by queue in ascending order
        },
          
          include: {
            author: true, 
            chapters: true,
            genres: true
        },
    
        });
      
        return books
        
    } catch (error) {
        console.error("Error fetching books:", error);
        throw new Error ("An error occurred while fetching books. Please try again.")
    }
   
})


export const getBooksByAuthorOrTitle = async (data: string | null | undefined) => {
    if(!data) return;

    try {
        const books = await prisma.book.findMany({
            where: {
                OR: [
                    {
                        author: {
                            OR: [
                                { firstName: { contains: data, mode: 'insensitive' } },
                                { lastName: { contains: data, mode: 'insensitive' } },
                              
                            ],
                        },
                    },
                    { name: { contains: data, mode: 'insensitive' } },
                    { language: { contains: data, mode: 'insensitive' } },
                ],
            },
            include: {
                author: true, 
            },
          });

          return books;
         
        
    } catch (error) {
        console.error("Error fetching books:", error);
        throw new Error ("An error occurred while fetching books. Please try again.")
    }


}
export async function getChapterById(bookId: any, chapterId:  any ) {
   
    try {
        const response = await fetch(`/api/chapters/${bookId}/${chapterId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch chapter');
        }
        const data = await response.json();
    
        return { data };

    }catch(error){
        console.error("Error fetching books:", error);
        throw new Error ("An error occurred while fetching books. Please try again.")
       
    }
    
   
  }


export const getBookById = cache(async (id:any) => {
    try {
        const book = await prisma.book.findUnique({
            where: { id: parseInt(id as string) },
            include: {
                author: true,
                chapters : true,
                
            }
          });
    
          return book 
    } catch (error) {
        console.error("Error fetching books:", error);
        throw new Error ("An error occurred while fetching books. Please try again.")
    }



})

export const getBooksByGenre = cache(async (category: string, offset: number = 0, batchSize: number = 25) => {
    try {
        // Calculate the skip based on offset and batchSize, assuming offset is the number of previously loaded items
        const skip = offset * batchSize;

        let genreFilter;
        switch (category) {
            case "literature":
                genreFilter = LiteratureGenres;
                break;
            case "non-fiction":
                genreFilter = nonFictionGenres;
                break;
            case "fiction":
                genreFilter = fictionGenre;
                break;
            case "hobbies":
                genreFilter = hobbyGenre;
                break;
            default:
                genreFilter = fictionGenre; // Default case or handle error/invalid category
        }

        const books = await prisma.book.findMany({
            where: {
              genres: {
                some: {
                  name: {
                    in: genreFilter,
                  },
                },
              },
            },
            include: {
              genres: true, // Optional: include genre data in the response
              author: true, // Optional: include author data in the response
            },
            skip,
            take: batchSize, // Use batchSize for consistent item fetching
        });
        
        return books;
        
    } catch (error) {
        console.error("Error fetching books:", error);
        throw new Error ("An error occurred while fetching books. Please try again.");
    }
})