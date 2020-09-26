CREATE TABLE IF NOT EXISTS users (
  user_id INT NOT NULL  PRIMARY KEY AUTO_INCREMENT,
  cpf VARCHAR(11) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(11) NOT NULL,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP NOT NULL,
  type ENUM('comum', 'admin') NOT NULL,
  deleted_at TIMESTAMP NULL,
  name VARCHAR(45) NULL,
  address TEXT NULL
  
);

CREATE TABLE IF NOT EXISTS draws (
  draw_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  created_at TIMESTAMP NOT NULL,
  date_draw TIMESTAMP NOT NULL,
  description TEXT NOT NULL,
  value DOUBLE NOT NULL,
  title TEXT NOT NULL,
  subtitle TEXT NOT NULL,
  status ENUM('closed', 'active') NOT NULL,
  deleted_at TIMESTAMP NULL
);



CREATE TABLE IF NOT EXISTS draw_quotas (
  draw_quota_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  number VARCHAR(3) NOT NULL,
  created_at TIMESTAMP NOT NULL,
  deleted_at TIMESTAMP NULL
);


CREATE TABLE IF NOT EXISTS participants_draw (
  participant_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  draw_quotas_draw_quota_id INT NOT NULL,
  users_user_id INT NOT NULL,
  draws_draw_id INT NOT NULL,
  created_at TIMESTAMP NOT NULL,
  status ENUM('resevation', 'sold') NOT NULL,
  deleted_at TIMESTAMP NULL,
   FOREIGN KEY (draw_quotas_draw_quota_id) REFERENCES draw_quotas (draw_quota_id),
   FOREIGN KEY (users_user_id) REFERENCES users (user_id),
   FOREIGN KEY (draws_draw_id) REFERENCES draws (draw_id)
);

CREATE TABLE IF NOT EXISTS images (
  image_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  name LONGTEXT NOT NULL,
  data_image TEXT NOT NULL,
  created_at TIMESTAMP NOT NULL,
  deleted_at TIMESTAMP NULL,
  draws_draw_id INT NOT NULL,
   FOREIGN KEY (draws_draw_id) REFERENCES draws (draw_id)
);

CREATE TABLE IF NOT EXISTS winners_draws (
  winner_id INT NOT NULL  PRIMARY KEY AUTO_INCREMENT,
  participants_draw_participant_id INT NOT NULL,
  image LONGTEXT NOT NULL,
  video TEXT NULL,
  deleted_at TIMESTAMP NULL,
  created_at TIMESTAMP NOT NULL,
   FOREIGN KEY (participants_draw_participant_id) REFERENCES participants_draw (participant_id)
);


CREATE TABLE IF NOT EXISTS raffles (
  raffle_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT ,
  image LONGTEXT NOT NULL,
  created_at TIMESTAMP NOT NULL,
  date_raffle TIMESTAMP NOT NULL,
  description TEXT NOT NULL,
  value DOUBLE NOT NULL,
  title TEXT NOT NULL,
  subtitle TEXT NOT NULL,
  status ENUM('closed', 'active') NOT NULL,
  deleted_at TIMESTAMP NULL
);

CREATE TABLE IF NOT EXISTS quotas_raffle (
  quota_raffle_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  number VARCHAR(2) NOT NULL,
  created_at TIMESTAMP NOT NULL,
  deleted_at TIMESTAMP NULL
);


CREATE TABLE IF NOT EXISTS participants_raffle (
  participant_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  users_user_id INT NOT NULL,
  created_at TIMESTAMP NOT NULL,
  quotas_raffle_quota_raffle_id INT NOT NULL,
  raffles_raffle_id INT NOT NULL,
  status ENUM('resevation', 'sold') NOT NULL,
  deleted_at TIMESTAMP NULL,
   FOREIGN KEY (users_user_id) REFERENCES users (user_id),
   FOREIGN KEY (quotas_raffle_quota_raffle_id) REFERENCES quotas_raffle (quota_raffle_id),
   FOREIGN KEY (raffles_raffle_id) REFERENCES raffles (raffle_id)
);


CREATE TABLE IF NOT EXISTS winners_raffles (
  winner_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  participants_raffle_participant_id INT NOT NULL,
  image LONGTEXT NOT NULL,
  video TEXT NULL,
    created_at TIMESTAMP NOT NULL,
  deleted_at TIMESTAMP NULL,
   FOREIGN KEY (participants_raffle_participant_id) REFERENCES participants_raffle (participant_id)
);

CREATE TABLE IF NOT EXISTS banks_accounts (
  bank_account_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  agency VARCHAR(255) NOT NULL,
  number_account VARCHAR(255) NOT NULL,
  created_at TIMESTAMP NOT NULL,
  image TEXT NOT NULL,
  cpf VARCHAR(11) NULL,
  cnpj VARCHAR(14) NULL,
  deleted_at TIMESTAMP NULL
);


CREATE TABLE IF NOT EXISTS business (
  business_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  cnpj VARCHAR(14) NOT NULL,
  fantasy_name VARCHAR(255) NOT NULL,
  logo TEXT NOT NULL,
  social TEXT NOT NULL,
  phone VARCHAR(11) NOT NULL,
  deleted_at TIMESTAMP NULL,
  regulation TEXT NULL 
);