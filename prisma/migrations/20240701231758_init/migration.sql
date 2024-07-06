-- CreateTable
CREATE TABLE "leads" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "name" TEXT
);

-- CreateTable
CREATE TABLE "likedMovies" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "Title" TEXT,
    "Year" TEXT,
    "Rated" TEXT,
    "Released" TEXT,
    "Runtime" TEXT,
    "Genre" TEXT,
    "Director" TEXT,
    "Writer" TEXT,
    "Actors" TEXT,
    "Plot" TEXT,
    "Language" TEXT,
    "Country" TEXT,
    "Awards" TEXT,
    "Poster" TEXT,
    "Metascore" TEXT,
    "imdbRating" TEXT,
    "imdbVotes" TEXT,
    "imdbID" TEXT NOT NULL,
    "Type" TEXT,
    "totalSeasons" TEXT,
    "Response" TEXT
);

-- CreateTable
CREATE TABLE "ratings" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "movieId" INTEGER NOT NULL,
    "Source" TEXT NOT NULL,
    "Value" TEXT NOT NULL,
    CONSTRAINT "ratings_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "likedMovies" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "leads_email_key" ON "leads"("email");

-- CreateIndex
CREATE UNIQUE INDEX "likedMovies_imdbID_key" ON "likedMovies"("imdbID");
