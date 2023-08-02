create database laptop_store;
use laptop_store;

create table roles(
	id_role int auto_increment primary key not null,
    name_role varchar(45)
);

insert into roles values (1, 'ROLE_ADMIN'), (2, 'ROLE_USER');

create table users(
	id_user int auto_increment primary key not null,
    full_name varchar(50) not null,
    email varchar(255)not null,
    `password` varchar(255) not null,
    number_phone varchar(20) not null
);

insert into users values (1, 'Nguyễn Văn A', 'admin@gmail.com', '$2a$12$ocMG4vfwCMrsEXJqhLWVi.FRuu9x/ahpjfVW3Fertl9LEal/DK7Nq', '0987654333'),-- 123456
(2, 'Nguyễn Văn B', 'user@gmail.com', '$2a$12$ftUKAlG804bIFnKmsozTSO7P7Wp0qURsFlYTc5LuZ1Og21UELXekG', '0987654344'); -- 654321
insert into users values (3, 'Nguyễn Văn C', 'user2@gmail.com', '$2a$12$/dybztGWiBdYiBzmgUTyrO5oe7ldeydRhBDF45fWwS7jXWFWXvtbq', '0987654321');-- 999999
create table user_role(
	id_user_role int auto_increment primary key not null,
    id_user int,
    id_role int,
    foreign key (id_user) references users(id_user),
    foreign key (id_role) references roles(id_role)
);

insert into user_role values (1,1,1), (2,2,2);
insert into user_role values (3,3,2);

create table category(
	id_category int auto_increment primary key not null,
    name_category varchar(50)
);

insert into category values (1, 'văn phòng'), (2, 'gaming'), (3, 'doanh nhân'), (4, 'đồ hoạ-kĩ thuật'), (5, 'sinh viên');

create table manufacturer(
	id_mft int auto_increment primary key not null,
    name_mft varchar(50),
    image_mft varchar(255)
);

insert into manufacturer values (2, 'apple', 'https://cdn.tgdd.vn/Brand/1/logo-macbook-149x40.png'), 
(3, 'asus', 'https://cdn2.cellphones.com.vn/x50,webp,q30/media/wysiwyg/Icon/brand_logo/Asus.png'), 
(4, 'acer', 'https://cdn2.cellphones.com.vn/x50,webp,q30/media/wysiwyg/Icon/brand_logo/acer.png'),
(5, 'dell', 'https://cdn2.cellphones.com.vn/x50,webp,q30/media/wysiwyg/Icon/brand_logo/Dell.png'), 
(6, 'hp', 'https://cdn2.cellphones.com.vn/x50,webp,q30/media/wysiwyg/Icon/brand_logo/HP.png'), 
(7, 'lenovo', 'https://cdn2.cellphones.com.vn/x50,webp,q30/media/wysiwyg/Icon/brand_logo/Lenovo.png'), 
(8, 'msi', 'https://cdn2.cellphones.com.vn/x50,webp,q30/media/wysiwyg/Icon/brand_logo/MSI.png');

create table laptop(
	id_laptop int auto_increment primary key not null,
    `cpu` varchar(255) DEFAULT NULL,
  price bigint(20) NOT NULL,
  quantity_storage int(11) NOT NULL,
  battery varchar(255) DEFAULT NULL,
  operation_system varchar(255) DEFAULT NULL,
  screen varchar(255) DEFAULT NULL,
  ram varchar(255) DEFAULT NULL,
  name_laptop varchar(255) DEFAULT NULL,
  design varchar(255) DEFAULT NULL,
  warranty varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  image varchar(255) DEFAULT NULL,
    id_category int,
    id_mft int,
    foreign key (id_category) references category(id_category),
    foreign key (id_mft) references manufacturer(id_mft)
);

