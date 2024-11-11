-- Using the database
USE `DB_gestionPedidosOnline_2024`;

-- Inserting data into client table
INSERT INTO `client` (`name_client`, `pass_client`, `location_client`) VALUES
('Juan Pérez', '12345', 'Madrid'),
('María García', '67890', 'Barcelona'),
('Carlos López', '11111', 'Valencia'),
('Ana Martínez', '22222', 'Sevilla'),
('Luis Rodríguez', '33333', 'Bilbao');

-- Inserting data into product table
INSERT INTO `product` (`nombre_product`, `price_product`, `discount_product`, `season_product`) VALUES
('Tomates Orgánicos', 2.99, 10, 'Verano'),
('Manzanas Golden', 1.99, 5, 'Otoño'),
('Fresas Frescas', 3.50, 15, 'Primavera'),
('Naranjas Valencia', 2.50, 0, 'Invierno'),
('Aguacates', 4.99, 20, 'Todo el año');

-- Inserting data into shop table
INSERT INTO `shop` (`name_shop`, `location_shop`, `pass_shop`) VALUES
('Frutas del Campo', 'Madrid', 'FC001'),
('Mercado Central', 'Barcelona', 'MC002'),
('La Huerta', 'Valencia', 'LH003'),
('El Agricultor', 'Sevilla', 'EA004'),
('Verde Vida', 'Bilbao', 'VV005');

-- Inserting data into producer table
INSERT INTO `producer` (`name_producer`, `location_producer`) VALUES
('Finca Los Olivos', 'Granada'),
('Huertos del Norte', 'Navarra'),
('Productores Unidos', 'Murcia'),
('Agrícola del Este', 'Alicante'),
('Cultivos del Sur', 'Málaga');

-- Inserting data into orders table
INSERT INTO `orders` (`client_id`, `product_id`, `date_order`) VALUES
(1, 1, '2024-11-01'),
(2, 2, '2024-11-02'),
(3, 3, '2024-11-03'),
(4, 4, '2024-11-04'),
(5, 5, '2024-11-05');

-- Inserting data into sales table
INSERT INTO `sales` (`shop_id`, `client_id`) VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5);

-- Inserting data into buys table
INSERT INTO `buys` (`shop_id`, `producer_id`) VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5);

-- Inserting data into productions table
INSERT INTO `productions` (`producer_id`, `product_id`) VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5);