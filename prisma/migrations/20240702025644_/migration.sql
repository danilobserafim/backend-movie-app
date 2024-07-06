/*
  Warnings:

  - You are about to alter the column `movieId` on the `ratings` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ratings" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "movieId" INTEGER NOT NULL,
    "Source" TEXT NOT NULL,
    "Value" TEXT NOT NULL,
    CONSTRAINT "ratings_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "likedMovies" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_ratings" ("Source", "Value", "id", "movieId") SELECT "Source", "Value", "id", "movieId" FROM "ratings";
DROP TABLE "ratings";
ALTER TABLE "new_ratings" RENAME TO "ratings";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
