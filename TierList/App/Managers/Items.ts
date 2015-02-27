import knockout = require("knockout");

type ItemData = { Id: String; Title: string };

export var Items: KnockoutObservableArray<ItemData> = knockout.observableArray<ItemData>([{ Id: "1", Title: "Bastet" }, { Id: "2",  Title: "Aphrodites" }]);