
import Header from "../../components/Header";
import ListItem from "../../components/ListItem";
import PageContent from "./components/pageContent";
import { getBookById, getBooks, getBooksByAuthorOrTitle } from "@/lib/books";
import { genres } from "@/data/genre";
import { FaPlus } from "react-icons/fa";
import { PageWrapper } from "@/components/PageWrapper";
import MoreGenreButton from "@/components/MoreGenreButton";
export default async function Home() {
  const books = await getBooks({page:0, limit: 25});

  return (
    <div className="
    bg-neutral-900 
    rounded-lg 
    max-h-full 
    w-full
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
            {
              genres.map((genre) => 
              <ListItem 
              key={genre.id}
                name={genre.title}             // name="Liked Songs" 
                image={genre.img} 
                href={genre.slug}
              />
              )
            }
         <MoreGenreButton />
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
