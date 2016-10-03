# Development Planning

## Technical Stack
* Back-end
  * Server
    * Ubuntu@16.04
    * Node.js@6.6.0
    * express.js@4.14.0
    * bower@1.7.9
  * Database
    * MariaDB@10.0.27
* Front-end
  * Engine
    * React.js@15.3.2
  * Javascript
    * jQuery@1.9.1
  * CSS
    * Bootstrap@3.3.7

## Development Functions
* xls, xlsx Upload / Parsing
* Parsing Data to Database
* Management File List
  * 파일 단위로 삭제하면 해당 데이터도 지워지게 (잘못된 업로드 롤백용)
* 적절한 SQL문으로 데이터 통계
* Single-page Application (Front-end / react)
* (사용자 인증)
* (통계나온 데이터를 xlsx로 export)

## Database Schema
* (Table : users)
```sql
CREATE TABLE `daae`.`users`(
  `idx` INT UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '사용자 인덱스',
  `email` VARCHAR(160) NOT NULL COMMENT '이메일',
  `password` VARCHAR(255) NOT NULL COMMENT '비밀번호',
  `name` VARCHAR(255) NOT NULL COMMENT '사용자 이름',
  PRIMARY KEY(`idx`),
  UNIQUE(`email`)
) ENGINE = InnoDB COMMENT = '사용자 정보';
```
* Table : files
```sql
CREATE TABLE `daae`.`files`(
  `idx` INT UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '인덱스',
  `filename` VARCHAR(255) NOT NULL COMMENT '파일 이름',
  `row_count` INT UNSIGNED NOT NULL COMMENT '데이터 갯수',
  `upload_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '업로드 날짜/시간',
  `delete_at` DATETIME NULL DEFAULT NULL COMMENT '삭제 날짜/시간',
  `delete_flag` BOOLEAN NOT NULL DEFAULT FALSE COMMENT '삭제 플레그',
  PRIMARY KEY(`idx`)
) ENGINE = InnoDB;
```
* Table : file_type1
```sql
CREATE TABLE `daae`.`file_type1`(
  `idx` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `file_idx` INT UNSIGNED NOT NULL,
  `order_where` VARCHAR(255) NULL DEFAULT NULL COMMENT '어디서 주문',
  `order_number` VARCHAR(255) NOT NULL COMMENT '주문번호',
  `order_at` DATETIME NULL,
  `price_total` INT NULL,
  `price_one` INT NULL,
  `order_name` VARCHAR(255) NULL,
  `order_call` VARCHAR(255) NULL,
  `order_phone` VARCHAR(255) NULL,
  `product_name` VARCHAR(255) NULL,
  `product_option` VARCHAR(255) NOT NULL COMMENT '주문 옵션',
  `product_count` INT NULL,
  `address` VARCHAR(255) NULL,
  PRIMARY KEY(`idx`)
) ENGINE = InnoDB;

ALTER TABLE `file_type1` ADD CONSTRAINT `file_idx_foreign_key` FOREIGN KEY (`file_idx`) REFERENCES `files`(`idx`) ON DELETE CASCADE ON UPDATE CASCADE;

```
