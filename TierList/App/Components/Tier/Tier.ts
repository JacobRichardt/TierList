import knockout = require("knockout");

type ItemData = {Title:string};
type TierData = { Title: string; Items: ItemData[] };

class Tier
{
	public Title: KnockoutObservable<string> = knockout.observable("");
	public Items: KnockoutObservableArray<ItemData> = knockout.observableArray<ItemData>();

	constructor(data:TierData)
	{
		this.Title(data.Title);

		if(data.Items != null)
			this.Items.push.apply(this.Items, data.Items);
	}

	public DragOver(target: Tier, event: JQueryEventObject): boolean
	{
		var dragEvent = <DragEvent>event.originalEvent;

		var isTierItem = dragEvent.dataTransfer.types.contains("application/x-tieritem");
		if (isTierItem)
		{
			dragEvent.dataTransfer.dropEffect = "move";
			event.preventDefault();
		}
		return true;
	}

	public Drop(target: Tier, event: JQueryEventObject): boolean
	{
		var dragEvent = <DragEvent>event.originalEvent;

		var itemId = dragEvent.dataTransfer.getData("application/x-tieritem");

		event.preventDefault();

		console.log(itemId);
		
		return false;
	}
}

export = Tier;