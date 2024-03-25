const knex = require("../database/knex");
const DiskStorage = require("../providers/DiskStorage");

class CardsController {
    async create(request, response) {
        const { title, description, value, form_of_payment, tag, link} = request.body;
        const imageFilename = request.file.filename;

        const { user_id } = request.params;

        const tagData = await knex("tags").where({ name: tag }).first();
        let tag_id = null;

        if (tagData) {
            tag_id = tagData.id;
        }

        const diskStorage = new DiskStorage();
        const image = await diskStorage.saveFile(imageFilename);

        const [card_id] = await knex("cards").insert({
            title,
            description,
            value,
            form_of_payment,
            image,
            tag_id,
            user_id
        });

        const linkInsert = { card_id, url: link }
        await knex("links").insert(linkInsert);

        response.json();
    }
}

module.exports = CardsController;