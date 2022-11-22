class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items = []) {
    this.items = items;
  }

  /*
  /!\ Do not change code above this line /!\
  */

  updateQuality() {
    this.items.forEach(item => {
      switch (item.name) {
        case 'Aged Brie':
          this.updateAgedBrie(item);
          item.sellIn--;
          break;
        case 'Backstage passes to a TAFKAL80ETC concert':
          this.updateTicket(item);
          item.sellIn--;
          break;
        case 'Sulfuras, Hand of Ragnaros':
          this.updateSulfuras(item);
          break;
        default:
          this.updateNormal(item);
          item.sellIn--;
          break;
      }
    });
  }

  setQuality(item, quality) {
    if (item.quality + quality <= 0) {
      item.quality = 0;
    }
    else if (item.quality + quality > 50) {
      item.quality = 50;
    }
    else {
      item.quality += quality;
    }
  }

  updateNormal(item) {
    if (item.sellIn <= 0) {
      this.setQuality(item, -2);
    } else {
      this.setQuality(item, -1);
    }
  }

  updateTicket(item) {
    if (item.sellIn <= 0) {
      item.quality = 0;
    } else if (item.sellIn <= 5) {
      this.setQuality(item, 3);
    } else if (item.sellIn <= 10) {
      this.setQuality(item, 2);
    } else {
      this.setQuality(item, 1);
    }
  }

  updateAgedBrie(item) {
    if (item.sellIn <= 0) {
      this.setQuality(item, 2);
    } else {
      this.setQuality(item, 1);
    }
  }

  updateSulfuras(item) {
    return;
  }

}
module.exports = {
  Item,
  Shop
}
