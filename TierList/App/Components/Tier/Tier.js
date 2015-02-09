define(["require", "exports", "knockout"], function (require, exports, knockout) {
    var Tier = (function () {
        function Tier(data) {
            this.Title = knockout.observable("");
            this.Items = knockout.observableArray();
            this.Title(data.Title);
            if (data.Items != null)
                this.Items.push.apply(this.Items, data.Items);
        }
        return Tier;
    })();
    return Tier;
});
