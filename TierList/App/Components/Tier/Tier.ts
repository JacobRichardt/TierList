import knockout = require("knockout");

type TierData = { Title: string };

class Tier
{
	public Title: KnockoutObservable<string> = knockout.observable("");

	constructor(data:TierData)
	{
		this.Title(data.Title);
	}
}

export = Tier;