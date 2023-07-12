create database laptop_store;
use laptop_store;

create table roles(
	id_role int auto_increment primary key not null,
    name_role varchar(45)
);

create table users(
	id_user int auto_increment primary key not null,
    full_name varchar(50) not null,
    email varchar(255)not null,
    `password` varchar(50) not null,
    number_phone varchar(20) not null
);

create table user_role(
	id_user_role int auto_increment primary key not null,
    id_user int,
    id_role int,
    foreign key (id_user) references users(id_user),
    foreign key (id_role) references roles(id_role)
);

create table category(
	id_category int auto_increment primary key not null,
    name_category varchar(50)
);

create table produce(
	id_produce int auto_increment primary key not null,
    name_produce varchar(50)
);

create table product(
	id_product int auto_increment primary key not null,
    `cpu` varchar(255) DEFAULT NULL,
    price int,
    battery varchar(25),
    operation_system varchar(25),
    screen varchar(25),
    ram varchar(25),
    name_product varchar(50),
    `description` varchar(255),
    id_category int,
    id_produce int,
    foreign key (id_category) references category(id_category),
    foreign key (id_produce) references produce(id_produce)
);

create table orders(
	id_order int auto_increment primary key not null,
    address varchar(255),
    name_customer varchar(255),
    number_phone varchar(20),
    `status` varchar(50),
    note varchar(255),
    id_user int,
    foreign key (id_user) references users(id_user)
);

create table order_detail(
	id int auto_increment primary key not null,
    unit_price double,
    quantity int,
    id_product int,
    id_order int,
    foreign key (id_product) references product(id_product),
    foreign key (id_order) references orders(id_order)
)