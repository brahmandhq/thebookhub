import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
export const getBooks = async ({ page , limit  } : { page?: string | number | null, limit?: string | number | null } = {}) => {

    try {
        const page1 = parseInt(page as any) || 0;
        const limit1 = parseInt(limit as any) || 10;
      
        const books = await prisma.book.findMany({
          skip: page1 * limit1,
          take: limit1,
          include: {
            author: true, 
        },
        });
      
        return books
        
    } catch (error) {
        console.error("Error fetching books:", error);
        throw new Error ("An error occurred while fetching books. Please try again.")
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
            },
          });

          return books;
         
        
    } catch (error) {
        console.error("Error fetching books:", error);
        throw new Error ("An error occurred while fetching books. Please try again.")
    }


}

export const getBookById = async (id:any) => {
    try {
        const book = await prisma.book.findUnique({
            where: { id: parseInt(id as string) },
            include: {chapters : true}
          });
    
          return book 
    } catch (error) {
        console.error("Error fetching books:", error);
        throw new Error ("An error occurred while fetching books. Please try again.")
    }



}