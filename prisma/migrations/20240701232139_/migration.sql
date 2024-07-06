-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_likedMovies" (
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
    "imdbID" TEXT,
    "Type" TEXT,
    "totalSeasons" TEXT,
    "Response" TEXT
);
INSERT INTO "new_likedMovies" ("Actors", "Awards", "Country", "Director", "Genre", "Language", "Metascore", "Plot", "Poster", "Rated", "Released", "Response", "Runtime", "Title", "Type", "Writer", "Year", "id", "imdbID", "imdbRating", "imdbVotes", "totalSeasons") SELECT "Actors", "Awards", "Country", "Director", "Genre", "Language", "Metascore", "Plot", "Poster", "Rated", "Released", "Response", "Runtime", "Title", "Type", "Writer", "Year", "id", "imdbID", "imdbRating", "imdbVotes", "totalSeasons" FROM "likedMovies";
DROP TABLE "likedMovies";
ALTER TABLE "new_likedMovies" RENAME TO "likedMovies";
CREATE UNIQUE INDEX "likedMovies_imdbID_key" ON "likedMovies"("imdbID");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
