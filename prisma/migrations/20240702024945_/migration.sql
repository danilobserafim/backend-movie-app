-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ratings" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "movieId" TEXT NOT NULL,
    "Source" TEXT NOT NULL,
    "Value" TEXT NOT NULL,
    CONSTRAINT "ratings_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "likedMovies" ("imdbID") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_ratings" ("Source", "Value", "id", "movieId") SELECT "Source", "Value", "id", "movieId" FROM "ratings";
DROP TABLE "ratings";
ALTER TABLE "new_ratings" RENAME TO "ratings";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
