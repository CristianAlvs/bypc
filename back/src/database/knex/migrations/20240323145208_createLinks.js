exports.up = knex => knex.schema.createTable("links", table => {
    table.increments("id");
    table.text("url").notNullable();

    table.integer("card_id").references("id").inTable("cards").onDelete("CASCADE");
});

exports.down = knex => knex.schema.dropTable("tags");

