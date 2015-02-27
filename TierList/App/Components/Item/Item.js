define(["require", "exports", "knockout"], function (require, exports, knockout) {
    var Item = (function () {
        function Item(data) {
            this.Id = knockout.observable("");
            this.Title = knockout.observable("");
            this.Id(data.Id);
            this.Title(data.Title);
        }
        Item.prototype.DragStart = function (target, event) {
            var dragEvent = event.originalEvent;
            dragEvent.dataTransfer.setData("application/x-tieritem", this.Id());
            dragEvent.dataTransfer.effectAllowed = "move";
            return true;
        };
        return Item;
    })();
    return Item;
});
