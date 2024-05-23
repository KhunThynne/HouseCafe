-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               11.4.0-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Version:             12.6.0.6765
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for db_horoaholic
CREATE DATABASE IF NOT EXISTS `db_horoaholic` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;
USE `db_horoaholic`;

-- Dumping structure for table db_horoaholic.tbl_admins
CREATE TABLE IF NOT EXISTS `tbl_admins` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) DEFAULT NULL,
  `fullname` varchar(50) DEFAULT NULL,
  `password` longtext DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table db_horoaholic.tbl_admins: ~2 rows (approximately)
INSERT INTO `tbl_admins` (`id`, `username`, `fullname`, `password`) VALUES
	(1, 'admin', 'MERLIN XD', '$2b$10$YrjTATYEsrxDaZEnyOsHA.IBn/OY2PeBj2pVjIMSs.DFpM7jXPgxu');

-- Dumping structure for table db_horoaholic.tbl_auth
CREATE TABLE IF NOT EXISTS `tbl_auth` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userid` varchar(50) NOT NULL DEFAULT '0',
  `displayname` varchar(50) NOT NULL DEFAULT '0',
  `pictureurl` longtext NOT NULL,
  `statusmessage` varchar(50) DEFAULT NULL,
  `point` int(11) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`),
  UNIQUE KEY `userid` (`userid`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table db_horoaholic.tbl_auth: ~1 rows (approximately)
INSERT INTO `tbl_auth` (`id`, `userid`, `displayname`, `pictureurl`, `statusmessage`, `point`) VALUES
	(5, 'U0cf331492cd2b495e9cb78908ae021b0', 'โปรแกรมเมอร์เหมียวๆ', 'https://profile.line-scdn.net/0h9Ytr_HH7ZnZZC3H3RrsYCSlbZRx6ej9kdml-EDsDPRJiMiRwcWosEGQCOEI2bCJ0IWV-GGsKbERVGBEQR12aQl47O0dlOSYldGggkg', 'CEO.XD - DEV', 221);

-- Dumping structure for table db_horoaholic.tbl_config
CREATE TABLE IF NOT EXISTS `tbl_config` (
  `text_1` varchar(50) DEFAULT NULL,
  `text_2` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table db_horoaholic.tbl_config: ~0 rows (approximately)
INSERT INTO `tbl_config` (`text_1`, `text_2`) VALUES
	('ปิด', 'เผาคำทำนาย');

-- Dumping structure for table db_horoaholic.tbl_packgae
CREATE TABLE IF NOT EXISTS `tbl_packgae` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `price` int(11) NOT NULL DEFAULT 0,
  `receive` int(11) DEFAULT 0,
  `free` int(11) DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table db_horoaholic.tbl_packgae: ~6 rows (approximately)
INSERT INTO `tbl_packgae` (`id`, `price`, `receive`, `free`) VALUES
	(1, 19, 1, 0),
	(2, 95, 6, 1),
	(3, 190, 20, 10),
	(4, 570, 42, 12),
	(5, 1140, 90, 30);

-- Dumping structure for table db_horoaholic.tbl_prophecy
CREATE TABLE IF NOT EXISTS `tbl_prophecy` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `info` longtext NOT NULL,
  `temple_id` int(11) DEFAULT NULL,
  `number` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table db_horoaholic.tbl_prophecy: ~2 rows (approximately)
INSERT INTO `tbl_prophecy` (`id`, `info`, `temple_id`, `number`) VALUES
	(9, 'Lorem ipsum dolor sit amet consectetur. Erat aliquam eget tortor est senectus tincidunt. Facilisis vitae integer diam placerat purus pellentesque mauris facilisi. Odio non sit ac ultrices. Imperdiet ultricies nisl elementum tellus vivamus ac iaculis.', 4, 1),
	(10, 'TEST Number 2', 4, 2);

-- Dumping structure for table db_horoaholic.tbl_temple
CREATE TABLE IF NOT EXISTS `tbl_temple` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `img` varchar(150) DEFAULT NULL,
  `info` longtext DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table db_horoaholic.tbl_temple: ~3 rows (approximately)
INSERT INTO `tbl_temple` (`id`, `name`, `img`, `info`) VALUES
	(4, 'วัดหมั่นโหม่', 'https://horoaholic88.com/assets/images/measure/4.svg', '["หากจะพูดถึงวัดที่มีความเก่าแก่มากที่สุดวัดหนึ่งบนเกาะฮ่องกงคงต้องพูดถึงวัดหม่านโหมว เพราะเป็นวัดที่ได้รับการขึ้นทะเบียนเป็นสมบัติประจำฮ่องกง ซึ่งครั้งหนึ่งในอดีตวัดหม่านโหมว แห่งนี้ถูกสร้างขึ้นเพื่ออุทิศให้กับเทพแห่งวรรณกรรม คือ เทพเจ้าหมั่นไตกวั้น (หมั่น) และ เทพแห่งสงคราม คือ เทพเจ้าโหมวไตกวั้น (โม) จึงไม่ใช่เรื่องแปลกหากจะเห็นครอบครัวชาว ฮ่องกงพาลูกหลานมาไหว้ขอพรให้ประสบความสำเร็จเรื่องการเรียน หากใครต้องการกำลังใจ ความเป็นสิริมงคลในชีวิตการเรียนและการงานที่ก้าวหน้า มีวิธีการไหว้คือจุดเทียน ธูปเล็ก และธูปใหญ่ 3 ดอกเพื่อไหว้ขอพรและเผากระดาษไหว้เจ้า ดังนั้น วัดหม่านโหมวก็เป็นอีกหนึ่ง วัดที่ไม่ควรพลาด","วัดหมั่นโหม่"," (Hung Hom Kwun Yum Temple)"]'),
	(5, 'วัดหวังตาเซียน', 'https://horoaholic88.com/assets/images/measure/5.svg', '["เมื่อเจอเรื่องสับสนในชีวิต หรือการงานไม่เป็นดั่งใจ หลายคนมักจะเลือกพึ่งพาสิ่งศักดิ์สิทธิ์เพื่อรู้ คำทำนายดวงชะตา จะได้คิดหาลู่ทางล่วงหน้าไว้รับมือ จึงอาจเป็นเหตุผลให้ผู้คนจากทุกสารทิศทั่วโลก เดินทางมาเสี่ยงเซียมซีที่วัดหว่องไท่ซิน ที่มีการก่อสร้างมานานกว่าร้อยปี และเป็นที่นิยมจากชื่อเสียง ด้านคำทำนายและเชื่อว่าจะประทานพรให้ทุกคำขอสมปรารถนา โดยที่บริเวณลานด้านในวัดหว่อง ไท่ซินนี้เองจะเห็นได้ว่ามีผู้คนหลากหลายนั่งคุกเข่าลงกับแท่นสีแดงเพื่อกราบไหว้และขอพร ซึ่งตาม ความเชื่อของชาวฮ่องกง เมื่อไหว้สิ่งศักดิ์สิทธิ์ให้ใช้ธูป 3 ดอก โดยไหว้เทพเจ้าแห่งกาลเวลา พระประจำปีนั้นๆ และไหว้พระประจำปีเกิด ซึ่งพระประจำปีเกิดนี้สามารถเลือกดูดูราศีปีเกิดได้จาก แผนภูมิของวัด โดยแต่ละราศีปีเกิดมีพระประจำปีอยู่ 5 องค์ด้วยกัน","วัดหวังตาเซียน"," (Wong Tai Sin Temple)"]'),
	(8, 'วัดกวนไท', 'https://horoaholic88.com/assets/images/measure/3.svg', '["wdwd","วัดกวนไท","(Kwan Tai Temple)"]');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
db_horoaholicdb_horoaholic