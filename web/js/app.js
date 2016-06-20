var app = angular.module('jsywp', ['ui.bootstrap','ui.router','chart.js','ngFileUpload']);

app.controller('indexCtrl', ['$scope','$rootScope', function($scope,$rootScope){
    $rootScope.systems=["一系统","二系统","三系统"];
    $rootScope.subsystems = [
        {
          label: '一系统',
          subcompanys: [
            '1','1','1','1'
          ]
        },
        {
          label: '二系统',
          subcompanys: [
            '2','2','2','2'
          ]
        },
        {
          label: '三系统',
          subcompanys: [
            '3','3','3','3'
          ]
        }
    ];
	$scope.status = {
		closeothers : false,
		isoneopen : true ,
		isonedisable : false
	}
}]);

app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/index');
    $stateProvider
        .state('index', {
            url: '/index',
            templateUrl: 'templates/project/ProjectOnlineState.html',
            controller: 'ProjectOnlineStateCtrl'
        })
    .state('ProjectList', {
            url: '/ProjectList',
            templateUrl: 'templates/project/ProjectList.html',
            controller : 'ProjectListCtrl'
        })
    .state('ProjectInfo',{
        url:'/ProjectInfo/id=:id',
        templateUrl:'templates/project/ProjectInfo.html',
        controller :'ProjectInfoCtrl'
    })
    .state('ProjectOnlineList', {
            url: '/ProjectOnlineList',
            templateUrl: 'templates/project/ProjectOnlineList.html',
            controller :'ProjectOnlineListCtrl'
        })
    .state('ProjectOnlineEdit',{
        url:'/ProjectOnlineEdit/id=:id',
        templateUrl:'templates/project/ProjectOnlineEdit.html',
        controller :'ProjectOnlineEditCtrl'
    })
    .state('ProjectOnlineAdd',{
        url:'/ProjectOnlineAdd',
        templateUrl:'templates/project/ProjectOnlineAdd.html',
        controller :'ProjectOnlineAddCtrl'
    })
    .state('ProjectOnlineState', {
            url: '/ProjectOnlineState',
            templateUrl: 'templates/project/ProjectOnlineState.html',
            controller: 'ProjectOnlineStateCtrl'
        })
    .state('APICustomerList', {
            url: '/APICustomerList',
            templateUrl: 'templates/apilink/APICustomerList.html',
            controller : 'APICustomerListCtrl'
        })
    .state('APICustomerEdit',{
        url:'/APICustomerEdit/id=:id',
        templateUrl:'templates/apilink/APICustomerEdit.html',
        controller : 'APICustomerEditCtrl'
    })
    .state('APICustomerAdd',{
        url:'/APICustomerEdit',
        templateUrl:'templates/apilink/APICustomerAdd.html',
        controller : 'APICustomerAddCtrl'
    })
    .state('APIProjectList', {
            url: '/APIProjectList',
            templateUrl: 'templates/apilink/APIProjectList.html',
            controller : 'APIProjectListCtrl'
        })
    .state('APIProjectInfo',{
        url:'/APIProjectInfo/id=:id',
        templateUrl:'templates/apilink/APIProjectInfo.html',
        controller : 'APIProjectInfoCtrl'
    })
    .state('APIProjectAdd',{
        url:'/APIProjectAdd',
        templateUrl:'templates/apilink/APIProjectAdd.html',
        controller : 'APIProjectAddCtrl'
    })
    .state('APIProjectState', {
            url: '/APIProjectState',
            templateUrl: 'templates/apilink/APIProjectState.html',
            controller:'APIProjectStateCtrl'
        })
    .state('APIList',{
        url: '/APIList',
        templateUrl: 'templates/apilink/APIList.html',
        controller : 'APIListCtrl'
    })
    .state('APIEdit',{
        url: '/APIEdit/id=:id',
        templateUrl: 'templates/apilink/APIEdit.html',
        controller : 'APIEditCtrl'
    })
    .state('APIAdd',{
        url: '/APIAdd',
        templateUrl: 'templates/apilink/APIAdd.html',
        controller : 'APIAddCtrl'
    })
    .state('Hosts',{
        url: '/Hosts',
        templateUrl: 'templates/automation/Hosts.html',
        controller : 'HostsCtrl'
    })
    .state('HostEdit',{
        url: '/HostEdit/id=:id',
        templateUrl: 'templates/automation/HostEdit.html',
        controller : 'HostEditCtrl'
    })
    .state('HostAdd',{
        url: '/HostAdd',
        templateUrl: 'templates/automation/HostAdd.html',
        controller : 'HostAddCtrl'
    })
    .state('Projects',{
        url: '/Projects',
        templateUrl: 'templates/automation/Projects.html',
        controller : 'ProjectsCtrl'
    })
    .state('ProjectsEdit',{
        url: '/ProjectsEdit/id=:id',
        templateUrl: 'templates/automation/ProjectsEdit.html',
        controller : 'ProjectsEditCtrl'
    })
    .state('ProjectsAdd',{
        url: '/ProjectsAdd',
        templateUrl: 'templates/automation/ProjectsAdd.html',
        controller : 'ProjectsAddCtrl'
    })
    .state('Services',{
        url: '/Services',
        templateUrl: 'templates/automation/Services.html',
        controller : 'ServicesCtrl'
    })
    .state('ServicesEdit',{
        url: '/ServicesEdit/id=:id',
        templateUrl: 'templates/automation/ServicesEdit.html',
        controller : 'ServicesEditCtrl'
    })
    .state('ServicesAdd',{
        url: '/ServicesAdd',
        templateUrl: 'templates/automation/ServicesAdd.html',
        controller : 'ServicesAddCtrl'
    })
    .state('Automation',{
        url: '/Automation',
        templateUrl: 'templates/automation/Automation.html',
        controller : 'AutomationCtrl'
    });
});
