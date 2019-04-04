const db = require('./conn');

class OwnedBy {
    constructor(id, user_id, card_id) {
        this.id = id;
        this.userId = user_id,
        this.cardId = card_id
    };

    save(id) {
        return db.result(`
        update ownedBy set
            user_id = ${this.userId},
            card_id = ${this.cardId}
        where id=${this.id}
        `);
    };

    static getUserCards(id){
        return db.any(`select * from ownedby where user_id=$1`, [id]);
    }

};

module.exports = OwnedBy;