const { assert } = require('chai');
const { Shop, Item } = require('../src/gilded_rose.js');

describe("Ticket tests", () => {

it('should update the quality of a concert ticket on +10 days', () => {
    const ticket = new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20);

    const shop = new Shop([ticket]);
    shop.updateTicket(ticket);

    assert.equal(ticket.quality, 21);
  });

  it('should update the quality of a concert ticket on -10 days', () => {
    const ticket = new Item("Backstage passes to a TAFKAL80ETC concert", 8, 30);

    const shop = new Shop([ticket]);
    shop.updateTicket(ticket);

    assert.equal(ticket.quality, 32);
  });

  it('should update the quality of a concert ticket on -5 days', () => {
    const ticket = new Item("Backstage passes to a TAFKAL80ETC concert", 4, 30);

    const shop = new Shop([ticket]);
    shop.updateTicket(ticket);

    assert.equal(ticket.quality, 33);
  });

  it('should update the quality of a concert ticket after concert', () => {
    const ticket = new Item("Backstage passes to a TAFKAL80ETC concert", -1, 20);

    const shop = new Shop([ticket]);
    shop.updateTicket(ticket);

    assert.equal(ticket.quality, 0);
  });

});