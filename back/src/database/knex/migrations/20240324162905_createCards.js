exports.up = knex => knex.schema.createTable("cards", table => {
    table.increments("id");
    table.text("title");
    table.text("description");
    table.decimal("value");
    table.text("form_of_payment");
    table.text("image");

    table.integer("user_id").references("id").inTable("users");
    table.integer("tag_id").references("id").inTable("tags");

    table.timestamp("created_at").default(knex.fn.now());
    table.timestamp("updated_at").default(knex.fn.now());
});

exports.down = knex => knex.schema.dropTable("cards");