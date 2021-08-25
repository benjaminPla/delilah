function productsDropTable() {
    const sql = "DROP TABLE IF EXISTS products;";
    return sql;
  }
  function productsCreateTable() {
    const sql =
      "CREATE TABLE products (" +
      "id INT NOT NULL AUTO_INCREMENT," +
      "product_name VARCHAR(50) NOT NULL," +
      "price INT NOT NULL," +
      "PRIMARY KEY (id)" +
      ");";
    return sql;
  }
  function productsInsertInto() {
    const sql =
      "INSERT INTO products VALUES" +
      "(1, 'Mushroom - Morels, Dry', 26)," +
      "(2, 'Juice - Prune', 3)," +
      "(3, 'Napkin - Beverage 1 Ply', 7)," +
      "(4, 'Fish - Base, Bouillion', 87)," +
      "(5, 'Pasta - Orecchiette', 54)," +
      "(6, 'Syrup - Golden, Lyles', 99)," +
      "(7, 'Beef - Rib Eye Aaa', 55)," +
      "(8, 'Steampan - Half Size Shallow', 37)," +
      "(9, 'Tomatoes', 44)," +
      "(10, 'Laundry - Bag Cloth', 14)," +
      "(11, 'Leeks - Large', 30)," +
      "(12, 'Jolt Cola - Red Eye', 78)," +
      "(13, 'Bread - Bagels, Mini', 70)," +
      "(14, 'Pork - Back, Short Cut, Boneless', 37)," +
      "(15, 'Squash - Pepper', 43)," +
      "(16, 'Wine - Two Oceans Sauvignon', 53)," +
      "(17, 'Cabbage - Green', 83)," +
      "(18, 'Almonds Ground Blanched', 21)," +
      "(19, 'Sour Cream', 10)," +
      "(20, 'Pie Filling - Pumpkin', 5)," +
      "(21, 'Aspic - Amber', 39)," +
      "(22, 'Molasses - Fancy', 57)," +
      "(23, 'Steam Pan - Half Size Deep', 3)," +
      "(24, 'Wine La Vielle Ferme Cote Du', 57)," +
      "(25, 'Gherkin - Sour', 25)," +
      "(26, 'Sugar - Brown', 72)," +
      "(27, 'Wine - Riesling Dr. Pauly', 65)," +
      "(28, 'Hot Chocolate - Individual', 74)," +
      "(29, 'Fruit Salad Deluxe', 5)," +
      "(30, 'Catfish - Fillets', 77)," +
      "(31, 'Wine - Semi Dry Riesling Vineland', 61)," +
      "(32, 'Soup - Campbells Beef Stew', 90)," +
      "(33, 'Energy Drink', 89)," +
      "(34, 'Onions - Red Pearl', 63)," +
      "(35, 'Turkey - Breast, Smoked', 66)," +
      "(36, 'Sambuca - Opal Nera', 93)," +
      "(37, 'Clams - Canned', 34)," +
      "(38, 'Lid - High Heat, Super Clear', 50)," +
      "(39, 'Wine - Chianti Classico Riserva', 34)," +
      "(40, 'Chocolate - White', 97)," +
      "(41, 'Cookies - Englishbay Oatmeal', 25)," +
      "(42, 'Parasol Pick Stir Stick', 80)," +
      "(43, 'Milkettes - 2%', 44)," +
      "(44, 'Salmon - Atlantic, Skin On', 82)," +
      "(45, 'Apples - Sliced / Wedge', 13)," +
      "(46, 'Appetizer - Mushroom Tart', 44)," +
      "(47, 'Beets - Candy Cane, Organic', 2)," +
      "(48, 'Nantuket Peach Orange', 88)," +
      "(49, 'Orange - Blood', 20)," +
      "(50, 'Wine - Marlbourough Sauv Blanc', 41)," +
      "(51, 'Soup Campbells Turkey Veg.', 38)," +
      "(52, 'Lamb Rack - Ontario', 75)," +
      "(53, 'Jolt Cola - Red Eye', 5)," +
      "(54, 'Tomatoes - Vine Ripe, Yellow', 4)," +
      "(55, 'Pasta - Elbows, Macaroni, Dry', 11)," +
      "(56, 'Appetizer - Spring Roll, Veg', 45)," +
      "(57, 'Bagelers', 38)," +
      "(58, 'Beer - Original Organic Lager', 50)," +
      "(59, 'Almonds Ground Blanched', 83)," +
      "(60, 'Coriander - Seed', 67)," +
      "(61, 'Olives - Green, Pitted', 15)," +
      "(62, 'Snapple - Mango Maddness', 69)," +
      "(63, 'Iced Tea - Lemon, 340ml', 50)," +
      "(64, 'Orange - Canned, Mandarin', 58)," +
      "(65, 'Oil - Truffle, White', 72)," +
      "(66, 'Table Cloth 53x53 White', 19)," +
      "(67, 'Chips - Doritos', 6)," +
      "(68, 'Chicken - Diced, Cooked', 19)," +
      "(69, 'Sauce - Cranberry', 45)," +
      "(70, 'Cheese - Roquefort Pappillon', 60)," +
      "(71, 'Coke - Diet, 355 Ml', 37)," +
      "(72, 'Tia Maria', 33)," +
      "(73, 'Beer - Alexander Kieths, Pale Ale', 71)," +
      "(74, 'Beer - Sleemans Cream Ale', 57)," +
      "(75, 'Appetizer - Sausage Rolls', 19)," +
      "(76, 'Broom And Brush Rack Black', 49)," +
      "(77, 'Wine - Red, Mouton Cadet', 84)," +
      "(78, 'Skewers - Bamboo', 64)," +
      "(79, 'Capers - Ox Eye Daisy', 99)," +
      "(80, 'Cake - Mini Potato Pancake', 56)," +
      "(81, 'Mushroom - Enoki, Dry', 13)," +
      "(82, 'Sprouts - Brussel', 56)," +
      "(83, 'Salmon - Atlantic, Skin On', 55)," +
      "(84, 'Munchies Honey Sweet Trail Mix', 2)," +
      "(85, 'Pastry - Baked Cinnamon Stick', 89)," +
      "(86, 'Nut - Pecan, Halves', 99)," +
      "(87, 'Beans - Long, Chinese', 45)," +
      "(88, 'Sage - Rubbed', 7)," +
      "(89, 'Soup - Knorr, Country Bean', 12)," +
      "(90, 'Rootbeer', 93)," +
      "(91, 'Mushroom - Porcini Frozen', 55)," +
      "(92, 'Asparagus - Green, Fresh', 96)," +
      "(93, 'Extract - Raspberry', 82)," +
      "(94, 'Bar Nature Valley', 7)," +
      "(95, 'Chicken Breast Halal', 6)," +
      "(96, 'Basil - Pesto Sauce', 44)," +
      "(97, 'Cumin - Ground', 49)," +
      "(98, 'Beans - Black Bean, Dry', 77)," +
      "(99, 'Chutney Sauce', 87)," +
      "(100, 'Cheese - Roquefort Pappillon', 79);";
    return sql;
  }
  
  export { productsDropTable, productsCreateTable, productsInsertInto };