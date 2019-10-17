
exports.up = function(knex) {
  return knex.schema.createTable("players", tbl => {
		tbl
			.increments()

		tbl
			.string('name', 128)
			.notNullable()

		tbl
			.string('sport', 128)
			.notNullable()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExsists("players")
};
