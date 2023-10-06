create database conexaoDB;

use conexaoDB ;


CREATE TABLE TB_CADASTRO_CLIENTE (
	id_cliente  INT PRIMARY KEY auto_increment,
	nm_nome varchar(200),
	ds_cpf varchar(11),
	ds_email varchar(200),
	ds_telefone varchar(200),
	ds_senha varchar(200)
);

INSERT INTO TB_CADASTRO_CLIENTE (NM_NOME,DS_CPF,DS_EMAIL,DS_TELEFONE,DS_SENHA) 
      VALUES           ('Gabriel' , '56743234565', 'adm@admin.com', '1193123123' ,'adm123');

select ds_email   email ,
       ds_senha  senha 
       from TB_CADASTRO_CLIENTE
       WHERE ds_email = 'adm@admin.com' and
			ds_senha  = 'adm123';

select * from TB_CADASTRO_CLIENTE ;



create table TB_LOGIN(
id_login int primary key auto_increment,
id_cliente int,
ds_email  varchar(200),
ds_senha varchar(200) ,


foreign key (ds_email) references   TB_CADASTRO_CLIENTE (ds_email),
foreign key (ds_senha) references   TB_CADASTRO_CLIENTE (ds_senha),
foreign key (id_cliente) references TB_CADASTRO_CLIENTE (id_cliente)
);

CREATE TABLE TB_PEDIDO (
	id_pedido int PRIMARY KEY AUTO_INCREMENT ,
	id_cliente int,
	id_endereco_entrega int,
	tp_forma_pagamento varchar(200),
	
    FOREIGN KEY (ID_CLIENTE) REFERENCES TB_CLIENTE (ID_CLIENTE)

);

create table TB_COMENTARIOS (
ID_COMENTARIO  INT PRIMARY KEY AUTO_INCREMENT ,
ID_CLIENTE INT,
ds_comentario varchar(200),

foreign key (ID_CLIENTE) REFERENCES TB_CLIENTE (ID_CLIENTE)
);



create table TB_PEDIDOS_REALIZADOS (
id_pedido_realizado int primary key auto_increment ,
id_cliente  int ,
id_img_cliente int ,	


foreign key (id_cliente) references TB_CADASTRO_CLIENTE (id_cliente),
foreign key (id_img_cliente) references TB_IMAGEM_CLIENTE (id_img_cliente)

);



create table TB_IMAGEM_CLIENTE (
ID_IMG_CLIENTE int primary key auto_increment,
ds_imagem_cliente varchar(200) ,
id_cliente int ,

foreign key (id_cliente) references TB_CADASTRO_CLIENTE (id_cliente) 
);




CREATE TABLE TB_ENDERECO (
	id_endereco int PRIMARY KEY AUTO_INCREMENT ,
	ds_cep varchar(200),
	ds_endereco varchar(200),
	nr_endereco varchar(200),
	ds_cidade varchar(200),
    ds_complemento varchar(200),
    ds_bairro varchar(200),
    ds_estado varchar(200)
);







 CREATE TABLE TB_PEDIDO_ITEM (
	id_pedido_item integer PRIMARY KEY AUTO_INCREMENT ,
	id_pedido int,
	id_produto int,
	qtd_items int,
    
    FOREIGN KEY (ID_PEDIDO) REFERENCES TB_PEDIDO (ID_PEDIDO),
	FOREIGN KEY (ID_PRODUTO) REFERENCES TB_PRODUTO (ID_PRODUTO)
);









 CREATE TABLE TB_PRODUTO (
	id_produto int PRIMARY KEY AUTO_INCREMENT ,
	id_categoria int ,
	nm_produto varchar(200),
	vl_preco_compra decimal (8.3),
    vl_preco_venda decimal (8.3),
	qtd_estoque integer,
    ds_codigo_produto varchar(200),
    
    FOREIGN KEY (ID_CATEGORIA) REFERENCES TB_CATEGORIA (ID_CATEGORIA)
);








CREATE TABLE TB_PRODUTO_IMAGEM (
	id_produto_imagem int PRIMARY KEY AUTO_INCREMENT ,
	id_produto int,
	img_produto varchar(200),
    
    FOREIGN KEY (ID_PRODUTO) REFERENCES TB_PRODUTO (ID_PRODUTO)
);



CREATE TABLE TB_CATEGORIA (
	id_categoria integer PRIMARY KEY AUTO_INCREMENT,
	nm_categoria varchar(200)
);







CREATE TABLE TB_ADMIN (
	id_admin int PRIMARY KEY AUTO_INCREMENT ,
	ds_email varchar(200),
	ds_senha varchar(200)
);


CREATE TABLE TB_CARTAO (
id_cartao  int primary key auto_increment ,
id_cliente int , 
nr_cartao  varchar(200) ,
ds_data_validade date ,
nr_cvv  int ,
nm_dn_cartao  varchar(200) ,
ds_sobrenome varchar (200) ,

foreign key (id_cliente) references TB_CADASTRO_CLIENTE (id_cliente)

);

create table TB_PAYPAL (
id_conta_paypal   int primary key auto_increment ,
id_cliente        int ,
ds_email         varchar(200),
ds_senha         varchar (200),		

foreign key (id_cliente) references TB_CADASTRO_CLIENTE (id_cliente)
);




