const fs = require('fs');
const { assert } = require('chai');
const { Shop, Item } = require('../src/gilded_rose.js');

describe("Aged Brie", function () {

    it('should update the quality of Aged Brie before sellIn by 1', () => {
        const brieItem = new Item('Aged Brie', 10, 1);

        const shop = new Shop();
        shop.updateAgedBrie(brieItem);

        assert.equal(brieItem.quality, 2);
    });

    it('should update the quality of Aged Brie at sellIn by 2', () => {
        const brieItem = new Item('Aged Brie', 0, 10);

        const shop = new Shop();
        shop.updateAgedBrie(brieItem);

        assert.equal(brieItem.quality, 12);
    });

    it('should update the quality of Aged Brie after sellIn by 2', () => {
        const brieItem = new Item('Aged Brie', -1, 10);

        const shop = new Shop();
        shop.updateAgedBrie(brieItem);

        assert.equal(brieItem.quality, 12);
    });

})