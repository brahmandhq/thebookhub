
import Header from "../../components/Header";
import ListItem from "../../components/ListItem";
import PageContent from "./components/pageContent";
import { getBookById, getBooks, getBooksByAuthorOrTitle } from "@/lib/books";

export default async function Home() {
  const books = await getBooks({page:1, limit: 5});



// const chaps = await getChapterById(345)
// console.log("chapsss", chaps)
  // const booksIgot = await getBookById (5);
  // console.log("all books" ,booksIgot, booksIgot);
  return (
    <div  className="
    bg-neutral-900 
    rounded-lg 
    h-full 
    w-full
    overflow-hidden 
    overflow-y-auto
  ">
      <Header >
      <div className="mb-2">
          <h1 
            className="
            text-white 
              text-3xl 
              font-semibold
            ">
              Welcome back
          </h1>

          <div 
            className="
              grid 
              grid-cols-1 
              sm:grid-cols-2 
              xl:grid-cols-3 
              gap-4 
              mt-4
            "
          >
            <ListItem 
            name={"Liked Books"}             // name="Liked Songs" 
              image="/images/liked.png" 
              href="liked" 
            />
             <ListItem 
            name={"Liked Books"}             // name="Liked Songs" 
              image="/images/liked.png" 
              href="liked" 
            />
             <ListItem 
            name={"Liked Books"}             // name="Liked Songs" 
              image="/images/liked.png" 
              href="liked" 
            />
             <ListItem 
            name={"Liked Books"}             // name="Liked Songs" 
              image="/images/liked.png" 
              href="liked" 
            />
           
          </div>
          </div>
      </Header>
      <div className="mt-2 mb-7 px-6">
        <div className="flex justify-between items-center">
          <h1 className="text-white text-2xl font-semibold">
            Books Made For You
          </h1>
        </div>
        <PageContent books={books} />
      </div>
    </div>
  );
}
