--liquibase formatted sql
--changeset Klizlo:16

INSERT INTO `users` VALUES (1,'admin@admin.edu','$2a$10$Ow6/MI9gMk6wtvuVUsOlnO9eMrXJVJNiw4XUqjnMH2.BxMdbdSGqu'),(2,'manager@manager.edu','$2a$10$4u0FIJD.ePiEyHPCa5.gHeEgDoZoLbKinC2iIdR3BbeMTaMlLPhWO'),(3,'user@user.edu','$2a$10$lcy8oReHEHd7cf/AzlGXbOHZ49dpvSSgPMGhrIczcdXLGRnTYwBwa');