-- Insert sample users
INSERT INTO `user` (`name_user`, `pass_user`, `location_user`, `type_user`) VALUES
('John Smith', '12345', 'New York', 'customer'),
('Maria Garcia', 'abc12', 'Los Angeles', 'customer'),
('David Brown', 'pass1', 'Chicago', 'premium'),
('Emma Wilson', 'key99', 'Houston', 'customer'),
('James Johnson', 'pwd23', 'Phoenix', 'premium');

-- Insert sample products
INSERT INTO `product` (`nombre_product`, `price_product`, `discount_product`, `season_product`) VALUES
('Organic Apples', 4.99, 0, 'Fall'),
('Fresh Tomatoes', 3.49, 10, 'Summer'),
('Local Honey', 8.99, 0, 'All'),
('Seasonal Berries', 6.99, 15, 'Spring'),
('Farm Fresh Eggs', 5.99, 5, 'All');

-- Insert sample shops
INSERT INTO `shop` (`name_shop`, `location_shop`, `pass_shop`, `type_shop`) VALUES
('Fresh Market', 'Manhattan', 'fm123', 'grocery'),
('Green Foods', 'Brooklyn', 'gf456', 'organic'),
('Local Harvest', 'Queens', 'lh789', 'farmers'),
('City Grocer', 'Bronx', 'cg321', 'general'),
('Natural Choice', 'Staten Island', 'nc654', 'organic');

-- Insert sample providers
INSERT INTO `provider` (`name_provider`, `location_provider`) VALUES
('Smith Family Farm', 'Upstate NY'),
('Green Valley Produce', 'New Jersey'),
('Sunset Orchards', 'Pennsylvania'),
('River View Dairy', 'Vermont'),
('Mountain Fresh Foods', 'Connecticut');

-- Insert sample orders
INSERT INTO `orders` (`user_id_orders`, `product_id_orders`, `delivery_date_orders`, `finished_orders`) VALUES
(1, 1, '2024-11-20 10:00:00', 0),
(2, 3, '2024-11-21 14:30:00', 1),
(3, 2, '2024-11-22 09:15:00', 0),
(4, 5, '2024-11-23 16:45:00', 1),
(5, 4, '2024-11-24 11:30:00', 0);

-- Insert sample sales relationships
INSERT INTO `sales` (`shop_id_sales`, `user_id_sales`) VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5);

-- Insert sample buys relationships
INSERT INTO `buys` (`shop_id_buys`, `provider_id_buys`) VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5);

-- Insert sample produce relationships
INSERT INTO `produce` (`provider_id_produce`, `product_id_produce`) VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5);