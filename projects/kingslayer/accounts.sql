-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Jun 01, 2015 at 08:13 AM
-- Server version: 5.6.17
-- PHP Version: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `accounts`
--

-- --------------------------------------------------------

--
-- Table structure for table `logins`
--

CREATE TABLE IF NOT EXISTS `logins` (
  `fName` varchar(50) NOT NULL,
  `lName` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `uName` varchar(10) NOT NULL,
  `pWord` varchar(10) NOT NULL,
  `charName` varchar(20) DEFAULT NULL,
  `checkPoint` int(2) DEFAULT NULL,
  `maxHealth` int(3) DEFAULT NULL,
  `hpRegen` int(5) DEFAULT NULL,
  `gold` int(10) DEFAULT NULL,
  `damage` int(3) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `logins`
--

INSERT INTO `logins` (`fName`, `lName`, `email`, `uName`, `pWord`, `charName`, `checkPoint`, `maxHealth`, `hpRegen`, `gold`, `damage`) VALUES
('Jeremy', 'De La Cruz', 'jdelacruz8876@bths.edu', 'jman', '1234', NULL, NULL, NULL, NULL, NULL, NULL),
('Qixin', 'Chen', 'qChen', 'qman', '12345', NULL, NULL, NULL, NULL, NULL, NULL),
('Raymond', 'Feng', 'rFeng', 'rman', '123', NULL, NULL, NULL, NULL, NULL, NULL),
('Mock', 'Fenyves', 'mFenyves', 'mman', '123456', NULL, NULL, NULL, NULL, NULL, NULL),
('TESTFNAME', '', 'TESTEMAIL', 'TESTUNAME', 'TESTPWORD', NULL, NULL, NULL, NULL, NULL, NULL),
('TESTFNAME', '', 'TESTEMAIL', 'TESTUNAME', 'TESTPWORD', NULL, NULL, NULL, NULL, NULL, NULL),
('first', 'last', 'mail', 'user', 'pass', NULL, NULL, NULL, NULL, NULL, NULL),
('1', '2', '3', '4', '5', NULL, NULL, NULL, NULL, NULL, NULL);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