INSERT INTO laptop VALUES (3,'Intel, Core i5, 1.8 Ghz',23990000,100,'5800mAh',' Mac Os',' 13.3 inch LED-backlit','8 GB, LPDDR3, 1600 Mhz','Macbook Air 13 128GB MQD32SA/A (2017)','thiết kế không thay đổi, vỏ nhôm sang trọng, siêu mỏng và siêu nhẹ','12 tháng','hiệu năng được nâng cấp, thời lượng pin cực lâu, phù hợp cho nhu cầu làm việc văn phòng nhẹ nhàng, không cần quá chú trọng vào hiển thị của màn hình','https://cdn2.cellphones.com.vn/x358,webp,q100/media/catalog/product/m/a/macbook-air-m1-2020-gold-600x600.jpg',1,2),
(4,' Intel, Core i5, 1.8 Ghz',28990000,100,'6000mAh','Mac Os','13.3 inch LED-backlit',' 8 GB, LPDDR3, 1600 Mhz','Macbook Air 13 256GB MQD42SA/A (2017)','thiết kế không thay đổi, vỏ nhôm sang trọng, siêu mỏng và siêu nhẹ','12 tháng','hiệu năng được nâng cấp, thời lượng pin cực lâu, phù hợp cho nhu cầu làm việc văn phòng nhẹ nhàng, không cần quá chú trọng vào hiển thị của màn hình','https://cdn2.cellphones.com.vn/x358,webp,q100/media/catalog/product/m/a/macbook_air_m2_1_1.jpg',1,2),
(5,'Intel, Core M3, 1.2 GHz',33990000,150,'6000mAh','Mac Os',' 12 inch LED-backlit','8 GB, LPDDR3, 1866 MHz','Macbook 12 256GB (2017)','thiết kế không có thay đổi so với phiên bản 2016 nhưng Apple đã nâng cấp thêm bộ nhớ và giới thiệu bộ vi xử lý Intel thế hệ thứ 7','12 tháng','Thiết kế hoàn mỹ tinh tế và sang trọng','https://cdn2.cellphones.com.vn/x358,webp,q100/media/catalog/product/m/a/macbook_air_m2_4_1_1.jpg',1,2),
(6,' Intel, Core i5, 2.3 GHz',33990000,200,'6000mAh','Mac Os',' 13.3 inch LED-backlit',' 8 GB, LPDDR3, 2133MHz','Macbook Pro 13 inch 128GB (2017)','thiết kế không thay đổi, vỏ nhôm sang trọng, siêu mỏng và siêu nhẹ','12 tháng','hiệu năng được nâng cấp, thời lượng pin cực lâu, phù hợp cho nhu cầu làm việc văn phòng nhẹ nhàng, không cần quá chú trọng vào hiển thị của màn hình','https://cdn2.cellphones.com.vn/x358,webp,q100/media/catalog/product/m/a/macbook_air_m2_4_1_1.jpg',1,2),
(7,'Intel, Core i5, 2.3GHz',44990000,100,'7000mAh','Mac Os','13.3 inch, Retina (2560 x 1600 pixels)','8 GB, LPDDR3, 2133 MHz','Macbook Pro 13 Touch Bar 256 GB (2018)','thiết kế không thay đổi, vỏ nhôm sang trọng, siêu mỏng và siêu nhẹ','12 tháng','hiệu năng được nâng cấp, thời lượng pin cực lâu, phù hợp cho nhu cầu làm việc văn phòng nhẹ nhàng, không cần quá chú trọng vào hiển thị của màn hình','https://cdn2.cellphones.com.vn/x358,webp,q100/media/catalog/product/m/a/macbook_air_m2_3_1_1.jpg',3,2),
(8,'Intel, Core i5, 2.3GHz',49990000,150,'7000mAh','Mac Os','13.3 inch, Retina (2560 x 1600 pixels)','8 GB, LPDDR3, 2133 MHz','Macbook Pro 13 Touch Bar 512 GB (2018)','thiết kế không thay đổi, vỏ nhôm sang trọng, siêu mỏng và siêu nhẹ','12 tháng','hiệu năng được nâng cấp, thời lượng pin cực lâu, phù hợp cho nhu cầu làm việc văn phòng nhẹ nhàng, không cần quá chú trọng vào hiển thị của màn hình','https://cdn2.cellphones.com.vn/x358,webp,q100/media/catalog/product/m/a/macbook_air_m2_3_1_1.jpg',1,2),
(9,'Intel, Core i7, 2.2GHz',59990000,200,'7000mAh','Mac Os','15.4 inch, Retina (2880 x 1800 pix','16GB, LPDDR4, 2400MHz','Macbook Pro 15 Touch Bar 256 GB (2018)','thiết kế không thay đổi, vỏ nhôm sang trọng, siêu mỏng và siêu nhẹ','12 tháng','hiệu năng được nâng cấp, thời lượng pin cực lâu, phù hợp cho nhu cầu làm việc văn phòng nhẹ nhàng, không cần quá chú trọng vào hiển thị của màn hình','https://cdn2.cellphones.com.vn/x358,webp,q100/media/catalog/product/m/a/macbook_air_m2_3_1_1.jpg',3,2),
(10,'Intel, Core i7, 2.2GHz',69990000,120,'7000mAh','Mac Os','15.4 inch, Retina (2880 x 1800 pi','16GB, LPDDR4, 2400MHz','Macbook Pro 15 Touch Bar 512 GB (2018)','thiết kế không thay đổi, vỏ nhôm sang trọng, siêu mỏng và siêu nhẹ','12 tháng','hiệu năng được nâng cấp, thời lượng pin cực lâu, phù hợp cho nhu cầu làm việc văn phòng nhẹ nhàng, không cần quá chú trọng vào hiển thị của màn hình','https://cdn2.cellphones.com.vn/x358,webp,q100/media/catalog/product/m/a/macbook_air_m2_3_1_1.jpg',3,2),-- macbook
(11,' Intel Celeron N3350',5490000,100,'7000','Windows 10','14 inch HD LED Glare',' 4 GB DDR3','Asus E402NA-GA034T','thiết kế với lớp vỏ bằng nhựa giúp cho máy trở nên nhẹ nhàng hơn','12 tháng','Bàn phím chiclet cùng Touchpad thông minh','https://cdn2.cellphones.com.vn/x358,webp,q100/media/catalog/product/_/0/_0005_21675_laptop_asus_x515ma_br481w.jpg',1,3),
(12,'Intel Celeron N3060',5490000,200,'7000','Windows 10','14.0 inch HD Ultra Slim 200nits','2 GB DDR3L 1600 MHz','Asus Vivobook E406SA-BV001T','thiết kế với lớp vỏ bằng nhựa giúp cho máy trở nên nhẹ nhàng hơn','12 tháng','Bàn phím chiclet cùng Touchpad thông minh','https://cellphones.com.vn/laptop-asus-vivobook-15-oled-a1505va-l1114w.html',1,3),
(13,'Intel Celeron N3060',5490000,200,'7000','Windows 10','14.0 inch HD Ultra Slim 200nits','2 GB DDR3 1600 MHz','Asus Vivobook E406SA-BV043T','thiết kế với lớp vỏ bằng nhựa giúp cho máy trở nên nhẹ nhàng hơn','12 tháng','gọn,nhẹ, độ bền cao','https://cdn2.cellphones.com.vn/x358,webp,q100/media/catalog/product/t/e/text_ng_n_5__2_2.png',5,3),
(14,'Intel Celeron N4000',6690000,120,'7000',' Windows 10','15.6 inch Anti-Glare LED Backlit',' 4 GB DDR4 2400 MHz','Asus Vivobook X507MA-BR208T/Celeron N4000','thiết kế với lớp vỏ bằng nhựa giúp cho máy trở nên nhẹ nhàng hơn','12 tháng','Thiết kế hoàn mỹ tinh tế và sang trọng','https://cdn2.cellphones.com.vn/x358,webp,q100/media/catalog/product/2/_/2_64_73.jpg',1,3),
(15,'Intel Pentium N4200',7290000,110,'6000','Windows 10','15.6 inch HD LED',' 4 GB, DDR3L, 1600 MHz','Asus X541NA-GO012T/Pentium N4200','thiết kế với lớp vỏ bằng nhựa giúp cho máy trở nên nhẹ nhàng hơn','12 tháng','Thiết kế hoàn mỹ tinh tế và sang trọng','https://cdn2.cellphones.com.vn/x358,webp,q100/media/catalog/product/2/_/2_230.png',1,3),
(16,'Intel, Core i3-6100U',8990000,130,'7000','Windows 10 Home','15.6 inch LED Backlight','4 GB DDR4 2133 MHz','Asus X541UA-XX272T/Core i3 6100U','thiết kế với lớp vỏ bằng nhựa giúp cho máy trở nên nhẹ nhàng hơn','12 tháng','Thiết kế hoàn mỹ tinh tế và sang trọng','https://cdn2.cellphones.com.vn/x358,webp,q100/media/catalog/product/v/i/vivobook_15_oled_x1505v_product_photo_1s_cool_silver__06_webcam_on.png',5,3),
(17,' Intel, Core i3, 2.0 GHz',8990000,200,'7000',' Free DOS','15.6 inchHD LED backlight','4 GB, DDR4, 2400MHz','Asus X541UA-GO1345','thiết kế với lớp vỏ bằng nhựa giúp cho máy trở nên nhẹ nhàng hơn','12 tháng','tinh tế đến từng chi tiết','https://cdn2.cellphones.com.vn/x358,webp,q100/media/catalog/product/t/e/text_ng_n_100__2.png',5,3),
(18,' Intel, Core i3, 2.0 GHz',10490000,300,'7000','Window 10',' 15.6 inchLED Backlight',' 4 GB, DDR4, 2400MHz','Asus X541UJ-DM544T/Core i3-6006U','thiết kế không thay đổi, vỏ nhôm sang trọng, siêu mỏng và siêu nhẹ','12 tháng','Thiết kế hoàn mỹ tinh tế và sang trọng','https://cdn2.cellphones.com.vn/x358,webp,q100/media/catalog/product/l/a/laptop-asus-vivobook-14x-oled-s3405va-km071w-12.png',1,3),  -- asus
(19,' Intel, Celeron, 1.10 GHz',5990000,300,'7000',' Linux','5.6 inchAcer CineCrystal LED',' 4 GB DDR3L 1333 MHz','Acer AS A315-31-C8GB','thiết kế không thay đổi, vỏ nhôm sang trọng, siêu mỏng và siêu nhẹ','12 tháng','Thiết kế hoàn mỹ tinh tế và sang trọng','https://cdn2.cellphones.com.vn/x358,webp,q100/media/catalog/product/d/o/download_1__10_8.png',5,4),
(20,' Intel Celeron N4000',6090000,100,'8000','Linux',' 15.6 inchs HD LED Backlight','4 GB DDR4 2133 MHz','Acer A315-32-C9A4 ','thiết kế không thay đổi, vỏ nhôm sang trọng, siêu mỏng và siêu nhẹ','12 tháng','Thiết kế hoàn mỹ tinh tế và sang trọng','https://cdn2.cellphones.com.vn/x358,webp,q100/media/catalog/product/_/0/_0005_aspire-7-600x600_2.jpg',5,4),
(21,' Intel Core i3-7020U',8990000,100,'8000',' Linux','14.0 inchs HD LED','4 GB DDR4 2400 MHz','Acer E5-476-33BQ','thiết kế không thay đổi, vỏ nhôm sang trọng, siêu mỏng và siêu nhẹ','12 tháng','Thiết kế hoàn mỹ tinh tế và sang trọng','https://cdn2.cellphones.com.vn/x358,webp,q100/media/catalog/product/_/0/_0004_vdieqpvslq-wjtgq_7hybxc4wfo-ehb2.jpg',5,4),
(22,' Intel Core i3-6006U',8990000,50,'5000','Linux','15.6 inch HD',' 4 GB DDR4 2133MHz','Acer A315-51-3932/Core i3-6006U','thiết kế không thay đổi, vỏ nhôm sang trọng, siêu mỏng và siêu nhẹ','12 tháng','Thiết kế hoàn mỹ tinh tế và sang trọng','https://cdn2.cellphones.com.vn/x358,webp,q100/media/catalog/product/_/0/_0004_acer_swift_3_sf314-43-r4x3_44c1f.jpg',1,4),
(23,'Intel Core i3-7020U',9390000,300,'6000','Linux','15.6 inchs HD LED Backlight','4 GB DDR4 2133 MHz','Acer AS A315-51-325E','thiết kế không thay đổi, vỏ nhôm sang trọng, siêu mỏng và siêu nhẹ','12 tháng','Thiết kế hoàn mỹ tinh tế và sang trọng','https://cdn2.cellphones.com.vn/x358,webp,q100/media/catalog/product/2/_/2_232.png',1,4),
(24,' Intel Core i3',9990000,130,'5000','Linux','15.6 inch  HD',' 4 GB DDR4 2133 MHz','Acer A315-51-364W','thiết kế không thay đổi, vỏ nhôm sang trọng, siêu mỏng và siêu nhẹ','12 tháng','Thiết kế hoàn mỹ tinh tế và sang trọng','https://cdn2.cellphones.com.vn/x358,webp,q100/media/catalog/product/l/a/laptop-gaming-acer-nitro-5-tiger-an515-58-773y-6.jpg',1,4),
(25,' Intel, Core i3, 2.4 Ghz',10690000,120,'5000','Free DOS',' 15.6 inchFull HD',' 4 GB, DDR4, 2133 MHz','Acer Aspire E5-575G-39QW','thiết kế không thay đổi, vỏ nhôm sang trọng, siêu mỏng và siêu nhẹ','12 tháng','Thiết kế hoàn mỹ tinh tế và sang trọng','https://cdn2.cellphones.com.vn/x358,webp,q100/media/catalog/product/_/0/_0003_60790_laptop_acer_gaming_nitro_5.jpg',1,4),
(26,' Intel Core i5-8250U',16990000,130,'6000',' Windows 10 Home','14.0 inchs FHD IPS LCD',' 4 GB DDR4 2133 MHz','Acer Swift SF314-52-55UF','thiết kế không thay đổi, vỏ nhôm sang trọng, siêu mỏng và siêu nhẹ','12 tháng','Thiết kế hoàn mỹ tinh tế và sang trọng','https://cdn2.cellphones.com.vn/x358,webp,q100/media/catalog/product/_/0/_0002_6969_63271_laptop_acer_swift_x_s.jpg',1,4),-- acer
(27,' Intel Pentium N3710',6990000,110,'5000',' Ubuntu','15.6 inchs HD Truelife',' 4 GB DDR3 1600 MHz','Dell Inspiron N3552','Thiết kế gọn gàng để di chuyển','12 tháng','Thiết kế hoàn mỹ tinh tế và sang trọng','https://cdn2.cellphones.com.vn/x358,webp,q100/media/catalog/product/v/f/vfgt77789_3.jpg',1,5),
(28,' Intel Pentium N3710',9990000,100,'5000','Ubuntu','15.6 inchs HD Truelife',' 4 GB DDR3 1600 MHz','Dell Inspiron N3567C','Thiết kế gọn gàng để di chuyển','12 tháng','Thiết kế hoàn mỹ tinh tế và sang trọng','https://cdn2.cellphones.com.vn/x358,webp,q100/media/catalog/product/_/0/_0004_6a7pyl_tg3fsygq7gaezm9mjcews-fjj.jpg',5,5),
(29,'Intel, Core i3, 2.0 GHz',9990000,100,'6000','Ubuntu 16.04','14 inchHD Anti-Glare LED','4 GB, DDR4, 2400MHz','Dell Inspiron N3467','Thiết kế gọn gàng để di chuyển','12 tháng','Thiết kế hoàn mỹ tinh tế và sang trọng','https://cdn2.cellphones.com.vn/x358,webp,q100/media/catalog/product/l/a/laptop-dell-vostro-5470_1_.png',3,5),
(30,' Intel Core i3-6006U',10890000,120,'7000','Linux','15.6 inchs',' 4 GB DDR4 2400 MHz','Dell Vostro 3568','Thiết kế gọn gàng để di chuyển','12 tháng','Thiết kế hoàn mỹ tinh tế và sang trọng','https://cdn2.cellphones.com.vn/x358,webp,q100/media/catalog/product/t/e/text_ng_n_18__5.png',1,5),
(31,' Intel, Core i3, 2.0 GHz',11190000,90,'6000',' Free DOS',' 15.6 inchHD LED',' 4 GB, DDR3L, 1600 Mhz','Dell Ins N3567','Thiết kế gọn gàng để di chuyển','12 tháng','Thiết kế hoàn mỹ tinh tế và sang trọng','https://images.thinkgroup.vn/unsafe/1000x1000/https://media-api-beta.thinkpro.vn/media/core/products/2022/12/19/xps%201.jpg',1,5),
(32,' Intel Core i3-7020U',11590000,80,'7000',' Ubuntu','15.6 inch HD Anti Glare LED','4 GB DDR4 2400 MHz','Dell Inspiron N3576','Thiết kế gọn gàng để di chuyển','12 tháng','Thiết kế hoàn mỹ tinh tế và sang trọng','https://images.thinkgroup.vn/unsafe/1000x1000/https://media-api-beta.thinkpro.vn/media/core/products/2022/9/30/dell-precision-5560-thinkpro-1.png',3,5),
(33,'Intel Core i3-7020U',11890000,110,'8000',' Windows 10 Home','15.6 inches Anti-Glare LED',' 4 GB DDR4 2400 MHz','Dell Vostro 3568','Thiết kế gọn gàng để di chuyển','12 tháng','Thiết kế hoàn mỹ tinh tế và sang trọng','https://images.thinkgroup.vn/unsafe/1000x1000/https://media-api-beta.thinkpro.vn/media/core/products/2022/9/30/dell-xps-13-9305-thinkpro-01.jpg',3,5),
(34,' Intel, Core i3, 2.40 GHz',12490000,100,'8000','Free DOS','14 inchHD Anti-Glare LED','4 GB, DDR4, 2133 MHz','Dell Vostro V5468/i3','Thiết kế gọn gàng để di chuyển','12 tháng','Thiết kế hoàn mỹ tinh tế và sang trọng','https://images.thinkgroup.vn/unsafe/1000x1000/https://media-api-beta.thinkpro.vn/media/core/products/2022/9/30/dell-inspiron-14-5425-thinkpro-1.png',3,5),-- dell 
(35,' Intel Celeron',5990000,100,'5000','Linux',' 15.6 inchs',' 4 GB DDR3L 1600 MHz','HP 15-bs644TU/Celeron-N3060','Thiết kế gọn gàng để di chuyển','12 tháng','Thiết kế hoàn mỹ tinh tế và sang trọng','https://images.thinkgroup.vn/unsafe/1000x1000/https://media-api-beta.thinkpro.vn/media/core/products/2022/9/29/hp-victus-15-2022-thinkpro-1.png',1,6),
(36,' Intel Celeron N4000',6190000,70,'7000',' Windows 10 Home',' 15.6 inchs HD HD SVA ',' 4 GB DDR4 2400 MHz','HP 15-da0107TU/Celeron','Thiết kế gọn gàng để di chuyển','12 tháng','Thiết kế hoàn mỹ tinh tế và sang trọng','https://images.thinkgroup.vn/unsafe/1000x1000/https://media-api-beta.thinkpro.vn/media/core/products/2022/11/8/hp-pavilion-14-x360-2022-thinkpro-01.png',1,6),
(37,' Intel Penitum N3710',6990000,120,'8000','Windows 10','15.6 inch',' 4GB DDR4','HP 15-bs648TU','Thiết kế gọn gàng để di chuyển','12 tháng','Thiết kế hoàn mỹ tinh tế và sang trọng','https://images.thinkgroup.vn/unsafe/1000x1000/https://media-api-beta.thinkpro.vn/media/core/products/2022/9/30/hp-zbook-firefly-15-g8-thinkpro-01.jpg',1,6),
(38,' Intel, Core i3, 2.0 GHz',8990000,80,'8000',' Free Dos','15.6 inch LED-backlit',' 4GB, DDR4, 2133 MHz','HP 15-bs555TU','Thiết kế gọn gàng để di chuyển','12 tháng','Thiết kế hoàn mỹ tinh tế và sang trọng','https://images.thinkgroup.vn/unsafe/1000x1000/https://media-api-beta.thinkpro.vn/media/core/products/2022/11/8/hp-pavilion-14-x360-2022-thinkpro-01.png',4,6),
(39,' Intel, Core i3, 2.0 GHz',10490000,90,'7000',' Free DOS',' 15.6 inchHD SVA BrightView',' 4 GB, DDR4, 2133 MHz','HP 15-bs637TX','Thiết kế gọn gàng để di chuyển','12 tháng','Thiết kế hoàn mỹ tinh tế và sang trọng','https://images.thinkgroup.vn/unsafe/1000x1000/https://media-api-beta.thinkpro.vn/media/core/products/2023/6/6/hp-elitebook-840-g7-thinkpro.jpg',4,6),
(40,' Intel Core i3-7100U',11490000,90,'6000',' Free DOS',' 15.6 inch',' 4GB DDR4','HP Pavilion 15-cc043TU','Thiết kế gọn gàng để di chuyển','12 tháng','Thiết kế hoàn mỹ tinh tế và sang trọng','https://images.thinkgroup.vn/unsafe/1000x1000/https://media-api-beta.thinkpro.vn/media/core/products/2023/7/25/hp-envy-13-x360-thinkpro.jpg',1,6),
(41,' Intel, Core i5, 2.50 GHz',12190000,100,'8000','Free DOS','15.6 inchHD SVA BrightView',' 4 GB, DDR4, 2133 MHz','HP 15-bs559TU','Thiết kế gọn gàng để di chuyển','12 tháng','Thiết kế hoàn mỹ tinh tế và sang trọng','https://images.thinkgroup.vn/unsafe/1000x1000/https://media-api-beta.thinkpro.vn/media/core/products/2022/9/30/hp-pavilion-15-intel-thinkpro-08.jpeg',1,6),
(42,' Intel Core i3-7100U',12990000,150,'7000','Windows 10 Home Single',' 11.6 inch HD',' 4 GB DDR4 2133 MHz','HP Pavilion X360 11','Thiết kế gọn gàng để di chuyển','12 tháng','Thiết kế hoàn mỹ tinh tế và sang trọng','https://images.thinkgroup.vn/unsafe/1000x1000/https://media-api-beta.thinkpro.vn/media/core/products/2022/9/30/hp-probook-440-g8-thinkpro-01.jpg',1,6),-- hp
(43,'Intel, Celeron, 1.10 GHz',4990000,100,'6000',' Windows 10 EM',' 11.6 inchHD LED',' 2 GB, LPDDR4, 2400MHz','Lenovo Ideapad 120S-11IAP','Thiết kế gọn gàng để di chuyển','6 tháng','Thiết kế hoàn mỹ tinh tế và sang trọng','https://laptopre.vn/upload/picture/picture-01688975864.jpg',4,7),
(44,' Intel, Pentium, 1.60 GHz',5490000,120,'5000',' Free DOS','14 inchHD LED backlight',' 4 GB, DDR3L, 1600 MHz','Lenovo IdeaPad 110','Thiết kế gọn gàng để di chuyển','6 tháng','Thiết kế hoàn mỹ tinh tế và sang trọng','https://laptopre.vn/upload/picture/picture-01688632542.jpg',4,7),
(45,' Intel, Pentium, 1.10 GHz',7490000,80,'7000',' Windows 10',' 11.6 inchHD TN AG TOUCH',' 4 GB, DDR3L, 1600 MHz','Lenovo Yoga 310-11IAP','Thiết kế gọn gàng để di chuyển','6 tháng','Thiết kế hoàn mỹ tinh tế và sang trọng','https://laptopre.vn/upload/picture/picture-01688519564.jpg',4,7),
(46,'Intel Core i3-6006U',8990000,120,'7000','FreeDOS',' 14.0 inchs HD LED',' 4 GB DDR4 2133 MHz','Lenovo Ideapad 320-14ISK ','Thiết kế gọn gàng để di chuyển','12 tháng','Thiết kế hoàn mỹ tinh tế và sang trọng','https://laptopre.vn/upload/picture/picture-01688178685.jpg',4,7),
(47,'Intel Core i5-8250U',10990000,130,'5000',' Windows 10 Home',' 14.0 inchs HD LED','4 GB DDR4 2133 MHz','Lenovo Ideapad 330-14IKBR','Thiết kế gọn gàng để di chuyển','12 tháng','Thiết kế hoàn mỹ tinh tế và sang trọng','https://laptopre.vn/upload/picture/picture-01687847952.jpg',4,7),
(48,' Intel, Core i5, 2.50 GHz',11290000,120,'5000','Linux',' 15.6 inchFull HD',' 4 GB, DDR4, 2133 MHz','Lenovo IdeaPad 310-15IKB','Thiết kế gọn gàng để di chuyển','12 tháng','Thiết kế hoàn mỹ tinh tế và sang trọng','https://laptopre.vn/upload/picture/picture-01687421435.jpg',4,7),
(49,' Intel Core i5-8250U',13490000,130,'6000','Linux',' 14.0 inchs FHD IPS','4 GB DDR4 2400 MHz','Lenovo Ideapad 330S-14IKBR','Thiết kế gọn gàng để di chuyển','12 tháng','Thiết kế hoàn mỹ tinh tế và sang trọng','https://laptopre.vn/upload/picture/picture-01687400966.jpg',4,7),
(50,' Intel, Core i5, 2.50 GHz',15990000,200,'7000','Windows 10 Single',' 15.6 inchAnti-Glare LED',' 4 GB, DDR4, 2133 MHz','Lenovo ThinkPad E570','Thiết kế gọn gàng để di chuyển','12 tháng','Thiết kế hoàn mỹ tinh tế và sang trọng','https://laptopre.vn/upload/picture/picture-31686194948.jpg',4,7),-- lenovo
(51,' Intel, Core i5, 2.50 GHz',18990000,300,'7000',' Free DOS',' 15.6 inchWide-View','4 GB, DDR4, 2133 MHz','MSI GL62M 7RDX – 1036XVN','Sỡ hữu phong cách thiết kế truyền thống của MSI','12 tháng','Lớp vỏ đen nhám được phủ cao su mềm đặc trưng đem đến trải nghiệm cầm nắm tốt hơn. Các thành phần của nắp máy bao gồm vỏ, màn hình và viền màn hình đều được ép chặt để tối ưu trọng lượng chỉ còn 2.2 kg','https://laptopre.vn/upload/picture/picture-01686294601.jpg',2,8),
(52,' Intel Core i5-8250U',20990000,120,'8000','Windows 10 Home','14.0 inchs FHD IPS 72%',' 8 GB DDR4 2666 MHz','MSI PS42 8M-296VN/i5-8250U','Sỡ hữu phong cách thiết kế truyền thống của MSI','12 tháng','Lớp vỏ đen nhám được phủ cao su mềm đặc trưng đem đến trải nghiệm cầm nắm tốt hơn. Các thành phần của nắp máy bao gồm vỏ, màn hình và viền màn hình đều được ép chặt để tối ưu trọng lượng chỉ còn 2.2 kg','https://laptopre.vn/upload/picture/picture-01684722516.jpg',2,8),
(53,' Intel Core i5-8300H',21490000,130,'7000',' Windows 10 Home','15.6 inchs Wideview 94%NTS','8 GB DDR4 2400MHz','MSI GV62 8RC-063VN/i5-8300H','Sỡ hữu phong cách thiết kế truyền thống của MSI','12 tháng','Lớp vỏ đen nhám được phủ cao su mềm đặc trưng đem đến trải nghiệm cầm nắm tốt hơn. Các thành phần của nắp máy bao gồm vỏ, màn hình và viền màn hình đều được ép chặt để tối ưu trọng lượng chỉ còn 2.2 kg','https://laptopre.vn/upload/picture/picture-01686111987.jpg',2,8),
(54,' Intel Core i5-8300H',22490000,140,'7000','Windows 10','15.6 inchs FullHD IPS 45% ',' 8 GB DDR4 2666 MHz','MSI GF63 8RC-203VN/I5-8300H','Sỡ hữu phong cách thiết kế truyền thống của MSI','12 tháng','Lớp vỏ đen nhám được phủ cao su mềm đặc trưng đem đến trải nghiệm cầm nắm tốt hơn. Các thành phần của nắp máy bao gồm vỏ, màn hình và viền màn hình đều được ép chặt để tối ưu trọng lượng chỉ còn 2.2 kg','https://laptopre.vn/upload/picture/picture-01680582800.jpg',2,8),
(55,' Intel, Core i7, 2.8 GHz',23990000,150,'8000','  DOS','  17.3 inch',' 8 GB, DDR4, 2400 MHz','MSI GL72M 7REX - 1427XVN','Sỡ hữu phong cách thiết kế truyền thống của MSI','12 tháng','Lớp vỏ đen nhám được phủ cao su mềm đặc trưng đem đến trải nghiệm cầm nắm tốt hơn. Các thành phần của nắp máy bao gồm vỏ, màn hình và viền màn hình đều được ép chặt để tối ưu trọng lượng chỉ còn 2.2 kg','https://laptopre.vn/upload/picture/picture-01686298930.jpg',2,8);-- msi 



