const fs = require('fs');
const { assert } = require('chai');
const { Shop, Item } = require('../src/gilded_rose.js');

describe("Sulfuras", function () {

    it('sellIn of sulfuras should never change', () => {

        const sulfuras = new Item('Sulfuras, Hand of Ragnaros', null, 80);
        const shop = new Shop();

        shop.updateSulfuras(sulfuras);

        assert.equal(sulfuras.sellIn, null);
    })

    it('quality of sulfuras should never change', () => {

        const sulfuras = new Item('Sulfuras, Hand of Ragnaros', null, 80);
        const shop = new Shop();

        shop.updateSulfuras(sulfuras);

        assert.equal(sulfuras.quality, 80);
    })
})
