import Books from "@/components/Books";
import Header from "@/components/Header";
import { PageWrapper } from "@/components/PageWrapper";
import { getBooksByGenreId, getGenreNameById } from "@/lib/books";

const page = async ({ params }: { params: { id: string } }) => {
  const getAllBooks = await getBooksByGenreId(parseInt(params.id));
  const getGenre = await getGenreNameById(Number(params.id))

  return (
    <PageWrapper>
      <Header>
        {
          <h1 className='text-md font-medium text-white mt-[5vh]'>You are searching for the Genre: <span className='text-lg font-bold text-white mt-[5vh]'>{getGenre}</span> </h1>
        }

      </Header>
      <div className="m-2">
        {!getAllBooks || getAllBooks.length === 0 ? (
          <p className="text-xl font-bold">No Book Found</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5 gap-4 mt-4 p-4 mb-[10vh]">
            {getAllBooks.map((item) => (
              <Books key={item.id} data={item} />
            ))}
          </div>
        )}
      </div>
    </PageWrapper>
  );
};

export default page;