-- Создание таблицы для регистраций участниц квеста
CREATE TABLE IF NOT EXISTS registrations (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    phone VARCHAR(50) NOT NULL,
    email VARCHAR(255),
    package_type VARCHAR(50) NOT NULL CHECK (package_type IN ('СТАНДАРТ', 'ПРЕМИУМ', 'VIP')),
    telegram VARCHAR(100),
    comment TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status VARCHAR(50) DEFAULT 'new' CHECK (status IN ('new', 'confirmed', 'attended', 'cancelled'))
);

-- Индексы для быстрого поиска
CREATE INDEX idx_registrations_status ON registrations(status);
CREATE INDEX idx_registrations_created_at ON registrations(created_at DESC);
CREATE INDEX idx_registrations_phone ON registrations(phone);
CREATE INDEX idx_registrations_package ON registrations(package_type);