-- CREATE DATABASE restaurant

-- CREATE TABLE restaurant (
--     name varchar,
--     distance integer,
--     stars integer DEFAULT 0 CHECK (stars <= 5),
--     category varchar,
--     favorite_dish varchar,
--     takeout boolean,
--     last_time_ate date
-- )

-- INSERT INTO restaurant VALUES (
--     'McDonalds', 1107, 3, 'fastfood', 'BigMac', TRUE, '10-25-2021'  
-- )
-- INSERT INTO restaurant VALUES (
--     'Subway', 562, 1, 'fastfood', 'Buffalo chicken sub', TRUE, '10-20-2021'  
-- )
-- INSERT INTO restaurant VALUES (
--     'Saltgrass Steakhouse', 50, 5, 'American', 'T-bone steak', TRUE, '9-27-2021'  
-- )
-- INSERT INTO restaurant VALUES (
--     'Hard Eights', 350, 5, 'American', 'Cowboy Beans', FALSE, '8-10-2020'  
-- )
-- INSERT INTO restaurant VALUES (
--     'PF Changs', 700, 4, 'Chinese', 'Lo Mein', TRUE, '8-15-2021'  
-- )


-- SELECT * FROM restaurant WHERE stars >= 5

-- SELECT favorite_dish FROM restaurant

-- SELECT id FROM restaurant WHERE name = 'McDonalds'

-- SELECT * FROM restaurant WHERE category = 'fastfood'

-- SELECT * FROM restaurant WHERE takeout = TRUE

-- SELECT * FROM restaurant WHERE takeout = TRUE AND category = 'fastfood'

-- SELECT * FROM restaurant WHERE distance <= 500

-- SELECT * FROM restaurant WHERE last_time_ate > '10/18/2021'

-- SELECT * FROM restaurant WHERE last_time_ate > '10/18/2021' AND stars >= 5



-- SELECT * FROM restaurant ORDER BY distance ASC

-- SELECT * FROM restaurant ORDER BY stars DESC, distance ASC LIMIT 2

-- SELECT * FROM restaurant ORDER BY stars DESC LIMIT 2

-- SELECT * FROM restaurant ORDER BY distance < 400 ASC

-- SELECT Count(name) FROM restaurant

-- SELECT Count(category) FROM restaurant

-- SELECT AVG(stars) FROM restaurant

-- SELECT category FROM restaurant WHERE stars >= 5



























