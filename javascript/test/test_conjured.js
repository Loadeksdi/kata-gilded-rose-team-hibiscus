const { assert } = require('chai');
const { Shop, Item } = require('../src/gilded_rose.js');

describe("Conjured Behavior", () => {

    it("should decrease quality by 2", () => {
        const conjuredItem = new Item("Conjured Mana Cake", 3, 6);
        const shop = new Shop([conjuredItem]);
        shop.updateQuality();
        assert.equal(conjuredItem.quality, 4);
    });
    
});