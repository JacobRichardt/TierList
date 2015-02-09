define(["require", "exports", "knockout"], function (require, exports, knockout) {
    var Item = (function () {
        function Item(data) {
            this.Title = knockout.observable("");
            this.Title(data.Title);
        }
        return Item;
    })();
    return Item;
});
