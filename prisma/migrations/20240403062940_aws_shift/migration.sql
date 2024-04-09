-- DropForeignKey
ALTER TABLE "Book" DROP CONSTRAINT "Book_authorId_fkey";

-- AlterTable
ALTER TABLE "Author" ALTER COLUMN "firstName" DROP NOT NULL,
ALTER COLUMN "lastName" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Book" ADD COLUMN     "imageLink" TEXT,
ADD COLUMN     "queue" INTEGER NOT NULL DEFAULT 99999999,
ALTER COLUMN "duration" DROP NOT NULL,
ALTER COLUMN "language" DROP NOT NULL,
ALTER COLUMN "copyright_year" DROP NOT NULL,
ALTER COLUMN "url_librivox" DROP NOT NULL,
ALTER COLUMN "authorId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Chapter" ALTER COLUMN "title" DROP NOT NULL,
ALTER COLUMN "reader" DROP NOT NULL,
ALTER COLUMN "duration" DROP NOT NULL;

-- CreateTable
CREATE TABLE "Genre" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Genre_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "picture" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_BookGenres" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Genre_name_key" ON "Genre"("name");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "_BookGenres_AB_unique" ON "_BookGenres"("A", "B");

-- CreateIndex
CREATE INDEX "_BookGenres_B_index" ON "_BookGenres"("B");

-- AddForeignKey
ALTER TABLE "Book" ADD CONSTRAINT "Book_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "Author"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BookGenres" ADD CONSTRAINT "_BookGenres_A_fkey" FOREIGN KEY ("A") REFERENCES "Book"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BookGenres" ADD CONSTRAINT "_BookGenres_B_fkey" FOREIGN KEY ("B") REFERENCES "Genre"("id") ON DELETE CASCADE ON UPDATE CASCADE;
