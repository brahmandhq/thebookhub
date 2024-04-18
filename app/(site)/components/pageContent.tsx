"use client"
import Books from "@/components/Books";


const PageContent: React.FC<any> = ({
  books
}) => {



  // if (books.length === 0) {
  //   return (
  //     <div className="mt-4 text-neutral-400">
  //       No books available.
  //     </div>
  //   )
  // }

  return ( 
    <div 
      className="
        grid 
        grid-cols-2 
        sm:grid-cols-3 
        md:grid-cols-3 
        lg:grid-cols-4 
        xl:grid-cols-4 
        gap-4
        mt-4
      "
    >
      {books.map((item: any, index: number) => (
  <Books
    key={index} 
    data={item}
  />
))}
    </div>
  );
}
 
export default PageContent;