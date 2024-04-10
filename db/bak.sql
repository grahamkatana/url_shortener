-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 11, 2024 at 12:17 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `url_shortener`
--

-- --------------------------------------------------------

--
-- Table structure for table `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20240410192303-create-shortenedurl.js');

-- --------------------------------------------------------

--
-- Table structure for table `shortened_urls`
--

CREATE TABLE `shortened_urls` (
  `id` int(11) NOT NULL,
  `full_url` varchar(255) DEFAULT NULL,
  `shortened_url` varchar(255) DEFAULT NULL,
  `visits` int(11) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `shortened_urls`
--

INSERT INTO `shortened_urls` (`id`, `full_url`, `shortened_url`, `visits`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'https://www.google.com', 'Zj84uDnzv', 6, '2024-04-10 20:32:33', '2024-04-10 22:10:40', NULL),
(2, 'https://www.youtube.com', 'aIiDLt2cn', 0, '2024-04-10 20:38:20', '2024-04-10 20:38:20', NULL),
(3, 'https://www.projectbook.co.za', 'o9fWN-Ixy', 0, '2024-04-10 21:18:59', '2024-04-10 21:18:59', NULL),
(4, 'https://github.com/grahamkatana', 'HkW0j7Jyr', 0, '2024-04-10 21:57:50', '2024-04-10 21:57:50', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `shortened_urls`
--
ALTER TABLE `shortened_urls`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `shortened_url` (`shortened_url`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `shortened_urls`
--
ALTER TABLE `shortened_urls`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
