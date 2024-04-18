import { fictionGenre, hobbyGenre, LiteratureGenres, nonFictionGenres, romanceGenre } from "@/data/genre";
import {prisma }from "@/utils/prisma"
import { cache, useMemo } from 'react'

export const getBooksByGenreId = async (genreId: number) => {
    try {
        const books = await prisma.book.findMany({
            where: {
                genres: {
                    some: {
                        id: genreId,
                    },
                },
            },
            include: {
                // Include any necessary relations or fields for the books
                author: true, 
                chapters: true,
                genres: true
                // ...
            },
        });

        return books;
    } catch (error) {
        console.error("Error fetching books by genre ID:", error);
        throw new Error("An error occurred while fetching books by genre ID. Please try again.");
    }
};

export const getGenreNameById = async (genreId: number) => {    
    try {
    const genre = await prisma.genre.findUnique({
        where: {
            id: genreId,
        },
        select: {
            name: true,
        },
    });

    return genre?.name ?? null;
} catch (error) {
    console.error("Error fetching genre name by ID:", error);
    throw new Error("An error occurred while fetching the genre name by ID. Please try again.", error as any);
}
};

export const getBooks = async ({ page , limit = 10  } : { page?: string | number | null, limit?: string | number | null } = {}) => {

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
        throw new Error(error as any);
    }
   
}


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
                genres: true
            },
          });

          return books;
         
        
    } catch (error) {
        console.error("Error fetching books:", error);
        throw new Error ("An error occurred while fetching books. Please try again.")
    }


}


export async function getBooksForClient({ page , limit = 10  } : { page?: string | number | null, limit?: string | number | null } = {} ) {
   
    try {
    //     const searchParams = new URLSearchParams();
    // if (page) {
    //   searchParams.append('page', page.toString());
    // }
    // searchParams.append('limit', limit!.toString());

    const response = await fetch(`/api/books?page=${page!.toString()}&limit=${limit!.toString()}`, {
      method: 'GET',
    });
  
        if (!response.ok) {

          throw new Error('Failed to fetch chapter');
        }
        const data = await response.json();
    
        return { data };

    }catch(error){
        console.error("Error fetching books:", error);
        throw new Error(error as any);
       
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
                genres: true
                
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
            case "plays":
                    genreFilter = romanceGenre;
                    break;
            default:
                genreFilter = category; // Default case or handle error/invalid category
        }

        const books = await prisma.book.findMany({
            where: {
              genres: {
                some: {
                  name: {
                    in: Array.isArray(genreFilter) ? genreFilter : [genreFilter],
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

export const getUniqueGenres = cache(async () => {
    try {
        const uniqueGenres = await prisma.genre.findMany({
            select: {
                id: true,
                name: true,
                books: {
                    select: {
                        id: true, // Include any necessary fields for the books
                    },
                },
            },
            orderBy: {
                books: {
                    _count: 'desc',
                },
            },
        });

        return uniqueGenres.map((genre) => ({
            id: genre.id, 
            name: genre.name,
            bookCount: genre.books.length,
        }));
    } catch (error) {
        console.error("Error fetching unique genres:", error);
        throw new Error("An error occurred while fetching unique genres. Please try again.");
    }
});