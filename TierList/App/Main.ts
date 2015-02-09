declare var CacheBuster: number;

requirejs.config({
	paths: {
		text:			"../Lib/requirejs/text",
		jquery:			"../Lib/jquery/jquery.min",
		knockout:		"../Lib/knockout/knockout.min",
		bootstrap:		"../Lib/bootstrap/js/bootstrap.min",
	},
	shim: {
		bootstrap: {
			deps: ['jquery']
		}
	},
	waitSeconds: 20,
	urlArgs: "bust=" + CacheBuster
});

require(['NameConventionLoader', 'knockout', 'bootstrap'], (nameConventionLoader:any, knockout: any) =>
{
	knockout.components.loaders.push(new nameConventionLoader("TierList"));
	knockout.applyBindings();
});