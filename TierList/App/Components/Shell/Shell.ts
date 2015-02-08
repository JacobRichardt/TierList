import knockout = require("knockout");

type TierData = {Title:string};

class Shell
{
	public Tiers: KnockoutObservableArray<TierData> = knockout.observableArray<TierData>();

	constructor()
	{
		this.Tiers.push({ Title: "SS" });
		this.Tiers.push({ Title: "S+" });
		this.Tiers.push({ Title: "S" });
		this.Tiers.push({ Title: "A" });
		this.Tiers.push({ Title: "B" });
		this.Tiers.push({ Title: "C" });
		this.Tiers.push({ Title: "D" });
		this.Tiers.push({ Title: "E" });
	}
}

export = Shell;