create table orders(
	id_order int auto_increment primary key not null,
    address varchar(255),
    name_customer varchar(255),
    number_phone varchar(20),
    note varchar(255),
    date_order date,
    date_ship date,
    status_order varchar(50),
    id_user int,
    foreign key (id_user) references users(id_user)
);
alter table orders add column status_order varchar(50);
insert into orders values (1, 'Sơn Trà, Đà Nẵng', 'Nguyễn Văn A', '0987654321', 'giao trước trả tiền sau', curdate(), '2023-07-31', 2, 'chưa xử lý'),
	(2, 'Sơn Trà, Đà Nẵng', 'Nguyễn Văn C', '0987654321', 'giao trước trả tiền sau', curdate(), '2023-07-31', 3, 'order_detailchưa xử lý');
create table order_detail(
	id int auto_increment primary key not null,
    unit_price double,
    quantity int,
    id_laptop int,
    id_order int,
    foreign key (id_laptop) references laptop(id_laptop),
    foreign key (id_order) references orders(id_order)
);

insert into order_detail values (1, 23990000,1, 3, 1), (2, 57980000,2, 4, 1), (3, 15990000, 1, 50, 1),
(4, 33990000,1, 5, 2), (5, 33990000, 1, 6, 2), (6, 44990000, 1, 7, 2);

create table cart(
	id_cart int auto_increment primary key not null,
    id_user int,
    foreign key (id_user) references users(id_user)
);
INSERT INTO cart VALUES (1,1),(2,2);
create table index_cart(
	id_ic int auto_increment primary key not null,
    quantity_cart int,
    total bigint,
    id_cart int,
    id_laptop int,
    foreign key (id_cart) references cart(id_cart),
    foreign key (id_laptop) references laptop(id_laptop)
);

INSERT INTO index_cart VALUES (1,7,167930000,1,3),(2,1,28990000,1,4),(3,1,33990000,1,5),(4,2,67980000,1,6),(5,1,44990000,1,7),(6,1,49990000,2,8),(7,1,59990000,2,9);
