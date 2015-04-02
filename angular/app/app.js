var portfolioApp = angular.module("portfolioSharingApp", [ 'ngRoute' ]);

	portfolioApp.config(function($routeProvider) {
        $routeProvider
        .when("/portfolios", { controller: "PortfolioListController", templateUrl: "app/partials/portfolio_list_partial.html" })
        .when("/portfolio/:portfolio_name", { controller: "PortfolioViewerController", templateUrl: "app/partials/portfolio_viewer_partial.html" })
        .when("/", { redirectTo: "/portfolios"})
        .otherwise({ redirectTo: "/404_page"})
    });

//app.js refer to declaration of angular module and routing config    