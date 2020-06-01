
exports.up = function (knex) {
    return knex.schema.createTable('cards', tbl => {
        tbl.increments(); // ID
        tbl.integer('deck_id') // ID FROM DECKS TABLE
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('decks');
        tbl.string('card_front') // FRONT OF CARD 
            .notNullable();
        tbl.string('card_back') // BACK OF CARD 
            .notNullable();
        tbl.string('notes'); // OPTIONAL NOTES SECTION
        tbl.timestamp('created_at') // CREATED AT TIMESTAMP
            .notNullable()
            .defaultTo(knex.fn.now());
        tbl.timestamp('updated_at') // UPDATED AT TIMESTAMP 
            .notNullable()
            .defaultTo(knex.fn.now());
        tbl.decimal('comfort_level') // COMFORT LEVEL FROM 0 TO 1 
            .notNullable()
            .defaultTo(0);
        tbl.timestamp('next_due') // NEXT DUE TIMESTAMP 
            .notNullable()
            .defaultTo(knex.fn.now());
        tbl.string('card_img'); // OPTIONAL CARD IMAGE 
    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('cards');
};
