SELECT * FROM cart
INNER JOIN client `c`
ON  c.id
INNER JOIN products `p`
ON  p.id