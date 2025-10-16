class PaginationHelper {
    constructor(collection, itemsPerPage) {
        this.collection = collection;
        this.itemsPerPage = itemsPerPage;
        this.pages = [];
        for (let i = 0; i < this.pageCount(); i++) {
            const arr = this.collection.slice(i * this.itemsPerPage, (i * this.itemsPerPage <= this.collection.length) ? (i * this.itemsPerPage + this.itemsPerPage) : this.collection.length);
            this.pages.push(arr);
        }
    }
    itemCount() {
        return this.collection.length;
    }
    pageCount() {
        return Math.ceil(this.collection.length / this.itemsPerPage);
    }
    pageItemCount(pageIndex) {
        return this.pages[pageIndex] ? this.pages[pageIndex].length : -1;
    }
    pageIndex(itemIndex) {
        if (itemIndex < 0) return -1;
        let count = 0;
        for (let i = 0; i < this.pages.length; i++) {
            count += this.pages[i].length;
            if (itemIndex < count) return i;
        }
        return -1;
    }
}

const collection = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
const helper = new PaginationHelper(collection, 10);
// const itemCountRes = helper.itemCount();
// const pageCountRes = helper.pageCount();
// const pageItemCount = helper.pageItemCount(2);
// const pageIndexRes = helper.pageIndex(2);
// console.log('Item count res: ' + itemCountRes);
// console.log('Page count: ' + pageCountRes);
// console.log('Page items count');
// console.log(pageItemCount);
// console.log('Page Index: ' + pageIndexRes);