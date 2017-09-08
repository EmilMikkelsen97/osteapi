const cheeses = require('../data/cheeses');

/**
 * @module Cheeses
 */
module.exports = {
    /**
     * getAll
     * Returner et JSON objekt med alle oste
     * @returns {Objekt}
     */
    'getAll': () => cheeses,

    /**
     * getOne
     * Returner et JSON objekt med en enkelt ost
     * @param {string} varenr - varenummeret på en ost
     * @returns {Objekt}
     */
    'getOne': (varenr) => {
        let currentCheese = null;
        cheeses.forEach((cheese) => {
            if (cheese.varenr == varenr) {
                currentCheese = JSON.stringify(cheese);
            }
        });
        if (currentCheese != null) {
            return currentCheese;
        } else {
            return {
                "code": "ResourceNotFound", 
                "message": `${varenr} does not exist`
            };
        }
    }
};