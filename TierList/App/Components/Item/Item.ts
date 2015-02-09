import knockout = require("knockout");

class Item
{
	public Title:KnockoutObservable<string> = knockout.observable("");

	constructor(data:{ Title:string })
	{
		this.Title(data.Title);
	}
}

export = Item;