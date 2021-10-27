-- CREATE TABLE restaurant (
-- 	id SERIAL PRIMARY KEY,
-- 	name varchar,
--     address varchar,
--     category varchar
-- );
-- CREATE TABLE reviewer (
-- 	id SERIAL PRIMARY KEY,
-- 	name varchar,
--     email varchar,
--     karma NUMERIC CHECK (karma >= 0 and karma <= 7)
-- );
-- CREATE TABLE review (
--     id SERIAL PRIMARY KEY,
--     reviewer_id integer REFERENCES reviewer(id),
--     stars integer check (stars <= 5),
--     title varchar,
--     review varchar,
--     restaurant_id integer REFERENCES restaurant(id)
-- )

-- INSERT INTO restaurant VALUES
-- (DEFAULT, 'McDonalds', '1234 please eat me', 'american'),
-- (DEFAULT, 'Panda Express', '1123 nothing here', 'chinese'),
-- (DEFAULT, 'Italy', '3248 Foodamazing', 'italian'),
-- (DEFAULT, 'Wendies', '3495 donteatthat here', 'american'),
-- (DEFAULT, 'Random', '3459 runningout ofideas', 'chinese'),
-- (DEFAULT, 'onemore', '5690 my brainhurts', 'italian')

-- INSERT INTO reviewer VALUES
-- (DEFAULT, 'Scott Smith', 'SS@reviewer.com', 6),
-- (DEFAULT, 'sidney doop', 'sd@reviewer.com', 3),
-- (DEFAULT, 'Bad food', 'bf@reviewer.com', 2),
-- (DEFAULT, 'bad bob', 'bb@reviewer.com', 7),
-- (DEFAULT, 'money joe', 'mj@reviewer.com', 5),
-- (DEFAULT, 'dillon dapper', 'dd@reviewer.com', 4),
-- (DEFAULT, 'yup no', 'se@reviewer.com', 5),
-- (DEFAULT, 'just no', 'gb@reviewer.com', 2),
-- (DEFAULT, 'okay yep', 'sr@reviewer.com', 1),
-- (DEFAULT, 'another one', 'bty@reviewer.com', 7),
-- (DEFAULT, 'you know', 'br@reviewer.com', 6),
-- (DEFAULT, 'here there', 'asdd@reviewer.com', 5)

-- INSERT INTO review VALUES
-- (DEFAULT, 1, 5, 'smith reviews', 'yup thats some food alright.', 6),
-- (DEFAULT, 2, 2, 'doop reviews', 'had to go home, got food poisoning.', 3),
-- (DEFAULT, 3, 1, 'bad reviews', 'called the police, terrible.', 4),
-- (DEFAULT, 4, 4, 'bob reviews', 'set myself on fire it was great.', 2),
-- (DEFAULT, 5, 3, 'joe reviews', 'had to buy the restaurant, now its good.', 5),
-- (DEFAULT, 6, 5, 'dapper reviews', 'would buy again 10/10.', 1),
-- (DEFAULT, 7, 3, 'ssef reviews', 'this is a review.', 6),
-- (DEFAULT, 8, 3, 'dvert reviews', 'another one.', 3),
-- (DEFAULT, 9, 2, 'ser reviews', 'review my tinder.', 4),
-- (DEFAULT, 10, 5, 'wert reviews', 'help please.', 2),
-- (DEFAULT, 11, 4, 'awe reviews', 'call the cops.', 5),
-- (DEFAULT, 12, 4, 'tyn reviews', 'no ideas here.', 1)

-- SELECT name, review FROM restaurant
-- INNER JOIN review
-- ON restaurant.id = review.restaurant_id
-- WHERE restaurant.id = 3;

-- SELECT name, review FROM restaurant
-- INNER JOIN review
-- ON restaurant.id = review.restaurant_id
-- WHERE restaurant.name = 'onemore';

-- SELECT reviewer.name, review.review FROM reviewer
-- INNER JOIN review
-- ON reviewer.id = review.reviewer_id
-- WHERE reviewer.name = 'Bad food'

-- SELECT restaurant.name, review.review FROM restaurant
-- INNER JOIN review
-- ON restaurant.id = review.restaurant_id
-- WHERE restaurant.name = 'onemore';

