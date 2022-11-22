const fs = require('fs');
const { assert } = require('chai');
const { Shop, Item } = require('../src/gilded_rose.js');

const listNormalItems = ["Aging bad", "Elixir of the Mongoose", "+5 Dexterity Vest"];

describe("Normal Behavior", function () {

  it('quality should never exceed 50', () => {
    const elixir = new Item("Elixir of the Mongoose", 6, 52);
    const shop = new Shop();
    shop.updateNormal(elixir);


    assert.equal(elixir.quality, 50);
  });

  it('quality should never be negative', () => {
    const agingBad = new Item("Aging bad", 5, 1);
    const shop = new Shop([agingBad]);
    shop.updateNormal(agingBad);
    assert.equal(agingBad.quality, 0);
  });

  it('negative SellIn should decrease 2x quality', () => {
    const agingBad = new Item("Aging bad", 0, 30);
    const elixir = new Item('Elixir of the Mongoose', 0, 10);
    const shop = new Shop([elixir, agingBad]);

    // shop.updateQuality();
    shop.updateQuality();

    assert.equal(agingBad.quality, 28);
    assert.equal(elixir.quality, 8);
  })

  it('should decrease sellIn but not quality', () => {

    let anyError = false;

    // Ajout dans le shop des items normaux
    const shopItems = listNormalItems.map(i => new Item(i, 10, 0));
    const shop = new Shop(shopItems);
    // shop.updateQuality();
    shop.updateQuality();

    // verification des proprietes
    shopItems.forEach((item) => {
      if (item.quality !== 0 || item.sellIn !== 9)
        anyError = true;
    })

    assert.notOk(anyError);
  })

})
