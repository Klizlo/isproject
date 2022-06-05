-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: localhost    Database: isprojekt
-- ------------------------------------------------------
-- Server version	8.0.28

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `databasechangelog`
--

DROP TABLE IF EXISTS `databasechangelog`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `databasechangelog` (
  `ID` varchar(255) NOT NULL,
  `AUTHOR` varchar(255) NOT NULL,
  `FILENAME` varchar(255) NOT NULL,
  `DATEEXECUTED` datetime NOT NULL,
  `ORDEREXECUTED` int NOT NULL,
  `EXECTYPE` varchar(10) NOT NULL,
  `MD5SUM` varchar(35) DEFAULT NULL,
  `DESCRIPTION` varchar(255) DEFAULT NULL,
  `COMMENTS` varchar(255) DEFAULT NULL,
  `TAG` varchar(255) DEFAULT NULL,
  `LIQUIBASE` varchar(20) DEFAULT NULL,
  `CONTEXTS` varchar(255) DEFAULT NULL,
  `LABELS` varchar(255) DEFAULT NULL,
  `DEPLOYMENT_ID` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `databasechangelog`
--

LOCK TABLES `databasechangelog` WRITE;
/*!40000 ALTER TABLE `databasechangelog` DISABLE KEYS */;
INSERT INTO `databasechangelog` VALUES ('1','Klizlo','database/2022-05-31/01-create-game.sql','2022-06-05 17:23:31',1,'EXECUTED','8:152b64730eaa6ab9312e6c63e4879313','sql','',NULL,'4.11.0',NULL,NULL,'4442611000'),('2','Klizlo','database/2022-05-31/02-create-tag.sql','2022-06-05 17:23:32',2,'EXECUTED','8:c150fc63c7c1dcd62c89c950fa7a15b6','sql','',NULL,'4.11.0',NULL,NULL,'4442611000'),('3','Klizlo','database/2022-05-31/03-create-developer.sql','2022-06-05 17:23:33',3,'EXECUTED','8:8595dccd799b3da0c3129a07a1f2f886','sql','',NULL,'4.11.0',NULL,NULL,'4442611000'),('4','Klizlo','database/2022-05-31/04-create-users.sql','2022-06-05 17:23:34',4,'EXECUTED','8:bcbf535dc3f87d57d87426198b2896fd','sql','',NULL,'4.11.0',NULL,NULL,'4442611000'),('5','Klizlo','database/2022-05-31/05-create-role.sql','2022-06-05 17:23:36',5,'EXECUTED','8:be05d71f30c02caedaceedf075de8355','sql','',NULL,'4.11.0',NULL,NULL,'4442611000'),('6','Klizlo','database/2022-05-31/06-create-game-tags.sql','2022-06-05 17:23:41',6,'EXECUTED','8:dd1710251191fff098afc555180e437e','sql','',NULL,'4.11.0',NULL,NULL,'4442611000'),('7','Klizlo','database/2022-05-31/07-create-game-developer.sql','2022-06-05 17:23:46',7,'EXECUTED','8:785c5005f9f13624c6353712504b3318','sql','',NULL,'4.11.0',NULL,NULL,'4442611000'),('8','Klizlo','database/2022-05-31/08-create-user-roles.sql','2022-06-05 17:23:51',8,'EXECUTED','8:ce0aa5eb3fe62fc09d68e3cd55cde7fb','sql','',NULL,'4.11.0',NULL,NULL,'4442611000'),('9','Klizlo','database/2022-05-31/09-create-role-data.sql','2022-06-05 17:23:51',9,'EXECUTED','8:22f5e7a64e574a2cc2a5a4c0039af79f','sql','',NULL,'4.11.0',NULL,NULL,'4442611000'),('10','Klizlo','database/2022-05-31/10-create-games-data.sql','2022-06-05 17:23:52',10,'EXECUTED','8:938fd3ba404ce9e2fbab9e010284b084','sql','',NULL,'4.11.0',NULL,NULL,'4442611000'),('11','Klizlo','database/2022-05-31/11-create-developer-data.sql','2022-06-05 17:23:52',11,'EXECUTED','8:76ece06aeb650a2c0eb32d7f6c99d79a','sql','',NULL,'4.11.0',NULL,NULL,'4442611000'),('12','Klizlo','database/2022-05-31/12-create-game-developer-data.sql','2022-06-05 17:23:52',12,'EXECUTED','8:dede7e28525a764b9342fceec7c77527','sql','',NULL,'4.11.0',NULL,NULL,'4442611000'),('13','Klizlo','database/2022-05-31/13-create-tag-data.sql','2022-06-05 17:23:52',13,'EXECUTED','8:d5266f45cb56c220f5ff2dfa03557ce8','sql','',NULL,'4.11.0',NULL,NULL,'4442611000'),('14','Klizlo','database/2022-05-31/14-create-game-tag-data.sql','2022-06-05 17:23:53',14,'EXECUTED','8:76e9420f74d1d837e2e74e58c056131f','sql','',NULL,'4.11.0',NULL,NULL,'4442611000'),('15','Klizlo','database/2022-06-01/15-alter-game.sql','2022-06-05 17:23:54',15,'EXECUTED','8:a0122732b606476c655e91ee8768f54b','sql','',NULL,'4.11.0',NULL,NULL,'4442611000'),('16','Klizlo','database/2022-06-02/16-create-user-data.sql','2022-06-05 17:23:54',16,'EXECUTED','8:c442591936f80720b588c37dcee2a862','sql','',NULL,'4.11.0',NULL,NULL,'4442611000'),('17','Klizlo','database/2022-06-02/17-create-user-role-data.sql','2022-06-05 17:23:54',17,'EXECUTED','8:ce6c84bba33838c8d99ced0b2a195060','sql','',NULL,'4.11.0',NULL,NULL,'4442611000');
/*!40000 ALTER TABLE `databasechangelog` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `databasechangeloglock`
--

DROP TABLE IF EXISTS `databasechangeloglock`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `databasechangeloglock` (
  `ID` int NOT NULL,
  `LOCKED` bit(1) NOT NULL,
  `LOCKGRANTED` datetime DEFAULT NULL,
  `LOCKEDBY` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `databasechangeloglock`
--

LOCK TABLES `databasechangeloglock` WRITE;
/*!40000 ALTER TABLE `databasechangeloglock` DISABLE KEYS */;
INSERT INTO `databasechangeloglock` VALUES (1,_binary '\0',NULL,NULL);
/*!40000 ALTER TABLE `databasechangeloglock` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `developer`
--

DROP TABLE IF EXISTS `developer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `developer` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(250) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=221 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `developer`
--

LOCK TABLES `developer` WRITE;
/*!40000 ALTER TABLE `developer` DISABLE KEYS */;
INSERT INTO `developer` VALUES (6,'24 Entertainment'),(179,'343 Industries'),(127,'4G'),(174,'Ac Games'),(148,'Afterthought LLC'),(58,'Amazon Games'),(122,'Asobo Studio'),(25,'Aspyr (Linux)'),(27,'Aspyr (Mac)'),(195,'Axolot Games'),(123,'BANDAI NAMCO Studios Inc.'),(104,'BeamNG'),(29,'Behaviour Interactive Inc.'),(185,'Berserk Games'),(52,'Bethesda Game Studios'),(129,'BioWare'),(113,'Black Matter Pty Ltd'),(105,'Blender Foundation'),(213,'Blue Byte'),(68,'Blue Mammoth Games'),(35,'Bohemia Interactive'),(210,'Broken Glass'),(19,'Bungie'),(168,'Capcom'),(40,'CAPCOM Co., Ltd.'),(188,'CarX Technologies, LLC'),(139,'CCP'),(51,'CD PROJEKT RED'),(108,'Cellar Door Games'),(181,'CenterPoint Gaming'),(150,'Chalcedony Network'),(90,'Codemasters'),(112,'Codetitle Entertainment Inc.'),(88,'Coffee Stain Studios'),(44,'Colossal Order Ltd.'),(182,'Complex Games'),(39,'ConcernedApe'),(167,'Crate Entertainment'),(80,'CREATIVE ASSEMBLY'),(143,'Creepy Jar'),(66,'Crytek'),(133,'Cygames, Inc.'),(92,'DashNet'),(178,'David Capello'),(137,'DenchiSoft'),(83,'DICE'),(10,'Digital Extremes'),(136,'Dragonrise Games'),(30,'Dread Hunger Team'),(128,'Duoyi Games'),(209,'EA Canada'),(20,'EA Canada & EA Romania'),(62,'Edmund McMillen'),(14,'Efecto Studios'),(119,'Empyrean'),(50,'Endnight Games Ltd'),(141,'Ensemble Studios'),(111,'Evil Mojo Games'),(142,'Expansive Worlds'),(12,'Facepunch Studios'),(197,'Fatshark'),(107,'Feral Interactive'),(81,'Feral Interactive (Linux)'),(79,'Feral Interactive (Mac)'),(26,'Firaxis Games'),(186,'Fishing Planet LLC'),(54,'Forgotten Empires'),(173,'Foulball Hangover'),(126,'FromSoftware'),(7,'FromSoftware Inc.'),(132,'FromSoftware, Inc.'),(120,'Frontier Developments'),(87,'Funcom'),(215,'FuturLab'),(130,'Gaggle Studios, Inc.'),(23,'Gaijin Entertainment'),(65,'Gamepires'),(145,'Games by Malcs'),(76,'Gearbox Software'),(77,'Ghost Ship Games'),(124,'Ghost Town Games Ltd.'),(49,'Giants Software'),(191,'Greensatellite'),(11,'Grinding Gear Games'),(138,'Hazelight'),(64,'Hello Games'),(2,'Hidden Path Entertainment'),(106,'Hopoo Games'),(165,'Humble North'),(189,'IGG SINGAPORE PTE. LTD.'),(214,'IMCGAMES Co.,Ltd.'),(100,'Innersloth'),(15,'Instinct Games'),(57,'Iron Gate AB'),(218,'It Takes Two Friend\'s Pass'),(146,'Jagex Ltd'),(205,'Joshua Chen'),(114,'Kabam Games, Inc.'),(118,'Keen Software House'),(72,'Kinetic Games'),(75,'Kitka Games'),(208,'KLab Inc.'),(38,'Klei Entertainment'),(151,'KOEI TECMO GAMES CO., LTD.'),(31,'Konami Digital Entertainment'),(4,'KRAFTON, Inc.'),(94,'Kunos Simulazioni'),(110,'Larian Studios'),(153,'Lavaflame2'),(71,'Leppsoft'),(217,'Lion Games Co., Ltd.'),(187,'Lion Shield, LLC'),(116,'Lo-Fi Games'),(45,'Ludeon Studios'),(74,'Maxis'),(89,'Mediatonic'),(78,'Mega Crit Games'),(101,'mestiez'),(180,'Miju Games'),(154,'MOB Games'),(171,'Motion Twin'),(220,'MyDockFinder'),(134,'New World Interactive'),(61,'Nicalis, Inc.'),(82,'Nimble Neuron'),(67,'Ninja Kiwi'),(170,'No Brakes Games'),(157,'Northwood Studios'),(156,'Numantian Games'),(192,'OBS Project'),(172,'Obsidian Entertainment'),(86,'Offworld Industries'),(93,'Orteil'),(34,'OVERKILL - a Starbreeze Studio.'),(190,'Owlcat Games'),(24,'Paradox Development Studio'),(42,'Paradox Tinto'),(204,'Pathea Games'),(53,'Pearl Abyss'),(196,'Playa Games GmbH'),(91,'Playground Games'),(177,'Playsaurus'),(33,'poncle'),(175,'PopCap'),(102,'PopCap Games, Inc.'),(43,'Psyonix LLC'),(201,'Pugstorm'),(152,'Qing Feng Beijing Technology'),(73,'Rare Ltd'),(202,'Rebellion'),(206,'Rebuilt Games'),(176,'Red Hook Studios'),(96,'Redbeet Interactive'),(103,'Relic Entertainment'),(5,'Respawn Entertainment'),(95,'RobTop Games'),(48,'Rockstar Games'),(3,'Rockstar North'),(211,'Rogue Planet Games'),(198,'Ruffian Games'),(99,'Russian Fishing'),(200,'Saber Interactive'),(219,'Samurai Games'),(98,'Sandbox Interactive GmbH'),(36,'SCS Software'),(207,'SEGA'),(97,'Sharkmob AB'),(169,'Shiro Games'),(140,'Skybox Labs'),(28,'Smartly Dressed Games'),(8,'Smilegate RPG'),(199,'Splash Damage'),(21,'Sports Interactive'),(183,'Squad'),(41,'Square Enix'),(121,'Statespace'),(13,'Studio Wildcard'),(9,'Stunlock Studios'),(144,'Supergiant Games'),(194,'System Era Softworks'),(63,'TaleWorlds Entertainment'),(55,'Tantalus Media'),(155,'Targem Games'),(84,'Team Cherry'),(125,'Team17'),(117,'Techland'),(37,'The Fun Pimps'),(60,'The Indie Stone'),(85,'Titan Forge Games'),(59,'TML Team'),(216,'Total Mayhem Games'),(193,'Treyarch'),(184,'Tripwire Interactive'),(149,'TT Games'),(164,'Turtle Rock Studios'),(159,'Ubisoft Bucharest'),(158,'Ubisoft Kiev'),(163,'Ubisoft Montpellier'),(17,'Ubisoft Montreal'),(161,'Ubisoft Quebec'),(160,'Ubisoft Shanghai'),(162,'Ubisoft Singapore'),(212,'Ubisoft Toronto'),(70,'Undead Labs'),(147,'Unknown Worlds Entertainment'),(135,'Urban Games'),(1,'Valve'),(16,'Virtual Basement LLC'),(32,'Visual Concepts'),(46,'VRChat Inc.'),(18,'Wallpaper Engine Team'),(47,'Wargaming Group Limited'),(203,'Warhorse Studios'),(22,'Wemade Next'),(56,'Wicked Witch'),(109,'World\'s Edge'),(69,'Wube Software LTD.'),(115,'Youthcat Studio'),(131,'Zenimax Online Studios'),(166,'鬼谷工作室');
/*!40000 ALTER TABLE `developer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `game`
--

DROP TABLE IF EXISTS `game`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `game` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `title` varchar(250) NOT NULL,
  `steamID` bigint NOT NULL,
  `metacritic` int DEFAULT NULL,
  `releaseDate` timestamp NULL DEFAULT NULL,
  `price` varchar(10) DEFAULT NULL,
  `requiredAge` int DEFAULT NULL,
  `currentPlayerCount` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UQ_game_steamid` (`steamID`)
) ENGINE=InnoDB AUTO_INCREMENT=241 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `game`
--

LOCK TABLES `game` WRITE;
/*!40000 ALTER TABLE `game` DISABLE KEYS */;
INSERT INTO `game` VALUES (1,'Dota 2',570,90,'2013-07-08 20:00:00',NULL,0,436937),(2,'Counter-Strike: Global Offensive',730,83,'2012-08-20 20:00:00',NULL,0,552725),(3,'Grand Theft Auto V',271590,96,'2015-04-12 20:00:00',NULL,17,76033),(4,'PUBG: BATTLEGROUNDS',578080,NULL,'2017-12-20 22:00:00',NULL,0,76033),(5,'Apex Legends™',1172470,88,'2020-11-03 22:00:00',NULL,0,206116),(6,'NARAKA: BLADEPOINT',1203220,71,'2021-08-10 20:00:00','89,90zł',0,176749),(7,'ELDEN RING',1245620,94,'2022-02-23 22:00:00','249,00zł',16,61667),(8,'Lost Ark',1599340,NULL,'2022-02-10 22:00:00',NULL,18,48954),(9,'V Rising',1604030,NULL,'2022-05-16 20:00:00','71,99zł',0,727976),(10,'Warframe',230410,69,'2013-03-24 22:00:00',NULL,18,66793),(11,'Path of Exile',238960,86,'2013-10-22 20:00:00',NULL,0,42522),(12,'Rust',252490,69,'2018-02-07 22:00:00','152,99zł',17,33197),(13,'ARK: Survival Evolved',346110,70,'2017-08-26 20:00:00','107,99zł',0,52174),(14,'Tom Clancy\'s Rainbow Six® Siege',359550,NULL,'2015-11-30 22:00:00','79,90zł',0,36582),(15,'Wallpaper Engine',431960,NULL,'2018-10-31 22:00:00','14,49zł',0,29458),(16,'Destiny 2',1085660,83,'2019-09-30 20:00:00',NULL,0,64461),(17,'FIFA 22',1506830,NULL,'2021-09-29 20:00:00','269,90zł',0,72260),(18,'Football Manager 2022',1569040,NULL,'2021-11-07 22:00:00','199,99zł',0,44647),(19,'MIR4',1623660,NULL,'2021-08-24 20:00:00',NULL,0,46419),(20,'War Thunder',236390,81,'2013-08-14 20:00:00',NULL,0,53996),(21,'Stellaris',281990,78,'2016-05-08 20:00:00','158,99zł',0,37916),(22,'Sid Meier’s Civilization® VI',289070,88,'2016-10-19 20:00:00','257,90zł',0,19239),(23,'Unturned',304930,NULL,'2017-07-06 20:00:00',NULL,0,30183),(24,'Dead by Daylight',381210,NULL,'2016-06-13 20:00:00','71,99zł',18,35095),(25,'Hearts of Iron IV',394360,83,'2016-06-05 20:00:00','158,99zł',0,26123),(26,'Dread Hunger',1418630,NULL,'2022-01-25 22:00:00','107,99zł',0,23308),(27,'Yu-Gi-Oh! Master Duel',1449850,NULL,'2022-01-17 22:00:00',NULL,0,38901),(28,'NBA 2K22',1644960,NULL,'2021-09-08 20:00:00','249,00zł',0,33806),(29,'Vampire Survivors',1794680,NULL,'2021-12-16 22:00:00','10,99zł',0,26755),(30,'Garry\'s Mod',4000,NULL,'2006-11-28 22:00:00','35,99zł',0,17682),(31,'PAYDAY 2',218620,79,'2013-08-12 20:00:00','17,99zł',18,24470),(32,'DayZ',221100,NULL,'2018-12-12 22:00:00','161,99zł',18,32397),(33,'Euro Truck Simulator 2',227300,79,'2012-10-11 20:00:00','79,99zł',0,22395),(34,'7 Days to Die',251570,NULL,'2013-12-12 22:00:00','89,99zł',0,14971),(35,'Don\'t Starve Together',322330,83,'2016-04-20 20:00:00','53,99zł',0,16085),(36,'Stardew Valley',413150,89,'2016-02-25 22:00:00','53,99zł',0,16306),(37,'Monster Hunter: World',582010,88,'2018-08-08 20:00:00','125,00zł',0,22871),(38,'FINAL FANTASY XIV Online',39210,83,'2014-02-17 22:00:00','41,99zł',16,13468),(39,'Europa Universalis IV',236850,87,'2013-08-12 20:00:00','158,99zł',0,14751),(40,'Rocket League®',252950,86,'2015-07-05 20:00:00',NULL,0,12831),(41,'Cities: Skylines',255710,85,'2015-03-05 22:00:00','119,99zł',0,12504),(42,'RimWorld',294100,87,'2018-10-16 20:00:00','124,99zł',0,14236),(43,'VRChat',438100,NULL,'2017-01-31 22:00:00',NULL,0,16068),(44,'World of Tanks Blitz',444200,NULL,'2016-11-08 22:00:00',NULL,0,16999),(45,'Red Dead Redemption 2',1174180,93,'2019-12-04 22:00:00','249,90zł',0,17234),(46,'Farming Simulator 22',1248130,NULL,'2021-11-20 22:00:00','179,99zł',0,14697),(47,'MONSTER HUNTER RISE',1446780,87,'2022-01-11 22:00:00','249,00zł',0,11678),(48,'Left 4 Dead 2',550,89,'2009-11-15 22:00:00','35,99zł',0,11104),(49,'Sid Meier\'s Civilization® V',8930,90,'2010-09-22 20:00:00','128,90zł',0,9770),(50,'The Forest',242760,83,'2018-04-29 20:00:00','71,99zł',18,12939),(51,'The Witcher® 3: Wild Hunt',292030,93,'2015-05-17 20:00:00','99,99zł',0,6068),(52,'The Elder Scrolls V: Skyrim Special Edition',489830,74,'2016-10-26 20:00:00','67,60zł',NULL,11076),(53,'Black Desert',582660,73,'2017-05-23 20:00:00','22,50zł',0,15248),(54,'Age of Empires II: Definitive Edition',813780,84,'2019-11-13 22:00:00','92,49zł',0,13594),(55,'Valheim',892970,NULL,'2021-02-01 22:00:00','71,99zł',0,10339),(56,'New World',1063730,70,'2021-09-27 20:00:00','142,99zł',0,10490),(57,'tModLoader',1281930,NULL,'2020-05-15 20:00:00',NULL,0,11926),(58,'Project Zomboid',108600,NULL,'2013-11-07 22:00:00','71,99zł',0,14205),(59,'The Binding of Isaac: Rebirth',250900,NULL,'2014-11-03 22:00:00','53,99zł',16,10395),(60,'Mount & Blade II: Bannerlord',261550,NULL,'2020-03-29 20:00:00','179,99zł',0,10657),(61,'No Man\'s Sky',275850,61,'2016-08-11 20:00:00','214,99zł',0,10230),(62,'Fallout 4',377160,84,'2015-11-08 22:00:00','79,00zł',17,15860),(63,'SCUM',513710,NULL,'2018-08-28 20:00:00','124,99zł',0,9977),(64,'Hunt: Showdown',594650,81,'2019-08-26 20:00:00','169,00zł',18,9697),(65,'Bloons TD 6',960090,NULL,'2018-12-16 22:00:00','35,99zł',0,7720),(66,'Crusader Kings III',1158310,91,'2020-08-31 20:00:00','198,99zł',0,10452),(67,'Arma 3',107410,74,'2013-09-11 20:00:00','119,99zł',0,14490),(68,'Brawlhalla',291550,NULL,'2017-10-16 20:00:00',NULL,0,8363),(69,'Factorio',427520,90,'2020-08-13 20:00:00','70,00zł',0,7778),(70,'State of Decay 2: Juggernaut Edition',495420,69,'2020-03-12 22:00:00','107,99zł',0,8669),(71,'Soundpad',629520,NULL,'2017-09-29 20:00:00','17,99zł',0,4507),(72,'Phasmophobia',739630,NULL,'2020-09-17 20:00:00','50,99zł',0,8561),(73,'Sea of Thieves',1172620,NULL,'2020-06-02 20:00:00','142,99zł',0,6001),(74,'The Sims™ 4',1222670,NULL,'2020-06-17 20:00:00','89,90zł',0,7457),(75,'Football Manager 2021',1263850,NULL,'2020-11-23 22:00:00',NULL,0,9795),(76,'Stumble Guys',1677740,NULL,'2021-10-06 20:00:00',NULL,0,9802),(77,'Counter-Strike',10,88,'2000-10-31 22:00:00','35,99zł',0,5855),(78,'Borderlands 3',397540,81,'2020-03-12 22:00:00','259,90zł',18,7451),(79,'Deep Rock Galactic',548430,85,'2020-05-12 20:00:00','107,99zł',0,5758),(80,'World of Warships',552990,81,'2017-11-14 22:00:00',NULL,0,5402),(81,'Slay the Spire',646570,89,'2019-01-22 22:00:00','89,99zł',0,9298),(82,'Total War: THREE KINGDOMS',779340,85,'2019-05-28 20:00:00','254,99zł',0,8177),(83,'Eternal Return',1049590,NULL,'2020-10-13 20:00:00',NULL,0,6719),(84,'Cyberpunk 2077',1091500,86,'2020-12-08 22:00:00','199,00zł',18,7546),(85,'Titanfall® 2',1237970,86,'2020-06-17 20:00:00','119,90zł',0,7152),(86,'Battlefield V',1238810,NULL,'2020-10-21 20:00:00','219,90zł',0,3960),(87,'Hollow Knight',367520,87,'2017-01-23 22:00:00','53,99zł',0,7598),(88,'SMITE®',386360,83,'2015-09-07 20:00:00',NULL,0,5788),(89,'Squad',393380,NULL,'2020-09-22 20:00:00','179,99zł',0,5451),(90,'Conan Exiles',440900,68,'2018-05-07 20:00:00','142,99zł',18,6063),(91,'Satisfactory',526870,NULL,'2020-06-07 20:00:00','99,00zł',0,5491),(92,'Total War: WARHAMMER II',594570,87,'2017-09-26 20:00:00','254,99zł',0,6564),(93,'Fall Guys: Ultimate Knockout',1097150,80,'2020-08-02 20:00:00','71,99zł',0,6936),(94,'F1® 2021',1134570,86,'2021-07-14 20:00:00','269,90zł',0,4863),(95,'Forza Horizon 4',1293830,NULL,'2021-03-08 22:00:00','214,99zł',0,4762),(96,'Cookie Clicker',1454400,NULL,'2021-08-31 20:00:00','17,99zł',0,12375),(97,'Assetto Corsa',244210,85,'2014-12-18 22:00:00','71,99zł',0,7735),(98,'Geometry Dash',322170,NULL,'2014-12-23 22:00:00','14,49zł',0,5833),(99,'Raft',648800,NULL,'2018-05-22 20:00:00','71,99zł',0,5584),(100,'Vampire: The Masquerade - Bloodhunt',760160,NULL,'2022-04-26 20:00:00',NULL,18,4434),(101,'Albion Online',761890,72,'2018-05-15 20:00:00',NULL,0,3824),(102,'Russian Fishing 4',766570,NULL,'2021-11-09 22:00:00',NULL,0,1951),(103,'Among Us',945360,85,'2018-11-15 22:00:00','17,99zł',0,5965),(104,'People Playground',1118200,NULL,'2019-07-22 20:00:00','35,99zł',0,3261),(105,'Battlefield 1 ™',1238840,NULL,'2020-06-10 20:00:00','179,90zł',18,5443),(106,'Plants vs. Zombies GOTY Edition',3590,87,'2009-05-04 20:00:00','17,99zł',0,4781),(107,'Company of Heroes 2',231430,80,'2013-06-24 20:00:00','71,99zł',18,7044),(108,'BeamNG.drive',284160,NULL,'2015-05-28 20:00:00','89,99zł',0,4590),(109,'Blender',365670,NULL,'2015-04-28 20:00:00',NULL,0,4824),(110,'Oxygen Not Included',457140,86,'2019-07-29 20:00:00','89,99zł',0,5960),(111,'Risk of Rain 2',632360,85,'2020-08-10 20:00:00','89,99zł',0,5752),(112,'Total War: WARHAMMER III',1142710,86,'2022-02-15 22:00:00','219,99zł',0,4927),(113,'Rogue Legacy 2',1253920,88,'2022-04-27 20:00:00','89,99zł',0,4192),(114,'Age of Empires IV',1466860,81,'2021-10-27 20:00:00','214,99zł',0,3624),(115,'Forza Horizon 5',1551360,NULL,'2021-11-07 22:00:00','249,90zł',0,4250),(116,'Divinity: Original Sin 2 - Definitive Edition',435150,93,'2017-09-13 20:00:00','161,99zł',0,5083),(117,'Paladins®',444090,83,'2018-05-07 20:00:00',NULL,0,6116),(118,'Idle Champions of the Forgotten Realms',627690,NULL,'2020-05-24 20:00:00',NULL,0,3920),(119,'Hell Let Loose',686810,79,'2021-07-26 20:00:00','142,99zł',0,5609),(120,'Farming Simulator 19',787860,73,'2018-11-18 22:00:00','69,99zł',0,3699),(121,'Fallout 76',1151340,NULL,'2020-04-13 20:00:00','169,90zł',18,3330),(122,'Shop Titans',1258080,NULL,'2020-05-04 20:00:00',NULL,0,4206),(123,'eFootball PES 2021 SEASON UPDATE',1259970,NULL,'2020-09-14 20:00:00',NULL,0,5346),(124,'Dyson Sphere Program',1366540,NULL,'2021-01-19 22:00:00','71,99zł',0,3215),(125,'Counter-Strike: Source',240,88,'2004-10-31 22:00:00','35,99zł',0,4615),(126,'Kenshi',233860,75,'2018-12-05 22:00:00','107,99zł',0,4598),(127,'Dying Light',239140,87,'2015-01-25 22:00:00','89,99zł',18,3557),(128,'Space Engineers',244850,NULL,'2019-02-27 22:00:00','71,99zł',0,3299),(129,'House Flipper',613100,68,'2018-05-16 20:00:00','89,99zł',0,3767),(130,'Planet Zoo',703080,81,'2019-11-04 22:00:00','161,99zł',0,3028),(131,'Aim Lab',714010,NULL,'2018-02-06 22:00:00',NULL,0,3552),(132,'Football Manager 2020',1100600,84,'2019-11-18 22:00:00',NULL,0,4239),(133,'Microsoft Flight Simulator Game of the Year Edition',1250410,91,'2020-04-16 20:00:00','259,00zł',0,4621),(134,'World of Tanks',1407200,80,'2021-04-27 20:00:00',NULL,0,5461),(135,'Total War™: ROME II - Emperor Edition',214950,76,'2013-09-01 20:00:00','254,99zł',0,922),(136,'TEKKEN 7',389730,82,'2017-05-31 20:00:00','149,90zł',0,3707),(137,'Dying Light 2 Stay Human',534380,NULL,'2022-02-02 22:00:00','199,99zł',0,3447),(138,'Overcooked! 2',728880,81,'2018-08-06 20:00:00','89,99zł',0,2934),(139,'Sekiro™: Shadows Die Twice - GOTY Edition',814380,88,'2019-03-20 22:00:00','254,00zł',17,2934),(140,'NGU IDLE',1147690,NULL,'2019-09-30 20:00:00',NULL,0,1626),(141,'Gunfire Reborn',1217060,NULL,'2021-11-16 22:00:00','71,99zł',0,3557),(142,'STAR WARS™: The Old Republic™',1286830,85,'2020-07-20 20:00:00',NULL,0,4028),(143,'Goose Goose Duck',1568590,NULL,'2021-10-02 20:00:00',NULL,0,2805),(144,'Mount & Blade: Warband',48700,78,'2010-03-30 20:00:00','29,99zł',0,3547),(145,'XCOM® 2',268500,88,'2016-02-03 22:00:00','214,90zł',0,1162),(146,'The Elder Scrolls® Online',306130,80,'2017-05-21 20:00:00','79,90zł',18,3399),(147,'DARK SOULS™ III',374320,89,'2016-04-10 20:00:00','199,99zł',0,3035),(148,'Shadowverse CCG',453480,NULL,'2016-10-26 20:00:00',NULL,0,10550),(149,'Insurgency: Sandstorm',581320,78,'2018-12-11 22:00:00','119,90zł',0,3039),(150,'Transport Fever 2',1066780,76,'2019-12-10 22:00:00','161,99zł',0,2995),(151,'YoloMouse',1283970,NULL,'2020-04-30 20:00:00','16,98zł',0,2474),(152,'VTube Studio',1325860,NULL,'2021-03-11 22:00:00',NULL,0,2968),(153,'It Takes Two',1426210,89,'2021-03-24 22:00:00','179,90zł',0,3837),(154,'EVE Online',8500,88,'2010-12-14 22:00:00',NULL,0,2891),(155,'Age of Empires II (2013)',221380,68,'2013-04-08 20:00:00','71,99zł',0,2265),(156,'American Truck Simulator',270880,76,'2016-02-01 22:00:00','79,99zł',0,3111),(157,'theHunter: Call of the Wild™',518790,NULL,'2017-02-15 22:00:00','71,99zł',0,2947),(158,'Yu-Gi-Oh! Duel Links',601510,NULL,'2017-11-15 22:00:00',NULL,0,3105),(159,'Green Hell',815370,78,'2019-09-04 20:00:00','89,99zł',0,2652),(160,'Hades',1145360,93,'2020-09-16 20:00:00','89,99zł',0,3519),(161,'Melvor Idle',1267910,NULL,'2021-11-17 22:00:00','35,99zł',0,1660),(162,'RuneScape ®',1343400,NULL,'2020-10-13 20:00:00',NULL,0,2853),(163,'eFootball™ 2022',1665460,NULL,'2021-09-28 20:00:00',NULL,0,3898),(164,'Borderlands 2',49520,89,'2012-09-19 20:00:00','128,90zł',17,3277),(165,'The Elder Scrolls V: Skyrim',72850,94,'2011-11-09 22:00:00','89,99zł',18,832),(166,'Subnautica',264710,87,'2018-01-22 22:00:00','107,99zł',0,2821),(167,'The Isle',376210,NULL,'2015-11-30 22:00:00','71,99zł',0,2666),(168,'LEGO® Star Wars™: The Skywalker Saga',920210,NULL,'2022-04-04 20:00:00','229,00zł',0,2666),(169,'觅长生',1189490,NULL,'2019-11-24 22:00:00','43,99zł',0,2046),(170,'Nioh 2 – The Complete Edition',1325200,86,'2021-02-04 22:00:00','179,99zł',18,2980),(171,'小黑盒加速器',1447430,NULL,'2021-05-23 20:00:00',NULL,0,2177),(172,'IdleOn - The Idle MMO',1476970,NULL,'2021-04-01 20:00:00',NULL,0,2551),(173,'Poppy Playtime',1721470,NULL,'2021-10-11 20:00:00',NULL,0,2340),(174,'Total War: MEDIEVAL II – Definitive Edition',4700,NULL,'2006-11-14 22:00:00','105,99zł',0,3641),(175,'Elite Dangerous',359320,80,'2015-04-01 20:00:00','107,99zł',0,3649),(176,'Crossout',386180,NULL,'2017-07-25 20:00:00',NULL,0,2429),(177,'They Are Billions',644930,77,'2019-06-17 20:00:00','107,99zł',0,2496),(178,'SCP: Secret Laboratory',700330,NULL,'2017-12-26 22:00:00',NULL,0,2805),(179,'Assassin\'s Creed® Odyssey',812140,NULL,'2018-10-04 20:00:00','249,90zł',0,2565),(180,'Back 4 Blood',924970,77,'2021-10-11 20:00:00','199,00zł',18,3105),(181,'Leaf Blower Revolution - Idle Game',1468260,NULL,'2020-12-03 22:00:00',NULL,0,2487),(182,'鬼谷八荒 Tale of Immortal',1468810,NULL,'2021-01-26 22:00:00','71,99zł',0,1650),(183,'Grim Dawn',219990,83,'2016-02-24 22:00:00','89,99zł',0,2694),(184,'Street Fighter V',310950,89,'2016-02-14 22:00:00','84,00zł',0,3228),(185,'Northgard',466560,81,'2018-03-06 22:00:00','107,99zł',0,2823),(186,'Human: Fall Flat',477160,70,'2016-07-21 20:00:00','71,99zł',0,2273),(187,'Dead Cells',588650,89,'2018-08-05 20:00:00','89,99zł',0,1924),(188,'Age of Empires III: Definitive Edition',933110,75,'2020-10-14 20:00:00','71,99zł',0,1973),(189,'Grounded',962130,NULL,'2020-07-27 20:00:00','107,99zł',0,3512),(190,'Hydroneer',1106840,NULL,'2020-05-07 20:00:00','35,99zł',0,2429),(191,'Cultivation Tales',1504570,NULL,'2022-04-13 20:00:00','59,99zł',0,3448),(192,'Plants vs. Zombies™ Garden Warfare 2: Deluxe Edition',1922560,82,'2022-05-15 20:00:00','129,90zł',0,1693),(193,'Darkest Dungeon®',262060,84,'2016-01-18 22:00:00','89,99zł',0,1577),(194,'Clicker Heroes',363970,NULL,'2015-05-12 20:00:00',NULL,0,1375),(195,'Aseprite',431730,NULL,'2016-02-21 22:00:00','71,99zł',0,1623),(196,'ROMANCE OF THE THREE KINGDOMS XIV',872410,NULL,'2020-01-14 22:00:00','214,99zł',0,2211),(197,'Dota Underlords',1046930,NULL,'2019-06-19 20:00:00',NULL,0,2555),(198,'NBA 2K21',1225330,NULL,'2020-09-02 20:00:00','259,00zł',0,2544),(199,'Halo Infinite',1240440,NULL,'2021-11-14 22:00:00',NULL,0,2481),(200,'The Planet Crafter',1284190,NULL,'2022-03-23 22:00:00','71,99zł',0,2520),(201,'Crosshair X',1366800,NULL,'2020-08-16 20:00:00','14,49zł',0,2531),(202,'Warhammer 40,000: Chaos Gate - Daemonhunters',1611910,81,'2022-05-04 20:00:00','161,99zł',18,2625),(203,'Kerbal Space Program',220200,88,'2015-04-26 20:00:00','171,90zł',0,1937),(204,'Killing Floor 2',232090,75,'2016-11-17 22:00:00','107,99zł',18,2510),(205,'Tabletop Simulator',286160,NULL,'2015-06-04 20:00:00','71,99zł',0,1966),(206,'Fishing Planet',380600,NULL,'2017-08-24 20:00:00',NULL,0,2072),(207,'Kingdoms and Castles',569480,NULL,'2017-07-19 20:00:00','35,99zł',0,2262),(208,'CarX Drift Racing Online',635260,NULL,'2017-11-16 22:00:00','53,99zł',0,1974),(209,'Lords Mobile',1041320,NULL,'2019-06-01 20:00:00',NULL,0,2238),(210,'Pathfinder: Wrath of the Righteous',1184370,83,'2021-09-01 20:00:00','179,99zł',0,1180),(211,'Trimps',1877960,NULL,'2022-05-01 20:00:00',NULL,0,2354),(212,'OBS Studio',1905180,NULL,'2022-03-26 22:00:00',NULL,0,2147),(213,'Total War: EMPIRE – Definitive Edition',10500,90,'2009-03-03 22:00:00','105,99zł',0,1974),(214,'Crusader Kings II',203770,82,'2012-02-13 22:00:00',NULL,0,2497),(215,'Call of Duty®: Black Ops III',311210,73,'2015-11-04 22:00:00','254,80zł',18,2013),(216,'ASTRONEER',361420,NULL,'2019-02-04 22:00:00','107,99zł',0,2011),(217,'Scrap Mechanic',387990,NULL,'2016-01-18 22:00:00','71,99zł',0,1898),(218,'Shakes and Fidget',438040,NULL,'2016-02-23 22:00:00',NULL,0,2116),(219,'Warhammer: Vermintide 2',552500,82,'2018-03-07 22:00:00','107,99zł',0,1309),(220,'Halo: The Master Chief Collection',976730,NULL,'2019-12-02 22:00:00','142,99zł',0,1582),(221,'Core Keeper',1621690,NULL,'2022-03-07 22:00:00','46,99zł',0,2112),(222,'Total War: SHOGUN 2',34330,90,'2011-03-13 22:00:00','127,99zł',0,1765),(223,'Sniper Elite 4',312660,78,'2017-02-12 22:00:00','214,99zł',0,2036),(224,'Kingdom Come: Deliverance',379430,76,'2018-02-12 22:00:00','107,99zł',18,1496),(225,'My Time At Portia',666140,73,'2019-01-14 22:00:00','107,99zł',0,1911),(226,'SAO Utils: Beta',786520,NULL,'2018-03-13 22:00:00','14,49zł',0,1703),(227,'Pummel Party',880940,NULL,'2018-09-19 20:00:00','53,99zł',0,1713),(228,'Phantasy Star Online 2 New Genesis',1056640,NULL,'2020-08-04 20:00:00',NULL,0,2708),(229,'BLEACH Brave Souls',1201240,NULL,'2020-08-16 20:00:00',NULL,0,2410),(230,'EA SPORTS™ FIFA 21',1313860,NULL,'2020-10-07 20:00:00','269,90zł',0,501),(231,'Tap Ninja - Idle game',1891700,NULL,'2022-03-16 22:00:00',NULL,0,1959),(232,'PlanetSide 2',218230,84,'2012-11-19 22:00:00',NULL,0,1709),(233,'FOR HONOR™',304390,76,'2017-02-12 22:00:00','59,90zł',0,1423),(234,'Granado Espada',663090,NULL,'2017-10-14 20:00:00',NULL,0,2049),(235,'PowerWash Simulator',1290000,NULL,'2021-05-18 20:00:00','71,99zł',0,1273),(236,'We Were Here Forever',1341290,NULL,'2022-05-09 20:00:00','64,99zł',0,1833),(237,'Soulworker',1377580,NULL,'2021-05-11 20:00:00',NULL,0,1736),(238,'It Takes Two Friend\'s Pass',1504980,NULL,'2021-03-25 22:00:00',NULL,0,1389),(239,'Your Chronicle',1546320,NULL,'2021-04-20 20:00:00',NULL,0,718),(240,'MyDockFinder',1787090,NULL,'2021-11-24 22:00:00','14,49zł',0,1086);
/*!40000 ALTER TABLE `game` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `game_developers`
--

DROP TABLE IF EXISTS `game_developers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `game_developers` (
  `game_id` bigint DEFAULT NULL,
  `developer_id` bigint DEFAULT NULL,
  KEY `game_developers_id` (`developer_id`),
  KEY `developers_game_id` (`game_id`),
  CONSTRAINT `developers_game_id` FOREIGN KEY (`game_id`) REFERENCES `game` (`id`),
  CONSTRAINT `game_developers_id` FOREIGN KEY (`developer_id`) REFERENCES `developer` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `game_developers`
--

LOCK TABLES `game_developers` WRITE;
/*!40000 ALTER TABLE `game_developers` DISABLE KEYS */;
INSERT INTO `game_developers` VALUES (1,1),(2,2),(2,1),(3,3),(4,4),(5,5),(6,6),(7,7),(8,8),(9,9),(10,10),(11,11),(12,12),(13,13),(13,14),(13,15),(13,16),(14,17),(15,18),(16,19),(17,20),(18,21),(19,22),(20,23),(21,24),(22,25),(22,26),(22,27),(23,28),(24,29),(25,24),(26,30),(27,31),(28,32),(29,33),(30,12),(31,34),(32,35),(33,36),(34,37),(35,38),(36,39),(37,40),(38,41),(39,42),(39,24),(40,43),(41,44),(42,45),(43,46),(44,47),(45,48),(46,49),(47,40),(48,1),(49,26),(49,25),(49,27),(50,50),(51,51),(52,52),(53,53),(54,54),(54,55),(54,56),(55,57),(56,58),(57,59),(58,60),(59,61),(59,62),(60,63),(61,64),(62,52),(63,65),(64,66),(65,67),(66,24),(67,35),(68,68),(69,69),(70,70),(71,71),(72,72),(73,73),(74,74),(75,21),(76,75),(77,1),(78,76),(79,77),(80,47),(81,78),(82,79),(82,80),(82,81),(83,82),(84,51),(85,5),(86,83),(87,84),(88,85),(89,86),(90,87),(91,88),(92,79),(92,81),(92,80),(93,89),(94,90),(95,91),(96,92),(96,93),(97,94),(98,95),(99,96),(100,97),(101,98),(102,99),(103,100),(104,101),(105,83),(106,102),(107,79),(107,103),(107,81),(108,104),(109,105),(110,38),(111,106),(112,80),(112,107),(113,108),(114,109),(114,103),(115,91),(116,110),(117,111),(118,112),(119,113),(120,49),(121,52),(122,114),(123,31),(124,115),(125,1),(126,116),(127,117),(128,118),(129,119),(130,120),(131,121),(132,21),(133,122),(134,47),(135,80),(136,123),(137,117),(138,124),(138,125),(139,126),(140,127),(141,128),(142,129),(143,130),(144,63),(145,26),(145,81),(145,79),(146,131),(147,132),(148,133),(149,134),(150,135),(151,136),(152,137),(153,138),(154,139),(155,2),(155,54),(155,140),(155,141),(156,36),(157,142),(158,31),(159,143),(160,144),(161,145),(162,146),(163,31),(164,25),(164,27),(164,76),(165,52),(166,147),(167,148),(168,149),(169,150),(170,151),(171,152),(172,153),(173,154),(174,80),(174,81),(174,79),(175,120),(176,155),(177,156),(178,157),(179,17),(179,158),(179,159),(179,160),(179,161),(179,162),(179,163),(180,164),(181,165),(182,166),(183,167),(184,168),(185,169),(186,170),(187,171),(188,54),(188,55),(189,172),(190,173),(191,174),(192,175),(193,176),(194,177),(195,178),(196,151),(197,1),(198,32),(199,179),(200,180),(201,181),(202,182),(203,183),(204,184),(205,185),(206,186),(207,187),(208,188),(209,189),(210,190),(211,191),(212,192),(213,79),(213,80),(213,81),(214,24),(215,27),(215,193),(216,194),(217,195),(218,196),(219,197),(220,198),(220,199),(220,19),(220,179),(220,200),(221,201),(222,80),(222,79),(222,81),(223,202),(224,203),(225,204),(226,205),(227,206),(228,207),(229,208),(230,209),(231,210),(232,211),(233,161),(233,212),(233,17),(233,213),(234,214),(235,215),(236,216),(237,217),(238,218),(239,219),(240,220);
/*!40000 ALTER TABLE `game_developers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `game_tags`
--

DROP TABLE IF EXISTS `game_tags`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `game_tags` (
  `game_id` bigint DEFAULT NULL,
  `tag_id` bigint DEFAULT NULL,
  KEY `game_tag_id` (`tag_id`),
  KEY `tag_game_id` (`game_id`),
  CONSTRAINT `game_tag_id` FOREIGN KEY (`tag_id`) REFERENCES `tag` (`id`),
  CONSTRAINT `tag_game_id` FOREIGN KEY (`game_id`) REFERENCES `game` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `game_tags`
--

LOCK TABLES `game_tags` WRITE;
/*!40000 ALTER TABLE `game_tags` DISABLE KEYS */;
INSERT INTO `game_tags` VALUES (1,1),(1,2),(1,3),(2,2),(2,3),(3,2),(3,4),(4,2),(4,5),(4,4),(4,3),(5,3),(5,2),(5,4),(6,5),(6,4),(6,2),(7,6),(7,2),(8,3),(8,5),(8,6),(8,4),(8,2),(9,5),(9,7),(9,2),(9,4),(10,2),(10,3),(10,6),(11,4),(11,6),(11,5),(11,2),(11,8),(11,3),(12,6),(12,2),(12,5),(12,8),(12,4),(13,6),(13,8),(13,2),(13,5),(13,4),(14,2),(15,9),(15,8),(15,10),(15,11),(15,12),(15,13),(16,4),(16,2),(16,3),(17,14),(17,15),(18,15),(18,14),(19,3),(19,4),(19,6),(19,2),(19,5),(20,14),(20,5),(20,3),(20,2),(21,14),(21,1),(22,1),(23,8),(23,4),(23,13),(23,2),(23,3),(24,2),(25,14),(25,1),(26,2),(26,4),(26,8),(27,3),(27,1),(27,14),(28,15),(28,14),(29,13),(29,8),(29,7),(29,2),(29,6),(30,8),(30,14),(31,2),(31,6),(32,5),(32,2),(32,4),(33,14),(33,8),(34,8),(34,7),(34,4),(34,1),(34,6),(34,14),(34,2),(35,14),(35,8),(35,4),(36,14),(36,6),(36,8),(37,2),(38,5),(38,6),(39,1),(39,14),(40,16),(40,15),(40,8),(40,2),(41,14),(41,1),(42,8),(42,1),(42,14),(43,15),(43,13),(43,7),(43,4),(43,5),(43,3),(43,14),(44,3),(44,5),(44,2),(45,4),(45,2),(46,14),(47,2),(48,2),(49,1),(50,8),(50,4),(50,14),(50,2),(51,6),(52,6),(53,1),(53,5),(53,2),(53,14),(53,4),(53,6),(54,1),(55,8),(55,2),(55,4),(55,6),(55,7),(56,5),(56,2),(56,4),(56,6),(57,6),(57,8),(57,3),(57,4),(57,2),(58,7),(58,6),(58,14),(58,8),(59,2),(60,7),(60,1),(60,6),(60,14),(60,2),(61,4),(61,2),(62,6),(63,4),(63,5),(63,8),(63,7),(63,2),(64,2),(65,1),(66,1),(66,14),(66,6),(67,1),(67,14),(67,2),(68,2),(68,8),(68,3),(69,1),(69,13),(69,14),(69,8),(70,14),(70,2),(70,6),(71,10),(71,17),(72,8),(72,2),(72,7),(73,2),(73,4),(74,14),(74,13),(75,15),(75,14),(76,8),(76,2),(76,13),(77,2),(78,2),(78,6),(79,2),(80,2),(80,14),(80,5),(80,3),(81,1),(81,8),(82,2),(82,1),(83,7),(83,3),(83,1),(83,8),(84,6),(85,2),(86,2),(87,4),(87,2),(87,8),(88,2),(88,3),(89,8),(89,1),(89,2),(90,5),(90,1),(90,4),(90,14),(90,2),(90,6),(91,8),(91,1),(91,4),(91,14),(91,7),(92,1),(92,2),(93,15),(93,5),(93,2),(93,8),(93,13),(94,15),(94,16),(94,14),(95,16),(96,1),(96,14),(96,8),(96,13),(97,8),(97,15),(97,14),(97,16),(98,8),(98,2),(99,8),(99,4),(99,14),(99,7),(100,2),(100,3),(101,3),(101,6),(101,5),(102,6),(102,15),(102,3),(102,5),(102,13),(102,14),(102,4),(103,13),(104,13),(104,14),(104,8),(104,2),(105,5),(105,2),(106,1),(107,1),(108,16),(108,14),(108,7),(109,12),(109,11),(109,18),(110,8),(110,14),(111,8),(111,2),(112,1),(112,2),(113,4),(113,6),(113,8),(113,2),(114,1),(115,16),(115,15),(115,2),(115,14),(115,4),(116,1),(116,6),(116,4),(117,2),(117,3),(118,1),(118,8),(118,2),(118,3),(118,4),(119,1),(119,5),(119,8),(119,14),(119,2),(120,14),(121,6),(122,3),(122,4),(122,6),(122,14),(122,13),(123,15),(124,8),(124,7),(124,14),(124,1),(125,2),(126,14),(126,1),(126,8),(126,2),(126,6),(127,2),(127,6),(128,14),(128,1),(128,8),(128,2),(129,14),(129,8),(130,14),(130,1),(130,13),(131,3),(131,14),(131,8),(131,4),(131,7),(131,2),(131,13),(132,15),(132,14),(133,14),(134,3),(134,5),(134,14),(134,2),(135,1),(136,15),(136,2),(137,6),(137,2),(137,4),(138,13),(138,2),(138,8),(139,4),(139,2),(140,4),(140,8),(140,14),(140,3),(141,4),(141,8),(141,6),(141,2),(142,6),(142,3),(142,5),(143,8),(143,1),(143,3),(143,5),(143,13),(144,6),(144,2),(145,1),(146,2),(146,5),(146,6),(146,4),(147,2),(148,1),(148,3),(149,2),(150,1),(150,14),(151,19),(151,20),(151,12),(151,11),(151,10),(152,18),(152,8),(152,12),(153,4),(153,2),(154,3),(154,6),(154,5),(154,1),(154,2),(155,1),(156,14),(156,8),(157,4),(157,14),(157,15),(158,3),(158,1),(159,4),(159,14),(159,8),(159,2),(160,6),(160,8),(160,2),(161,4),(161,6),(161,8),(161,13),(162,3),(162,6),(162,5),(163,3),(163,14),(163,15),(164,6),(164,2),(165,6),(166,8),(166,4),(167,5),(167,7),(167,8),(167,14),(167,2),(167,4),(168,2),(168,4),(169,6),(169,1),(169,7),(169,8),(170,6),(170,2),(171,21),(171,22),(171,20),(172,13),(172,14),(172,5),(172,6),(172,7),(172,3),(172,8),(173,2),(173,4),(173,8),(174,1),(175,1),(175,5),(175,4),(175,14),(175,6),(175,2),(176,5),(176,16),(176,3),(176,2),(177,1),(178,3),(178,2),(179,4),(179,6),(179,2),(180,2),(181,13),(181,8),(181,3),(182,7),(182,6),(182,8),(182,14),(182,2),(182,4),(183,6),(183,8),(183,2),(183,4),(184,2),(185,1),(185,8),(185,14),(186,8),(186,14),(186,13),(186,4),(187,8),(187,2),(188,1),(189,7),(189,2),(189,4),(190,8),(190,14),(190,1),(190,13),(190,4),(191,8),(191,7),(191,1),(191,6),(191,2),(191,4),(192,1),(192,2),(192,13),(193,1),(193,8),(193,6),(194,1),(194,8),(194,3),(194,14),(194,13),(194,6),(194,4),(195,21),(195,11),(195,12),(196,14),(197,1),(197,3),(197,13),(198,14),(198,15),(199,2),(199,3),(200,4),(200,7),(201,2),(201,10),(202,1),(202,6),(203,14),(203,8),(204,2),(205,14),(205,13),(205,8),(205,1),(205,6),(206,14),(206,15),(206,3),(206,5),(207,8),(207,14),(207,1),(208,14),(208,5),(208,15),(208,16),(209,5),(209,1),(209,6),(210,8),(210,1),(210,4),(210,6),(211,8),(211,1),(211,3),(211,13),(212,18),(212,10),(213,1),(214,14),(214,1),(214,3),(214,6),(215,4),(215,2),(216,8),(216,4),(217,14),(217,8),(217,7),(217,2),(217,4),(218,8),(218,5),(218,1),(218,3),(218,13),(218,4),(218,6),(219,8),(219,2),(220,2),(221,8),(221,7),(221,4),(221,13),(221,6),(222,1),(223,2),(223,4),(224,2),(224,4),(224,6),(225,14),(225,8),(225,4),(225,13),(225,6),(226,7),(226,10),(227,8),(227,2),(227,13),(228,5),(228,3),(228,2),(228,6),(229,3),(229,13),(229,2),(229,6),(230,14),(230,15),(231,8),(231,3),(231,2),(231,13),(231,6),(232,5),(232,3),(232,2),(233,2),(234,5),(234,3),(234,6),(235,14),(235,8),(235,7),(235,13),(236,8),(236,4),(236,13),(237,5),(237,3),(237,2),(237,6),(239,3),(239,6),(240,10);
/*!40000 ALTER TABLE `game_tags` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `role`
--

DROP TABLE IF EXISTS `role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `role` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `role`
--

LOCK TABLES `role` WRITE;
/*!40000 ALTER TABLE `role` DISABLE KEYS */;
INSERT INTO `role` VALUES (3,'ADMIN'),(2,'MANAGER'),(1,'USER');
/*!40000 ALTER TABLE `role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tag`
--

DROP TABLE IF EXISTS `tag`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tag` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tag`
--

LOCK TABLES `tag` WRITE;
/*!40000 ALTER TABLE `tag` DISABLE KEYS */;
INSERT INTO `tag` VALUES (2,'Action'),(4,'Adventure'),(12,'Animation & Modeling'),(17,'Audio Production'),(13,'Casual'),(11,'Design & Illustration'),(7,'Early Access'),(19,'Education'),(3,'Free to Play'),(21,'Game Development'),(8,'Indie'),(5,'Massively Multiplayer'),(9,'Photo Editing'),(16,'Racing'),(6,'RPG'),(14,'Simulation'),(20,'Software Training'),(15,'Sports'),(1,'Strategy'),(10,'Utilities'),(18,'Video Production'),(22,'Web Publishing');
/*!40000 ALTER TABLE `tag` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_roles`
--

DROP TABLE IF EXISTS `user_roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_roles` (
  `user_id` bigint DEFAULT NULL,
  `role_id` bigint DEFAULT NULL,
  KEY `user_role_id` (`role_id`),
  KEY `role_user_id` (`user_id`),
  CONSTRAINT `role_user_id` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  CONSTRAINT `user_role_id` FOREIGN KEY (`role_id`) REFERENCES `role` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_roles`
--

LOCK TABLES `user_roles` WRITE;
/*!40000 ALTER TABLE `user_roles` DISABLE KEYS */;
INSERT INTO `user_roles` VALUES (1,1),(1,3),(1,2),(2,2),(2,1),(3,1);
/*!40000 ALTER TABLE `user_roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `username` varchar(100) NOT NULL,
  `password` varchar(150) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'admin@admin.edu','$2a$10$Ow6/MI9gMk6wtvuVUsOlnO9eMrXJVJNiw4XUqjnMH2.BxMdbdSGqu'),(2,'manager@manager.edu','$2a$10$4u0FIJD.ePiEyHPCa5.gHeEgDoZoLbKinC2iIdR3BbeMTaMlLPhWO'),(3,'user@user.edu','$2a$10$lcy8oReHEHd7cf/AzlGXbOHZ49dpvSSgPMGhrIczcdXLGRnTYwBwa');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-06-05 17:28:51
