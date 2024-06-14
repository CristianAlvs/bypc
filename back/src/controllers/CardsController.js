const knex = require("../database/knex");
const DiskStorage = require("../providers/DiskStorage");

class CardsController {
    async create(request, response) {
        const { title, description, value, form_of_payment, tag, link} = request.body;

        let image;

        if(request.file) {
            const imageFilename = request.file.filename;
            const diskStorage = new DiskStorage();
            image = await diskStorage.saveFile(imageFilename);
        }

        const user_id = request.user.id;
        
        const tagData = await knex("tags").where({ name: tag }).first();
        let tag_id = null;

        if (tagData) {
            tag_id = tagData.id;
        }

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

    async update(request, response) {
        const { id } = request.params;
    
        const { title, description, value, form_of_payment, tag, link} = request.body;
    
        const user_id = request.user.id;
    
        const tagData = await knex("tags").where({ name: tag }).first();
        let tag_id = null;
    
        if (tagData) {
            tag_id = tagData.id;
        }
    
        let image = null;
        if (request.file) {
            const imageFilename = request.file.filename;
            const diskStorage = new DiskStorage();
            
            // Verificar se a imagem antiga existe antes de deletá-la
            const oldCard = await knex("cards").where({ id }).first();
            if (oldCard && oldCard.image) {
                await diskStorage.deleteFile(oldCard.image);
            }
    
            // Salvar a nova imagem
            image = await diskStorage.saveFile(imageFilename);
        }
    
        await knex("cards").update({
            title,
            description,
            value,
            form_of_payment,
            image,
            tag_id,
            user_id
        }).where({ id });
    
        await knex("links").update({
            url: link
        }).where({ card_id: id });
    
        response.json();
    }

    async show(request, response) {
        const { id } = request.params;

        const card = await knex("cards").where({ id }).first();
        const tag = await knex("tags").where({ id: card.tag_id }).first();
        const link = await knex("links").where({ card_id: id }).first();

        return response.json({
            ...card,
            tag,
            link
        });
    }

    async delete(request, response) {
        const { id } = request.params;

        await knex("cards").where({ id }).delete();

        return response.json();
    }

    async index(request, response) {
        const user_id = request.user.id;

        const cardsRequest = await knex("cards").where({ user_id }).orderBy("title");

        const cards = await Promise.all(cardsRequest.map(async (card) => {
            const tag = await knex("tags").where({ id: card.tag_id }).first();
            const link = await knex("links").where({ card_id: card.id }).first();
            
            return {
                ...card,
                tag,
                link
            };
        }));

        return response.json(cards);
    }
}

module.exports = CardsController;