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
  data_image LONGTEXT NOT NULL,
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
  image LONGTEXT  NOT NULL,
  cpf VARCHAR(11) NULL,
  cnpj VARCHAR(14) NULL,
  deleted_at TIMESTAMP NULL
);


CREATE TABLE IF NOT EXISTS business (
  business_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  cnpj VARCHAR(14) NOT NULL,
  fantasy_name VARCHAR(255) NOT NULL,
  logo LONGTEXT NOT NULL,
  social TEXT NOT NULL,
  phone VARCHAR(11) NOT NULL,
  deleted_at TIMESTAMP NULL,
  banner LONGTEXT,
  regulation TEXT NULL 
);


INSERT INTO users (cpf,email,phone,password,created_at,type,name,address) values ("00000000000","pilitandopremios@pilitandopremios.com.br","48000000000","f4932tjip2n34kgkjwi4jgijasv",now(),"admin","Anderson","Florianópolis");


INSERT INTO draw_quotas(number, created_at) VALUES ("000",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("001",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("002",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("003",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("004",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("005",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("006",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("007",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("008",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("009",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("010",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("011",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("012",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("013",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("014",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("015",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("016",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("017",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("018",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("019",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("020",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("021",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("022",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("023",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("024",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("025",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("026",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("027",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("028",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("029",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("030",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("031",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("032",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("033",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("034",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("035",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("036",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("037",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("038",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("039",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("040",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("041",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("042",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("043",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("044",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("045",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("046",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("047",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("048",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("049",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("050",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("051",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("052",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("053",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("054",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("055",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("056",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("057",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("058",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("059",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("060",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("061",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("062",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("063",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("064",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("065",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("066",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("067",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("068",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("069",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("070",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("071",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("072",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("073",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("074",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("075",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("076",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("077",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("078",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("079",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("080",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("081",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("082",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("083",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("084",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("085",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("086",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("087",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("088",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("089",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("090",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("091",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("092",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("093",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("094",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("095",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("096",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("097",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("098",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("099",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("100",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("101",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("102",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("103",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("104",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("105",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("106",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("107",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("108",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("109",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("110",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("111",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("112",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("113",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("114",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("115",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("116",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("117",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("118",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("119",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("120",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("121",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("122",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("123",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("124",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("125",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("126",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("127",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("128",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("129",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("130",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("131",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("132",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("133",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("134",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("135",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("136",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("137",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("138",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("139",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("140",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("141",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("142",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("143",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("144",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("145",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("146",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("147",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("148",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("149",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("150",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("151",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("152",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("153",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("154",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("155",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("156",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("157",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("158",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("159",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("160",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("161",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("162",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("163",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("164",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("165",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("166",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("167",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("168",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("169",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("170",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("171",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("172",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("173",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("174",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("175",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("176",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("177",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("178",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("179",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("180",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("181",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("182",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("183",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("184",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("185",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("186",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("187",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("188",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("189",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("190",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("191",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("192",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("193",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("194",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("195",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("196",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("197",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("198",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("199",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("200",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("201",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("202",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("203",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("204",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("205",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("206",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("207",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("208",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("209",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("210",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("211",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("212",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("213",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("214",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("215",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("216",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("217",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("218",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("219",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("220",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("221",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("222",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("223",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("224",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("225",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("226",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("227",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("228",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("229",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("230",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("231",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("232",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("233",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("234",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("235",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("236",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("237",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("238",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("239",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("240",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("241",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("242",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("243",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("244",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("245",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("246",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("247",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("248",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("249",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("250",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("251",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("252",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("253",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("254",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("255",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("256",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("257",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("258",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("259",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("260",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("261",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("262",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("263",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("264",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("265",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("266",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("267",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("268",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("269",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("270",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("271",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("272",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("273",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("274",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("275",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("276",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("277",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("278",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("279",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("280",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("281",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("282",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("283",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("284",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("285",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("286",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("287",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("288",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("289",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("290",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("291",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("292",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("293",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("294",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("295",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("296",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("297",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("298",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("299",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("300",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("301",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("302",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("303",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("304",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("305",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("306",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("307",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("308",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("309",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("310",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("311",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("312",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("313",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("314",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("315",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("316",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("317",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("318",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("319",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("320",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("321",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("322",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("323",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("324",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("325",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("326",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("327",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("328",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("329",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("330",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("331",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("332",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("333",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("334",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("335",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("336",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("337",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("338",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("339",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("340",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("341",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("342",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("343",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("344",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("345",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("346",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("347",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("348",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("349",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("350",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("351",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("352",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("353",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("354",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("355",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("356",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("357",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("358",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("359",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("360",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("361",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("362",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("363",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("364",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("365",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("366",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("367",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("368",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("369",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("370",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("371",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("372",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("373",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("374",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("375",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("376",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("377",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("378",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("379",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("380",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("381",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("382",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("383",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("384",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("385",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("386",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("387",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("388",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("389",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("390",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("391",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("392",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("393",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("394",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("395",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("396",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("397",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("398",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("399",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("400",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("401",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("402",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("403",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("404",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("405",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("406",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("407",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("408",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("409",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("410",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("411",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("412",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("413",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("414",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("415",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("416",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("417",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("418",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("419",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("420",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("421",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("422",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("423",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("424",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("425",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("426",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("427",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("428",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("429",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("430",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("431",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("432",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("433",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("434",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("435",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("436",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("437",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("438",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("439",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("440",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("441",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("442",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("443",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("444",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("445",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("446",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("447",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("448",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("449",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("450",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("451",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("452",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("453",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("454",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("455",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("456",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("457",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("458",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("459",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("460",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("461",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("462",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("463",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("464",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("465",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("466",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("467",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("468",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("469",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("470",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("471",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("472",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("473",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("474",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("475",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("476",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("477",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("478",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("479",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("480",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("481",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("482",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("483",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("484",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("485",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("486",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("487",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("488",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("489",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("490",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("491",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("492",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("493",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("494",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("495",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("496",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("497",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("498",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("499",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("500",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("501",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("502",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("503",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("504",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("505",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("506",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("507",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("508",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("509",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("510",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("511",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("512",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("513",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("514",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("515",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("516",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("517",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("518",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("519",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("520",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("521",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("522",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("523",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("524",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("525",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("526",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("527",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("528",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("529",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("530",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("531",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("532",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("533",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("534",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("535",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("536",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("537",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("538",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("539",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("540",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("541",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("542",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("543",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("544",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("545",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("546",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("547",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("548",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("549",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("550",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("551",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("552",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("553",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("554",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("555",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("556",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("557",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("558",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("559",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("560",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("561",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("562",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("563",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("564",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("565",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("566",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("567",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("568",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("569",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("570",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("571",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("572",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("573",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("574",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("575",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("576",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("577",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("578",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("579",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("580",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("581",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("582",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("583",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("584",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("585",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("586",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("587",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("588",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("589",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("590",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("591",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("592",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("593",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("594",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("595",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("596",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("597",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("598",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("599",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("600",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("601",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("602",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("603",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("604",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("605",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("606",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("607",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("608",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("609",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("610",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("611",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("612",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("613",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("614",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("615",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("616",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("617",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("618",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("619",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("620",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("621",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("622",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("623",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("624",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("625",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("626",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("627",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("628",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("629",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("630",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("631",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("632",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("633",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("634",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("635",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("636",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("637",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("638",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("639",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("640",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("641",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("642",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("643",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("644",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("645",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("646",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("647",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("648",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("649",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("650",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("651",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("652",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("653",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("654",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("655",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("656",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("657",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("658",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("659",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("660",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("661",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("662",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("663",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("664",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("665",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("666",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("667",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("668",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("669",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("670",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("671",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("672",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("673",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("674",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("675",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("676",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("677",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("678",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("679",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("680",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("681",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("682",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("683",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("684",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("685",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("686",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("687",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("688",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("689",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("690",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("691",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("692",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("693",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("694",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("695",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("696",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("697",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("698",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("699",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("700",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("701",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("702",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("703",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("704",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("705",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("706",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("707",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("708",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("709",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("710",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("711",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("712",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("713",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("714",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("715",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("716",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("717",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("718",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("719",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("720",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("721",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("722",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("723",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("724",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("725",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("726",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("727",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("728",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("729",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("730",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("731",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("732",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("733",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("734",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("735",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("736",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("737",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("738",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("739",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("740",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("741",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("742",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("743",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("744",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("745",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("746",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("747",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("748",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("749",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("750",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("751",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("752",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("753",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("754",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("755",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("756",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("757",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("758",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("759",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("760",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("761",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("762",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("763",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("764",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("765",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("766",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("767",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("768",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("769",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("770",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("771",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("772",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("773",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("774",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("775",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("776",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("777",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("778",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("779",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("780",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("781",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("782",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("783",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("784",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("785",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("786",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("787",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("788",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("789",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("790",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("791",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("792",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("793",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("794",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("795",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("796",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("797",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("798",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("799",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("800",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("801",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("802",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("803",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("804",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("805",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("806",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("807",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("808",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("809",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("810",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("811",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("812",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("813",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("814",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("815",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("816",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("817",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("818",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("819",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("820",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("821",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("822",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("823",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("824",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("825",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("826",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("827",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("828",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("829",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("830",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("831",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("832",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("833",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("834",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("835",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("836",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("837",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("838",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("839",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("840",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("841",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("842",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("843",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("844",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("845",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("846",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("847",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("848",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("849",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("850",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("851",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("852",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("853",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("854",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("855",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("856",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("857",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("858",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("859",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("860",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("861",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("862",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("863",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("864",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("865",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("866",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("867",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("868",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("869",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("870",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("871",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("872",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("873",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("874",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("875",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("876",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("877",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("878",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("879",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("880",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("881",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("882",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("883",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("884",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("885",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("886",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("887",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("888",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("889",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("890",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("891",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("892",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("893",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("894",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("895",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("896",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("897",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("898",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("899",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("900",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("901",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("902",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("903",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("904",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("905",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("906",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("907",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("908",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("909",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("910",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("911",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("912",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("913",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("914",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("915",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("916",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("917",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("918",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("919",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("920",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("921",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("922",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("923",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("924",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("925",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("926",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("927",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("928",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("929",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("930",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("931",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("932",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("933",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("934",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("935",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("936",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("937",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("938",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("939",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("940",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("941",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("942",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("943",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("944",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("945",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("946",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("947",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("948",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("949",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("950",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("951",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("952",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("953",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("954",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("955",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("956",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("957",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("958",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("959",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("960",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("961",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("962",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("963",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("964",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("965",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("966",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("967",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("968",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("969",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("970",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("971",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("972",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("973",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("974",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("975",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("976",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("977",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("978",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("979",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("980",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("981",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("982",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("983",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("984",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("985",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("986",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("987",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("988",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("989",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("990",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("991",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("992",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("993",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("994",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("995",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("996",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("997",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("998",now());
INSERT INTO draw_quotas(number, created_at) VALUES ("999",now());


INSERT INTO quotas_raffle(number, created_at) VALUES ("00",now());
INSERT INTO quotas_raffle(number, created_at) VALUES ("01",now());
INSERT INTO quotas_raffle(number, created_at) VALUES ("02",now());
INSERT INTO quotas_raffle(number, created_at) VALUES ("03",now());
INSERT INTO quotas_raffle(number, created_at) VALUES ("04",now());
INSERT INTO quotas_raffle(number, created_at) VALUES ("05",now());
INSERT INTO quotas_raffle(number, created_at) VALUES ("06",now());
INSERT INTO quotas_raffle(number, created_at) VALUES ("07",now());
INSERT INTO quotas_raffle(number, created_at) VALUES ("08",now());
INSERT INTO quotas_raffle(number, created_at) VALUES ("09",now());
INSERT INTO quotas_raffle(number, created_at) VALUES ("10",now());
INSERT INTO quotas_raffle(number, created_at) VALUES ("11",now());
INSERT INTO quotas_raffle(number, created_at) VALUES ("12",now());
INSERT INTO quotas_raffle(number, created_at) VALUES ("13",now());
INSERT INTO quotas_raffle(number, created_at) VALUES ("14",now());
INSERT INTO quotas_raffle(number, created_at) VALUES ("15",now());
INSERT INTO quotas_raffle(number, created_at) VALUES ("16",now());
INSERT INTO quotas_raffle(number, created_at) VALUES ("17",now());
INSERT INTO quotas_raffle(number, created_at) VALUES ("18",now());
INSERT INTO quotas_raffle(number, created_at) VALUES ("19",now());
INSERT INTO quotas_raffle(number, created_at) VALUES ("20",now());
INSERT INTO quotas_raffle(number, created_at) VALUES ("21",now());
INSERT INTO quotas_raffle(number, created_at) VALUES ("22",now());
INSERT INTO quotas_raffle(number, created_at) VALUES ("23",now());
INSERT INTO quotas_raffle(number, created_at) VALUES ("24",now());
INSERT INTO quotas_raffle(number, created_at) VALUES ("25",now());
INSERT INTO quotas_raffle(number, created_at) VALUES ("26",now());
INSERT INTO quotas_raffle(number, created_at) VALUES ("27",now());
INSERT INTO quotas_raffle(number, created_at) VALUES ("28",now());
INSERT INTO quotas_raffle(number, created_at) VALUES ("29",now());
INSERT INTO quotas_raffle(number, created_at) VALUES ("30",now());
INSERT INTO quotas_raffle(number, created_at) VALUES ("31",now());
INSERT INTO quotas_raffle(number, created_at) VALUES ("32",now());
INSERT INTO quotas_raffle(number, created_at) VALUES ("33",now());
INSERT INTO quotas_raffle(number, created_at) VALUES ("34",now());
INSERT INTO quotas_raffle(number, created_at) VALUES ("35",now());
INSERT INTO quotas_raffle(number, created_at) VALUES ("36",now());
INSERT INTO quotas_raffle(number, created_at) VALUES ("37",now());
INSERT INTO quotas_raffle(number, created_at) VALUES ("38",now());
INSERT INTO quotas_raffle(number, created_at) VALUES ("39",now());
INSERT INTO quotas_raffle(number, created_at) VALUES ("40",now());
INSERT INTO quotas_raffle(number, created_at) VALUES ("41",now());
INSERT INTO quotas_raffle(number, created_at) VALUES ("42",now());
INSERT INTO quotas_raffle(number, created_at) VALUES ("43",now());
INSERT INTO quotas_raffle(number, created_at) VALUES ("44",now());
INSERT INTO quotas_raffle(number, created_at) VALUES ("45",now());
INSERT INTO quotas_raffle(number, created_at) VALUES ("46",now());
INSERT INTO quotas_raffle(number, created_at) VALUES ("47",now());
INSERT INTO quotas_raffle(number, created_at) VALUES ("48",now());
INSERT INTO quotas_raffle(number, created_at) VALUES ("49",now());
INSERT INTO quotas_raffle(number, created_at) VALUES ("50",now());
INSERT INTO quotas_raffle(number, created_at) VALUES ("51",now());
INSERT INTO quotas_raffle(number, created_at) VALUES ("52",now());
INSERT INTO quotas_raffle(number, created_at) VALUES ("53",now());
INSERT INTO quotas_raffle(number, created_at) VALUES ("54",now());
INSERT INTO quotas_raffle(number, created_at) VALUES ("55",now());
INSERT INTO quotas_raffle(number, created_at) VALUES ("56",now());
INSERT INTO quotas_raffle(number, created_at) VALUES ("57",now());
INSERT INTO quotas_raffle(number, created_at) VALUES ("58",now());
INSERT INTO quotas_raffle(number, created_at) VALUES ("59",now());
INSERT INTO quotas_raffle(number, created_at) VALUES ("60",now());
INSERT INTO quotas_raffle(number, created_at) VALUES ("61",now());
INSERT INTO quotas_raffle(number, created_at) VALUES ("62",now());
INSERT INTO quotas_raffle(number, created_at) VALUES ("63",now());
INSERT INTO quotas_raffle(number, created_at) VALUES ("64",now());
INSERT INTO quotas_raffle(number, created_at) VALUES ("65",now());
INSERT INTO quotas_raffle(number, created_at) VALUES ("66",now());
INSERT INTO quotas_raffle(number, created_at) VALUES ("67",now());
INSERT INTO quotas_raffle(number, created_at) VALUES ("68",now());
INSERT INTO quotas_raffle(number, created_at) VALUES ("69",now());
INSERT INTO quotas_raffle(number, created_at) VALUES ("70",now());
INSERT INTO quotas_raffle(number, created_at) VALUES ("71",now());
INSERT INTO quotas_raffle(number, created_at) VALUES ("72",now());
INSERT INTO quotas_raffle(number, created_at) VALUES ("73",now());
INSERT INTO quotas_raffle(number, created_at) VALUES ("74",now());
INSERT INTO quotas_raffle(number, created_at) VALUES ("75",now());
INSERT INTO quotas_raffle(number, created_at) VALUES ("76",now());
INSERT INTO quotas_raffle(number, created_at) VALUES ("77",now());
INSERT INTO quotas_raffle(number, created_at) VALUES ("78",now());
INSERT INTO quotas_raffle(number, created_at) VALUES ("79",now());
INSERT INTO quotas_raffle(number, created_at) VALUES ("80",now());
INSERT INTO quotas_raffle(number, created_at) VALUES ("81",now());
INSERT INTO quotas_raffle(number, created_at) VALUES ("82",now());
INSERT INTO quotas_raffle(number, created_at) VALUES ("83",now());
INSERT INTO quotas_raffle(number, created_at) VALUES ("84",now());
INSERT INTO quotas_raffle(number, created_at) VALUES ("85",now());
INSERT INTO quotas_raffle(number, created_at) VALUES ("86",now());
INSERT INTO quotas_raffle(number, created_at) VALUES ("87",now());
INSERT INTO quotas_raffle(number, created_at) VALUES ("88",now());
INSERT INTO quotas_raffle(number, created_at) VALUES ("89",now());
INSERT INTO quotas_raffle(number, created_at) VALUES ("90",now());
INSERT INTO quotas_raffle(number, created_at) VALUES ("91",now());
INSERT INTO quotas_raffle(number, created_at) VALUES ("92",now());
INSERT INTO quotas_raffle(number, created_at) VALUES ("93",now());
INSERT INTO quotas_raffle(number, created_at) VALUES ("94",now());
INSERT INTO quotas_raffle(number, created_at) VALUES ("95",now());
INSERT INTO quotas_raffle(number, created_at) VALUES ("96",now());
INSERT INTO quotas_raffle(number, created_at) VALUES ("97",now());
INSERT INTO quotas_raffle(number, created_at) VALUES ("98",now());
INSERT INTO quotas_raffle(number, created_at) VALUES ("99",now());