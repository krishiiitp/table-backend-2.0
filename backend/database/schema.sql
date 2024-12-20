CREATE TABLE IF NOT EXISTS UserRegistration (
    UserID INT(10) AUTO_INCREMENT PRIMARY KEY,
    UserFname VARCHAR(50) NOT NULL,
    UserLname VARCHAR(50) NOT NULL,
    Address1 VARCHAR(255) NOT NULL,
    Address2 VARCHAR(255),
    Address3 VARCHAR(255),
    City VARCHAR(50) NOT NULL,
    StateVal VARCHAR(50) NOT NULL,
    Pincode INT(6) NOT NULL,
    Contact VARCHAR(15) NOT NULL,
    Email VARCHAR(255) UNIQUE NOT NULL
);

CREATE TABLE NGORegistration (
    NGOID INT(10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    NGOname VARCHAR(255) NOT NULL,
    Address_1 VARCHAR(255) NOT NULL,
    Address_2 VARCHAR(255) NULL,
    Address_3 VARCHAR(255) NULL,
    City VARCHAR(50) NOT NULL,
    StateVal VARCHAR(50) NOT NULL,
    Pincode INT(6) NOT NULL,
    Contact VARCHAR(15) NOT NULL,
    Email VARCHAR(255) NOT NULL UNIQUE,
    DescriptionVal TEXT NULL,
    Photo VARCHAR(255) NULL,
    Website VARCHAR(255) NULL,
    WorkID INT(10) NOT NULL,
    Proof VARCHAR(255) NOT NULL,
    FOREIGN KEY (`WorkID`) REFERENCES `NGOWorkingArea`(`WorkID`)
);

CREATE TABLE NGOWorkingArea (
    WorkID INT(10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    WorkingName VARCHAR(255) NOT NULL,
    Proof VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS ReviewsTable (
    ReviewID INT(10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    UserID INT(10) NOT NULL,
    NGOID INT(10) NOT NULL,
    Rating INT(1) NOT NULL,
    ReviewText TEXT NULL,
    CreatedAt DATE NOT NULL,
    FOREIGN KEY (`UserID`) REFERENCES `UserRegistration`(`UserID`),
    FOREIGN KEY (`NGOID`) REFERENCES `NGORegistration`(`NGOID`)
);

CREATE TABLE IF NOT EXISTS ContactUs (
    ContactID INT(10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    NameVal VARCHAR(255) NOT NULL,
    Email VARCHAR(255) NOT NULL,
    SubjectVal VARCHAR(255) NOT NULL,
    CreatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    StatusVal VARCHAR(50) NOT NULL
);

CREATE TABLE IF NOT EXISTS RoleMaster (
    RoleID INT(10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    RoleName VARCHAR(50) NOT NULL
);

CREATE TABLE IF NOT EXISTS RequestTable (
    ReqID INT(10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    UserID INT(10) NOT NULL,
    NGOID INT(10) NOT NULL,
    WorkID INT(10) NOT NULL,
    CreatedAt DATE NOT NULL,
    UpdatedAt DATE NOT NULL,
    StatusVal VARCHAR(50) NOT NULL,
    FOREIGN KEY (`UserID`) REFERENCES `UserRegistration`(`UserID`),
    FOREIGN KEY (`NGOID`) REFERENCES `NGORegistration`(`NGOID`),
    FOREIGN KEY (`WorkID`) REFERENCES `NGOWorkingArea`(`WorkID`)
);