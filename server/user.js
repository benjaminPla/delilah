import { sequelize } from "./server.js";

const usersServer = {
  findAll: async () => {
    return await sequelize.query("SELECT * FROM users WHERE 1;", {
      type: "SELECT",
    });
  },
  findOne: async (data) => {
    return await sequelize.query(
      "SELECT * FROM users WHERE user_name = :value OR email = :value;",
      { replacements: { value: data }, type: "SELECT" }
    );
  },
  post: async (data) => {
    await sequelize.query(
      "INSERT INTO users (user_name, full_name, email, phone_number, shipping_address, password) VALUES (?, ?, ?, ?, ?, ?);",
      {
        replacements: [
          data.user_name,
          data.full_name,
          data.email,
          data.phone_number,
          data.shipping_address,
          data.password,
        ],
      }
    );
  },
  delete: async (data) => {
    await sequelize.query("DELETE FROM users WHERE user_name = ?;", {
      replacements: [data[0].user_name],
    });
  },
  put: async (data) => {
    await sequelize.query(
      "UPDATE users SET full_name = ?, phone_number = ?, shipping_address = ? WHERE user_name = ? OR email = ?;",
      {
        replacements: [
          data.full_name,
          data.phone_number,
          data.shipping_address,
          data.user_name,
          data.email,
        ],
      }
    );
  },
};

const usersDropTable = "DROP TABLE IF EXISTS users;";
const usersCreateTable =
  "CREATE TABLE users (" +
  "id INT NOT NULL AUTO_INCREMENT," +
  "user_name VARCHAR(50) NOT NULL," +
  "full_name VARCHAR(50) NOT NULL," +
  "email VARCHAR(50) NOT NULL," +
  "phone_number VARCHAR(50) NOT NULL," +
  "shipping_address VARCHAR(50) NOT NULL," +
  "password VARCHAR(255) NOT NULL," +
  "PRIMARY KEY (id)" +
  ");";