-- SELECT restaurant.name, AVG(review.stars) FROM restaurant
-- INNER JOIN review
-- ON restaurant.id = review.restaurant_id
-- GROUP BY restaurant.id

-- SELECT restaurant.name, Count(review.review) FROM restaurant
-- INNER JOIN review
-- ON restaurant.id = review.restaurant_id
-- GROUP BY restaurant.id

-- SELECT restaurant.name, reviewer.name, review.review FROM restaurant
-- INNER JOIN reviewer
-- ON restaurant.id = reviewer.id
-- INNER JOIN review
-- ON restaurant.id = review.restaurant_id

-- SELECT reviewer.name, AVG(review.stars) FROM reviewer
-- INNER JOIN review
-- ON reviewer.id = review.reviewer_id
-- GROUP BY reviewer.name

-- SELECT reviewer.name, review.stars FROM reviewer
-- INNER JOIN review
-- ON reviewer.id = review.reviewer_id
-- ORDER BY stars ASC;

-- SELECT restaurant.category, count(restaurant.category) FROM restaurant
-- GROUP BY restaurant.category

-- SELECT restaurant.name, Count(review.stars)FROM restaurant
-- INNER JOIN review
-- ON restaurant.id = review.restaurant_id
-- WHERE review.stars = 5
-- GROUP BY restaurant.name

-- SELECT restaurant.category, AVG(review.stars) FROM restaurant
-- INNER JOIN review
-- ON restaurant.id = review.restaurant_id
-- GROUP BY restaurant.category



-- 5. Projects DB Exercise

--1
-- SELECT project.name, tech.name FROM project
-- INNER JOIN project_uses_tech ON project.id = project_uses_tech.project_id
-- INNER JOIN tech ON project_uses_tech.tech_id = tech.id
-- WHERE tech.name = 'JavaScript'
--2
-- SELECT tech.name, project.name FROM project
-- INNER JOIN project_uses_tech ON project.id = project_uses_tech.project_id
-- INNER JOIN tech ON project_uses_tech.tech_id = tech.id
-- WHERE project.name = 'Personal Website'
--3
-- SELECT * FROM tech
-- LEFT OUTER JOIN project_uses_tech ON tech.id = tech_id
-- WHERE project_id IS NULL
--4
-- SELECT tech.name, COUNT(*) FROM tech
-- LEFT OUTER JOIN project_uses_tech ON tech.id = tech_id
-- GROUP BY tech.id
--5
-- SELECT * FROM project
-- LEFT OUTER JOIN project_uses_tech ON project.id = project_id
-- WHERE tech_id IS NULL
--6
-- SELECT tech.name, COUNT(tech.name) AS project_count FROM project
-- LEFT OUTER JOIN project_uses_tech ON project.id = project_id
-- INNER JOIN tech ON tech.id = tech_id
-- GROUP BY tech.name
--7
-- SELECT project.name, tech.name FROM project
-- INNER JOIN project_uses_tech ON project.id = project_uses_tech.project_id
-- INNER JOIN tech ON project_uses_tech.tech_id = tech.id
--8
-- SELECT tech.name FROM tech
-- INNER JOIN project_uses_tech ON tech.id = tech_id
-- GROUP BY tech.name
--9
-- SELECT tech.name FROM tech
-- LEFT OUTER JOIN project_uses_tech ON tech.id = tech_id
-- WHERE project_id IS NULL
--10
-- SELECT project.name FROM project
-- INNER JOIN project_uses_tech ON project.id = project_id
-- GROUP BY project.name
--11
-- SELECT * FROM project
-- LEFT OUTER JOIN project_uses_tech ON project.id = project_id
-- WHERE tech_id IS NULL
--12
-- SELECT project.name, COUNT(tech_id) AS tech_count FROM project
-- LEFT OUTER JOIN project_uses_tech ON project.id = project_id
-- GROUP BY project.name 
-- ORDER BY COUNT(tech_id) DESC
--13
-- SELECT tech.name, COUNT(project_id) AS project_count FROM tech
-- LEFT OUTER JOIN project_uses_tech ON tech.id = tech_id
-- GROUP BY tech.name
-- ORDER BY COUNT(project_id) DESC
--14
