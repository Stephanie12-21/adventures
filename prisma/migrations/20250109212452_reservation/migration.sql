-- CreateTable
CREATE TABLE `reservation` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nom` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `phone1` VARCHAR(191) NOT NULL,
    `phone2` VARCHAR(191) NOT NULL,
    `date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `passengers` INTEGER NOT NULL,
    `adults` INTEGER NOT NULL,
    `children` INTEGER NULL,
    `babies` INTEGER NULL,
    `message` VARCHAR(191) NULL,
    `status` ENUM('pending', 'confirmed', 'canceled') NOT NULL DEFAULT 'pending',

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
