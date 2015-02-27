define(["require", "exports", "knockout"], function (require, exports, knockout) {
    var Tier = (function () {
        function Tier(data) {
            this.Title = knockout.observable("");
            this.Items = knockout.observableArray();
            this.Title(data.Title);
            if (data.Items != null)
                this.Items.push.apply(this.Items, data.Items);
        }
        Tier.prototype.DragOver = function (target, event) {
            var dragEvent = event.originalEvent;
            var isTierItem = dragEvent.dataTransfer.types.contains("application/x-tieritem");
            if (isTierItem) {
                dragEvent.dataTransfer.dropEffect = "move";
                event.preventDefault();
            }
            return true;
        };
        Tier.prototype.Drop = function (target, event) {
            var dragEvent = event.originalEvent;
            var itemId = dragEvent.dataTransfer.getData("application/x-tieritem");
            event.preventDefault();
            console.log(itemId);
            return false;
        };
        return Tier;
    })();
    return Tier;
});
