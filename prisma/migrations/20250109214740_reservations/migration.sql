/*
  Warnings:

  - You are about to drop the column `children` on the `reservation` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `reservation` DROP COLUMN `children`,
    ADD COLUMN `childrens` INTEGER NULL;
