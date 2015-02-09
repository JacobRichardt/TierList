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
}

export = Tier;