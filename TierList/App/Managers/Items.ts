import knockout = require("knockout");

type ItemData = { Title: string };

export var Items: KnockoutObservableArray<ItemData> = knockout.observableArray<ItemData>([{ Title: "Bastet" }, { Title: "Aphrodites" }]);