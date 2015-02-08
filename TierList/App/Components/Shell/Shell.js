define(["require", "exports", "knockout"], function (require, exports, knockout) {
    var Shell = (function () {
        function Shell() {
            this.Tiers = knockout.observableArray();
            this.Tiers.push({ Title: "SS" });
            this.Tiers.push({ Title: "S+" });
            this.Tiers.push({ Title: "S" });
            this.Tiers.push({ Title: "A" });
            this.Tiers.push({ Title: "B" });
            this.Tiers.push({ Title: "C" });
            this.Tiers.push({ Title: "D" });
            this.Tiers.push({ Title: "E" });
        }
        return Shell;
    })();
    return Shell;
});
