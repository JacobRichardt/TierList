import knockout = require("knockout");
import ItemsManager = require("Managers/Items");

type TierData = {Title:string; Items:{Title:string}[]};

class Shell
{
	public Tiers: KnockoutObservableArray<TierData> = knockout.observableArray<TierData>();

	constructor()
	{
		this.Tiers.push({ Title: "SS", Items: null});
		this.Tiers.push({ Title: "S+", Items: null });
		this.Tiers.push({ Title: "S", Items: null });
		this.Tiers.push({ Title: "A", Items: ItemsManager.Items() });
		this.Tiers.push({ Title: "B", Items: null });
		this.Tiers.push({ Title: "C", Items: null });
		this.Tiers.push({ Title: "D", Items: null });
		this.Tiers.push({ Title: "E", Items: null });
	}
}

export = Shell;