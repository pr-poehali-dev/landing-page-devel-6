-- Создание таблицы для заявок с сайта квеста АПГРЕЙД
CREATE TABLE IF NOT EXISTS applications (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    phone VARCHAR(50) NOT NULL,
    email VARCHAR(255),
    package_type VARCHAR(50) NOT NULL CHECK (package_type IN ('СТАНДАРТ', 'ПРЕМИУМ', 'VIP')),
    telegram VARCHAR(100),
    comment TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status VARCHAR(50) DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'paid', 'cancelled'))
);

-- Индекс для быстрого поиска по статусу и дате
CREATE INDEX idx_applications_status ON applications(status);
CREATE INDEX idx_applications_created_at ON applications(created_at DESC);
CREATE INDEX idx_applications_phone ON applications(phone);