import SearchInput from "@/components/SearchInput";
import Header from "@/components/Header";

import SearchContent from "./components/SearchContent";
import { getBooksByAuthorOrTitle } from "@/lib/books";
import { PageWrapper } from "@/components/PageWrapper";

export const revalidate = 0;

interface SearchProps {
  searchParams: { title: string }
};

const Search = async ({ searchParams }: SearchProps) => {
  let books : any = []
  books = await getBooksByAuthorOrTitle(searchParams.title);
  return (
    <PageWrapper
      className="
        bg-neutral-900 
        rounded-lg 
        h-full 
        w-full 
        overflow-hidden 
        overflow-y-auto
      "
    >
      <Header className="from-bg-neutral-900" search={true}>
        <div className="mb-2 flex flex-col gap-y-6">
          <h1 className="text-white text-3xl font-semibold">
            Search
          </h1>
          <SearchInput />
        </div>
      </Header>
      <SearchContent books={books} />
  

    </PageWrapper>
  );
}

export default Search;