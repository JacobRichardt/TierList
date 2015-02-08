define(["require", "exports", "knockout"], function (require, exports, knockout) {
    var Tier = (function () {
        function Tier(data) {
            this.Title = knockout.observable("");
            this.Title(data.Title);
        }
        return Tier;
    })();
    return Tier;
});
