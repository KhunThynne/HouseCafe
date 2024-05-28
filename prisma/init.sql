-- prisma/init.sql

-- สร้างตาราง users
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- สร้างตาราง products
CREATE TABLE IF NOT EXISTS products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL,
    stock INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- สร้างตาราง carts
CREATE TABLE IF NOT EXISTS carts (
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

-- สร้างตาราง cart_items
CREATE TABLE IF NOT EXISTS cart_items (
    id SERIAL PRIMARY KEY,
    cart_id INT NOT NULL,
    product_id INT NOT NULL,
    quantity INT DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (cart_id) REFERENCES carts(id) ON DELETE CASCADE,
    FOREIGN KEY (product_id) REFERENCES products(id)
);

-- เพิ่มข้อมูล initial data
INSERT INTO products (name, description, price, stock, created_at) VALUES
    ('Coffee', 'Delicious coffee from Colombia', 100.00, 20, NOW()),
    ('Tea', 'Premium black tea leaves', 50.00, 15, NOW()),
    ('Chocolate', 'Luxury Belgian chocolate bar', 120.00, 25, NOW()),
    ('Biscuit', 'Buttery and crunchy biscuit', 30.00, 35, NOW()),
    ('Water', 'Natural spring water', 20.00, 50, NOW()),
    ('Apple', 'Fresh and crisp apple', 10.00, 40, NOW()),
    ('Orange', 'Juicy and tangy orange', 15.00, 30, NOW()),
    ('Banana', 'Sweet and creamy banana', 12.00, 45, NOW()),
    ('Milk', 'Fresh milk from the farm', 25.00, 20, NOW()),
    ('Bread', 'Warm and soft bread loaf', 40.00, 10, NOW());
