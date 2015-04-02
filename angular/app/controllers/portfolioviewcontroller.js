function PortfolioViewerController( $scope, $routeParams ){

$scope.load_error_text = "";


//inject the variable parameter, portfolio_name, to link back to app.js
$scope.portfolio_name = $routeParams.portfolio_name;

var portfolios = { 

    "vessel1309": [
    { filename: "vessel1309-001.png",
    date: "2013/09/05",
    description: "I love this boat, so much booty." },
    { filename: "vessel1309-002.png",
    date: "2013/09/06",
    description: "We had a wonderful time on her." }
    ],

    "innocents1404": [
    { filename: "innocents1404-001.jpg",
    date: "2014/04/14",
    description: "So cold and so much sacking!" },
    { filename: "innocents1404-002.jpg",
    date: "2014/04/15",
    description: "The sails are so white here." }
    ],

    "firstmate1210": [
    { filename: "firstmate1210-001.jpg",
    date: "2012/10/01",
    description: "Getting mah pipe on!" },
    { filename: "firstmate1210-002.jpg",
    date: "2012/10/02",
    description: "FTW!!!11!one!1" }
    ]
};


	if (portfolios[$scope.portfolio_name]) {
		$scope.portfolios = portfolios[$scope.portfolios_name]
	} else {
		$scope.load_error_text = "can't find the portfolio name";
	}	
	

}


portfolioApp.controller("PortfolioViewerController", PortfolioViewerController);