define(["require", "exports", "knockout", "Managers/Items"], function (require, exports, knockout, ItemsManager) {
    var Shell = (function () {
        function Shell() {
            this.Tiers = knockout.observableArray();
            this.Tiers.push({ Title: "SS", Items: null });
            this.Tiers.push({ Title: "S+", Items: null });
            this.Tiers.push({ Title: "S", Items: null });
            this.Tiers.push({ Title: "A", Items: ItemsManager.Items() });
            this.Tiers.push({ Title: "B", Items: null });
            this.Tiers.push({ Title: "C", Items: null });
            this.Tiers.push({ Title: "D", Items: null });
            this.Tiers.push({ Title: "E", Items: null });
        }
        return Shell;
    })();
    return Shell;
});
