import knockout = require("knockout");

class Item
{
	public Id:KnockoutObservable<string> = knockout.observable("");
	public Title:KnockoutObservable<string> = knockout.observable("");

	constructor(data:{Id:string; Title:string })
	{
		this.Id(data.Id);
		this.Title(data.Title);
	}

	public DragStart(target:Item, event:JQueryEventObject):boolean
	{
		var dragEvent = <DragEvent>event.originalEvent;

		dragEvent.dataTransfer.setData("application/x-tieritem", this.Id());
		dragEvent.dataTransfer.effectAllowed = "move";

		return true;
	}
}

export = Item;