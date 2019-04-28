# ************************************************************
# Sequel Pro SQL dump
# Version 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: 127.0.0.1 (MySQL 5.5.5-10.1.21-MariaDB)
# Database: combat-okr
# Generation Time: 2019-04-26 02:05:50 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table keyresult
# ------------------------------------------------------------

DROP TABLE IF EXISTS `keyresult`;

CREATE TABLE `keyresult` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `content` varchar(255) DEFAULT NULL COMMENT '内容',
  `obj-id` int(11) DEFAULT NULL COMMENT '目标id',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

LOCK TABLES `keyresult` WRITE;
/*!40000 ALTER TABLE `keyresult` DISABLE KEYS */;

INSERT INTO `keyresult` (`id`, `content`, `obj-id`)
VALUES
	(1,'提高打字速度',1),
	(2,'页面高产程序员',1);

/*!40000 ALTER TABLE `keyresult` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table object
# ------------------------------------------------------------

DROP TABLE IF EXISTS `object`;

CREATE TABLE `object` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `content` varchar(255) DEFAULT '' COMMENT '目标内容',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

LOCK TABLES `object` WRITE;
/*!40000 ALTER TABLE `object` DISABLE KEYS */;

INSERT INTO `object` (`id`, `content`)
VALUES
	(1,'成为中级web前端工程师');

/*!40000 ALTER TABLE `object` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table todo
# ------------------------------------------------------------

DROP TABLE IF EXISTS `todo`;

CREATE TABLE `todo` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `kr-id` int(11) DEFAULT NULL COMMENT '成果id',
  `content` varchar(255) DEFAULT NULL COMMENT '每日任务',
  `create-time` timestamp NULL DEFAULT NULL COMMENT '创建时间',
  `done-time` timestamp NULL DEFAULT NULL COMMENT '完成时间',
  `status` int(11) DEFAULT NULL COMMENT '0完成1没完成',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

LOCK TABLES `todo` WRITE;
/*!40000 ALTER TABLE `todo` DISABLE KEYS */;

INSERT INTO `todo` (`id`, `kr-id`, `content`, `create-time`, `done-time`, `status`)
VALUES
	(1,1,'打字练习30分钟','2019-04-10 20:14:54','2019-04-11 20:14:54',0),
	(2,2,'html练习2小时','2019-04-10 20:14:51','2019-04-12 20:14:54',1);

/*!40000 ALTER TABLE `todo` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table user
# ------------------------------------------------------------

DROP TABLE IF EXISTS `user`;

CREATE TABLE `user` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT '' COMMENT '名字',
  `gender` int(11) DEFAULT NULL COMMENT '性别',
  `avataUrl` varchar(255) DEFAULT NULL COMMENT '头像',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;

INSERT INTO `user` (`id`, `name`, `gender`, `avataUrl`)
VALUES
	(1,'Owen',NULL,NULL);

/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