const usersInsertInto =
  "INSERT INTO users VALUES" +
  "(1, 'ablomfield0', 'Alberto Blomfield', 'ablomfield0@dagondesign.com', '(157) 2156602', '1895 Oakridge Plaza', '6V7H0q4IyWgN')," +
  "(2, 'eslingsby1', 'Ethelda Slingsby', 'eslingsby1@geocities.com', '(751) 1709544', '41 Sugar Street', 'RWzh3Pyy')," +
  "(3, 'cosherin2', 'Cristie O''Sherin', 'cosherin2@usgs.gov', '(844) 3663444', '0 Gerald Parkway', 'ayfzDqHSjmbX')," +
  "(4, 'lfawdry3', 'Leonie Fawdry', 'lfawdry3@yale.edu', '(444) 3197227', '047 Ronald Regan Circle', 'YPRVY7OjqVHY')," +
  "(5, 'vkeetch4', 'Vergil Keetch', 'vkeetch4@google.ru', '(161) 4283864', '4088 Leroy Plaza', 'VEkmTN3')," +
  "(6, 'kpancoast5', 'Kettie Pancoast', 'kpancoast5@toplist.cz', '(928) 3344321', '7 Harbort Crossing', '9wAFSTIBqW')," +
  "(7, 'cjanovsky6', 'Carlita Janovsky', 'cjanovsky6@answers.com', '(523) 4279060', '294 Farragut Circle', 'p553ecljs')," +
  "(8, 'mmela7', 'Miof mela Cough', 'mmela7@nationalgeographic.com', '(917) 7828730', '52 Melby Street', 'QLDk7lT')," +
  "(9, 'awelsh8', 'Amata Welsh', 'awelsh8@timesonline.co.uk', '(123) 3590433', '460 1st Alley', 'SXwiMD4G')," +
  "(10, 'dmollnar9', 'Delia Mollnar', 'dmollnar9@nbcnews.com', '(306) 8016869', '79297 Shasta Plaza', 'hNa5C4')," +
  "(11, 'smckleoda', 'Sharlene McKleod', 'smckleoda@technorati.com', '(119) 9446491', '65604 Merchant Crossing', 'P1dvJBylS')," +
  "(12, 'pnapolitanob', 'Page Napolitano', 'pnapolitanob@moonfruit.com', '(430) 8698115', '448 Ridgeway Terrace', 'KYsxVIS9')," +
  "(13, 'kclaguec', 'Karisa Clague', 'kclaguec@ed.gov', '(899) 5319015', '46 Mcguire Road', 'zIQ1xa5riMk')," +
  "(14, 'mclaypoled', 'Marja Claypole', 'mclaypoled@arizona.edu', '(357) 5441008', '513 Declaration Crossing', '0jyYz7iF')," +
  "(15, 'atripneye', 'Ainslie Tripney', 'atripneye@paginegialle.it', '(907) 1586498', '9 Graedel Drive', 'gfXyWVVTNo')," +
  "(16, 'amoverleyf', 'Anthe Moverley', 'amoverleyf@mapy.cz', '(476) 1599393', '196 1st Crossing', '3vKrZf5L8Gm')," +
  "(17, 'vstraughang', 'Valry Straughan', 'vstraughang@timesonline.co.uk', '(598) 8111389', '43016 Ohio Terrace', 'EDwdnUNP')," +
  "(18, 'lbrownseah', 'Lyndel Brownsea', 'lbrownseah@barnesandnoble.com', '(840) 1499024', '9 Caliangt Lane', 'XTe3et')," +
  "(19, 'kbatrami', 'Kasper Batram', 'kbatrami@paginegialle.it', '(385) 4818139', '8557 Banding Point', 'GqkBktky9Xlj')," +
  "(20, 'jstrotonej', 'Jane Strotone', 'jstrotonej@ning.com', '(696) 9564973', '003 Monica Crossing', 'Wiki4XUdWz4')," +
  "(21, 'espurdenk', 'Erroll Spurden', 'espurdenk@delicious.com', '(159) 7203996', '11 Burning Wood Court', 'EbRF9TclhFvr')," +
  "(22, 'gwordleyl', 'Gallagher Wordley', 'gwordleyl@freewebs.com', '(529) 4799056', '7 Doe Crossing Way', 'BTaj08f')," +
  "(23, 'sgrubbem', 'Sofie Grubbe', 'sgrubbem@army.mil', '(540) 3940446', '41 Moland Court', 'puVWDGaMC')," +
  "(24, 'aroon', 'Augustus Roo', 'aroon@gov.uk', '(154) 5710820', '74 Brown Center', 'VXcwaty8C')," +
  "(25, 'afahertyo', 'Amalita Faherty', 'afahertyo@vk.com', '(601) 4082658', '786 Sundown Road', '2jrkBA')," +
  "(26, 'movenp', 'Malorie Oven', 'movenp@qq.com', '(574) 2565919', '14 Ridge Oak Court', '9V2reZwa')," +
  "(27, 'alennardeq', 'Adham Lennarde', 'alennardeq@wikipedia.org', '(250) 1940892', '97649 Kings Terrace', 'QD4lVO')," +
  "(28, 'jcayleyr', 'Joane Cayley', 'jcayleyr@edublogs.org', '(672) 4519908', '91115 Little Fleur Place', 's8fwNFkls6fd')," +
  "(29, 'smangeneys', 'Sadye Mangeney', 'smangeneys@com.com', '(883) 2856188', '51355 3rd Parkway', 'bDUKjNXl')," +
  "(30, 'klongstreetht', 'Kendell Longstreeth', 'klongstreetht@blogtalkradio.com', '(915) 7280744', '972 Vernon Avenue', 'hDVIgReTP5de')," +
  "(31, 'kgisbyeu', 'Kelcey Gisbye', 'kgisbyeu@sfgate.com', '(391) 9063653', '89858 Spaight Alley', 'UQMSTIc')," +
  "(32, 'bonoulanev', 'Brita O''Noulane', 'bonoulanev@photobucket.com', '(772) 6984691', '69965 Hintze Crossing', 'h5FnHzQiFs')," +
  "(33, 'myurinovw', 'Marla Yurinov', 'myurinovw@bloglovin.com', '(416) 4582272', '5 Quincy Circle', '4JtmMV')," +
  "(34, 'asreenanx', 'Ardis Sreenan', 'asreenanx@lycos.com', '(100) 1290167', '9 Straubel Pass', 'xlA7hX')," +
  "(35, 'itokelly', 'Ibrahim Tokell', 'itokelly@ovh.net', '(153) 3049493', '31947 Cordelia Drive', 'VM97LtuGcH9g')," +
  "(36, 'avankeevz', 'Aleece Vankeev', 'avankeevz@google.fr', '(503) 2460256', '264 1st Center', '6gXYPHl')," +
  "(37, 'dprobey10', 'Dickie Probey', 'dprobey10@yandex.ru', '(971) 3663209', '1122 3rd Park', 'cKU1kAY166S')," +
  "(38, 'jeisold11', 'Jackelyn Eisold', 'jeisold11@redcross.org', '(996) 1484652', '61105 Hanson Trail', '4SgH1yBvCe')," +
  "(39, 'swodham12', 'Skipper Wodham', 'swodham12@domainmarket.com', '(245) 8826535', '56476 Manley Alley', 'RzL3j8bbo')," +
  "(40, 'gabramino13', 'Geoff Abramino', 'gabramino13@dedecms.com', '(994) 7900829', '01 Ruskin Terrace', 'j62bhdDsGW')," +
  "(41, 'kwyper14', 'Karel Wyper', 'kwyper14@cornell.edu', '(930) 8010561', '9 Manley Crossing', 'bnKsWX')," +
  "(42, 'jminchi15', 'Jody Minchi', 'jminchi15@barnesandnoble.com', '(209) 4833121', '80745 Debra Lane', '4GWrAwTYA')," +
  "(43, 'xwhile16', 'Xymenes While', 'xwhile16@chicagotribune.com', '(227) 8079879', '862 Fuller Road', 'WIvgx7GIW2T')," +
  "(44, 'lkindleysides17', 'Linell Kindleysides', 'lkindleysides17@posterous.com', '(724) 6940512', '6 Fairfield Way', 'ROCW9rDMih')," +
  "(45, 'sdegoix18', 'Shellie Degoix', 'sdegoix18@boston.com', '(250) 6667192', '0969 Browning Trail', '8flKCu')," +
  "(46, 'scourse19', 'Stella Course', 'scourse19@tuttocitta.it', '(954) 2281648', '6 Farragut Street', '3HulsA')," +
  "(47, 'jlucien1a', 'Jackqueline Lucien', 'jlucien1a@columbia.edu', '(978) 6869628', '1087 Di Loreto Road', 'OPFZm0zxs4')," +
  "(48, 'koldland1b', 'Karole Oldland', 'koldland1b@goo.gl', '(763) 5931031', '1 Little Fleur Center', 'FIsGZbYV')," +
  "(49, 'ehaack1c', 'Emelita Haack', 'ehaack1c@wikimedia.org', '(241) 4750430', '5 Luster Plaza', 'JoPexG8eM')," +
  "(50, 'vingleson1d', 'Valma Ingleson', 'vingleson1d@arstechnica.com', '(304) 6070778', '21 Longview Plaza', '4opObH')," +
  "(51, 'kmeredyth1e', 'Kev Meredyth', 'kmeredyth1e@walmart.com', '(408) 8278894', '81 Del Sol Pass', 'w8UhUd')," +
  "(52, 'etucknott1f', 'Erin Tucknott', 'etucknott1f@discuz.net', '(389) 5320888', '3047 Brown Junction', 'fEJnCy4zY')," +
  "(53, 'fspurden1g', 'Fiorenze Spurden', 'fspurden1g@yellowpages.com', '(482) 5141568', '011 Columbus Junction', '9hlcdUOHz')," +
  "(54, 'gninnotti1h', 'Garrik Ninnotti', 'gninnotti1h@gov.uk', '(306) 3849729', '76006 Sunbrook Drive', 'gKJZxSqU4wKV')," +
  "(55, 'lkinnard1i', 'Leicester Kinnard', 'lkinnard1i@nba.com', '(122) 4317103', '146 Florence Lane', 'pa3CRdj88')," +
  "(56, 'mcattroll1j', 'Modesta Cattroll', 'mcattroll1j@dmoz.org', '(167) 3767208', '04757 Burning Wood Alley', 'uRZyUtyw')," +
  "(57, 'tkerton1k', 'Tommi Kerton', 'tkerton1k@geocities.com', '(901) 5783717', '9 Center Parkway', 'YD8Lvqn9')," +
  "(58, 'cle1l', 'Ciro Le Moucheux', 'cle1l@earthlink.net', '(877) 3957580', '256 Becker Junction', 'Weu2J3GQkP')," +
  "(59, 'zsurpliss1m', 'Zelig Surpliss', 'zsurpliss1m@drupal.org', '(381) 7645169', '472 Lien Drive', 'WnK1iV')," +
  "(60, 'epaff1n', 'Etan Paff', 'epaff1n@paypal.com', '(680) 9174570', '242 Melody Center', 'zMClxI')," +
  "(61, 'rruane1o', 'Ruby Ruane', 'rruane1o@creativecommons.org', '(783) 7351903', '55 Grim Parkway', 'MQxY2gEDoRZ')," +
  "(62, 'ctregunna1p', 'Cinda Tregunna', 'ctregunna1p@usda.gov', '(330) 8684051', '40359 Riverside Terrace', 'eMIUhQ')," +
  "(63, 'dcockcroft1q', 'Deirdre Cockcroft', 'dcockcroft1q@amazon.co.uk', '(431) 8256435', '7401 Erie Street', 'ezF2Ss3')," +
  "(64, 'rvan1r', 'Robbert Van Geffen', 'rvan1r@dell.com', '(218) 2740739', '71834 Northfield Pass', '25wDh9')," +
  "(65, 'cterzo1s', 'Chandra Terzo', 'cterzo1s@berkeley.edu', '(927) 1602719', '95 Calypso Junction', 'tOyQjEc5H')," +
  "(66, 'sdelyth1t', 'Sean Delyth', 'sdelyth1t@goodreads.com', '(268) 9831765', '94 Bunker Hill Parkway', 'i19DlyOTH0MB')," +
  "(67, 'dspraggon1u', 'Desiree Spraggon', 'dspraggon1u@desdev.cn', '(304) 1700430', '9 Fallview Parkway', 'vYnGxn8G104')," +
  "(68, 'ndrewet1v', 'Nicole Drewet', 'ndrewet1v@last.fm', '(945) 7536707', '78 Erie Hill', 'SLAZsZ')," +
  "(69, 'fwyldish1w', 'Ferrel Wyldish', 'fwyldish1w@t-online.de', '(734) 5732659', '17 Carioca Park', 'Js60HrzYzur')," +
  "(70, 'squesne1x', 'Sandy Quesne', 'squesne1x@constantcontact.com', '(377) 4126769', '1 Lien Way', 'nyqLqRY')," +
  "(71, 'cbrompton1y', 'Chiquita Brompton', 'cbrompton1y@arizona.edu', '(258) 1104589', '0 Dunning Way', 'K3ZdiKrUEOL')," +
  "(72, 'cguichard1z', 'Corinne Guichard', 'cguichard1z@4shared.com', '(173) 9240220', '04 New Castle Hill', 'gYuoZihy4')," +
  "(73, 'nrowston20', 'Niels Rowston', 'nrowston20@bizjournals.com', '(984) 8877135', '0 Menomonie Terrace', 'PwjJCIqgx5A')," +
  "(74, 'rsuttle21', 'Renae Suttle', 'rsuttle21@dyndns.org', '(151) 8323599', '38141 Texas Plaza', 'RpcxhOa')," +
  "(75, 'vullrich22', 'Vick Ullrich', 'vullrich22@hc360.com', '(707) 8414982', '832 Messerschmidt Terrace', 'anEOidv')," +
  "(76, 'rportis23', 'Ron Portis', 'rportis23@posterous.com', '(150) 2635907', '5924 Tennessee Avenue', '04WnOhm9jHfm')," +
  "(77, 'egimson24', 'Emogene Gimson', 'egimson24@google.pl', '(201) 3266282', '734 Pearson Trail', 'H9WBbojYi')," +
  "(78, 'eshelf25', 'Evita Shelf', 'eshelf25@vkontakte.ru', '(848) 2300033', '09 Summit Drive', 'Nyt3wKYq')," +
  "(79, 'slibermore26', 'Stirling Libermore', 'slibermore26@yahoo.com', '(440) 8498202', '1 Golf Course Way', 'LqfFy2Icv')," +
  "(80, 'jdawton27', 'Juli Dawton', 'jdawton27@mozilla.org', '(971) 9079222', '110 Porter Street', 'pfH6Ix80')," +
  "(81, 'nbartolacci28', 'Nerty Bartolacci', 'nbartolacci28@uol.com.br', '(795) 8400031', '3 Weeping Birch Crossing', 'CieZbcA')," +
  "(82, 'lverlinde29', 'Lorelle Verlinde', 'lverlinde29@gmpg.org', '(481) 1479671', '81277 Algoma Parkway', 'dUiTu6')," +
  "(83, 'cmaccambridge2a', 'Constancia MacCambridge', 'cmaccambridge2a@e-recht24.de', '(447) 9050527', '96596 Florence Place', 'zOscWzmpM')," +
  "(84, 'egligorijevic2b', 'Elwyn Gligorijevic', 'egligorijevic2b@infoseek.co.jp', '(829) 6411162', '58440 Cambridge Street', 'N9pXjFEvaGEi')," +
  "(85, 'mstainfield2c', 'Mikael Stainfield', 'mstainfield2c@reference.com', '(490) 5520507', '4 Southridge Way', '3UNyiPAjJY')," +
  "(86, 'bsivill2d', 'Bren Sivill', 'bsivill2d@opera.com', '(565) 8533921', '18151 Rigney Parkway', 'pICmWnOD6')," +
  "(87, 'emountain2e', 'Eward Mountain', 'emountain2e@wired.com', '(468) 2181964', '352 New Castle Park', 'seAVL5Y')," +
  "(88, 'tgarroch2f', 'Theda Garroch', 'tgarroch2f@php.net', '(966) 3403454', '2319 Hooker Point', 'hEa1kArpoXe')," +
  "(89, 'lroddan2g', 'Lory Roddan', 'lroddan2g@spiegel.de', '(524) 2608839', '6 Northfield Park', 'j1XpIHRhEZ4')," +
  "(90, 'gkeys2h', 'Guthrey Keys', 'gkeys2h@naver.com', '(181) 4039337', '47 Karstens Lane', 'azGXVB')," +
  "(91, 'ebrowne2i', 'Edin Browne', 'ebrowne2i@elegantthemes.com', '(267) 9297115', '18267 Artisan Crossing', 'QCsmhI')," +
  "(92, 'msowter2j', 'Maure Sowter', 'msowter2j@dailymotion.com', '(480) 4545613', '4530 Menomonie Terrace', '4gKO0D2K')," +
  "(93, 'tlindores2k', 'Torey Lindores', 'tlindores2k@nationalgeographic.com', '(475) 4972674', '81 Michigan Crossing', 'CIEI1d')," +
  "(94, 'sdolley2l', 'Sondra Dolley', 'sdolley2l@live.com', '(701) 5444464', '4 Elgar Way', '5L2udCUkh4')," +
  "(95, 'josburn2m', 'Judith Osburn', 'josburn2m@scientificamerican.com', '(402) 6757388', '70154 Cardinal Parkway', 'B43KKIDbtkAI')," +
  "(96, 'dtreend2n', 'Debra Treend', 'dtreend2n@rediff.com', '(779) 4452794', '3499 Grim Point', 'WUGfx1')," +
  "(97, 'fhursey2o', 'Freddie Hursey', 'fhursey2o@earthlink.net', '(541) 5743055', '8865 Morrow Plaza', 'XTEKWzrnIr')," +
  "(98, 'lstanger2p', 'Leo Stanger', 'lstanger2p@woothemes.com', '(568) 2056853', '28311 Bluestem Center', 'yzpp0bQ')," +
  "(99, 'fle2q', 'Felecia Le - Count', 'fle2q@phoca.cz', '(880) 1612804', '72 Drewry Place', 'xxHMa5M')," +
  "(100, 'eboadby2r', 'Ermin Boadby', 'eboadby2r@gmpg.org', '(940) 7027245', '15 Huxley Point', 'pTk47n');";

export { usersServer, usersDropTable, usersCreateTable, usersInsertInto };
