USE `DB_gestionPedidosOnline_2024`;

-- Inserting data into client table
INSERT INTO `client` (`name_client`, `pass_client`, `location_client`) VALUES
('Juan García', '12345', 'Madrid'),
('María López', '67890', 'Barcelona'),
('Carlos Martínez', 'abc12', 'Valencia'),
('Ana Rodríguez', 'def34', 'Sevilla'),
('Pedro Sánchez', 'ghi56', 'Bilbao');

-- Inserting data into product table
INSERT INTO `product` (`name_product`, `price_product`, `discount_product`, `season_product`) VALUES
('Tomates orgánicos', 2.99, 10, 'Verano'),
('Manzanas Golden', 1.99, 5, 'Otoño'),
('Fresas frescas', 3.50, 15, 'Primavera'),
('Naranjas Valencia', 2.50, 0, 'Invierno'),
('Aguacates', 4.99, 20, 'Todo el año');

-- Inserting data into shop table
INSERT INTO `shop` (`name_shop`, `location_shop`, `pass_shop`) VALUES
('FrutasMarket', 'Madrid Centro', '11111'),
('VerdePlus', 'Barcelona Norte', '22222'),
('EcoTienda', 'Valencia Sur', '33333'),
('BioFresh', 'Sevilla Este', '44444'),
('NaturShop', 'Bilbao Oeste', '55555');

-- Inserting data into producer table
INSERT INTO `producer` (`name_producer`, `location_producer`) VALUES
('Finca El Paraíso', 'Murcia'),
('Huertos Ecológicos', 'Granada'),
('Cultivos del Norte', 'Navarra'),
('Agricultores Unidos', 'Almería'),
('Orgánicos del Sur', 'Málaga');

-- Inserting data into orders table (using previously inserted IDs)
INSERT INTO `orders` (`client_id_client`, `product_id_producto`, `date_order`) VALUES
(1, 1, '2024-01-15'),
(2, 2, '2024-02-20'),
(3, 3, '2024-03-25'),
(4, 4, '2024-04-10'),
(5, 5, '2024-05-05');

-- Inserting data into sales table
INSERT INTO `sales` (`shop_id_shop`, `client_id_client`) VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5);

-- Inserting data into buys table
INSERT INTO `buys` (`shop_id_shop`, `producer_id_producer`) VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5);

-- Inserting data into productions table
INSERT INTO `productions` (`producer_id_producer`, `product_id_producto`) VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5);