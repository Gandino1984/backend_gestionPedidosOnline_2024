USE `DB_gestionPedidosOnline_2024`;

-- Insert clients
INSERT INTO `client` (`name_client`, `pass_client`, `location_client`) VALUES
('Juan Pérez', '12345', 'Madrid'),
('María García', '67890', 'Barcelona'),
('Luis Rodríguez', 'abc12', 'Valencia'),
('Ana Martínez', 'def34', 'Sevilla'),
('Carlos Sánchez', 'ghi56', 'Bilbao');

-- Insert products
INSERT INTO `product` (`nombre_producto`, `price_product`, `discount_product`, `season_product`) VALUES
('Tomates Orgánicos', 2.99, 0, 'Summer'),
('Manzanas Golden', 1.99, 10, 'Fall'),
('Lechugas Frescas', 1.50, 0, 'Spring'),
('Zanahorias', 1.25, 5, 'Winter'),
('Fresas', 3.99, 15, 'Spring'),
('Patatas', 2.50, 0, 'All'),
('Cebollas', 1.75, 0, 'All');

-- Insert shops
INSERT INTO `shop` (`name_shop`, `location_shop`, `pass_shop`) VALUES
('Mercado Central', 'Madrid', 'mc123'),
('Frutas y Verduras López', 'Barcelona', 'fv456'),
('El Huerto Feliz', 'Valencia', 'eh789'),
('La Plaza Verde', 'Sevilla', 'pv012'),
('Mercado del Puerto', 'Bilbao', 'mp345');

-- Insert producers
INSERT INTO `producer` (`name_producer`, `location_producer`) VALUES
('Finca Los Naranjos', 'Valencia'),
('Huerta Ecológica', 'Murcia'),
('Invernaderos del Sur', 'Almería'),
('Productos del Norte', 'Navarra'),
('Cultivos Orgánicos', 'La Rioja');

-- Insert orders (client-product relationships with dates)
INSERT INTO `orders` (`client_id_client`, `product_id_producto`, `date_order`) VALUES
(1, 1, '2024-01-15'),
(1, 3, '2024-01-15'),
(2, 2, '2024-02-01'),
(3, 4, '2024-02-15'),
(4, 5, '2024-03-01'),
(5, 1, '2024-03-15');

-- Insert sales (shop-client relationships)
INSERT INTO `sales` (`shop_id_shop`, `client_id_client`) VALUES
(1, 1),
(1, 2),
(2, 3),
(3, 4),
(4, 5);

-- Insert buys (shop-producer relationships)
INSERT INTO `buys` (`shop_id_shop`, `producer_id_producer`) VALUES
(1, 1),
(1, 2),
(2, 3),
(3, 4),
(4, 5);

-- Insert productions (producer-product relationships)
INSERT INTO `productions` (`producer_id_producer`, `product_id_producto`) VALUES
(1, 1),
(1, 2),
(2, 3),
(3, 4),
(4, 5),
(5, 6);