var routerApp = angular.module('routerApp', ['ui.router','loginApp','pageList','addCont','modifyCont','showCont','ybyPage']);
//挂载到全局对象上，方便访问
//$state是当前URL的信息
//$stateParmas信息中的参数
routerApp.run(function($rootScope, $state, $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
});
//设置路由
routerApp.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/index');
    $stateProvider
        .state('index',{
            url:'/index',
            views:{
                '':{
                    templateUrl:'tpls/home.html'
                },
                'main@index':{
                    templateUrl:'tpls/login.html'
                }
            }
        })
        .state('list', {
            url: '/{type:[0-9]{1,4}}',
            views: { //注意这里的写法，当一个页面上带有多个ui-view的时候如何进行命名和视图模板的加载动作
                '': {
                    templateUrl: 'tpls/list.html'
                },
                'type@list': {
                    templateUrl: 'tpls/type.html'
                },
                'grid@list': {
                    templateUrl: 'tpls/grid.html'
                }
            }
        })
        .state('add',{
            url:'/add',
            views: {
                '': {
                    templateUrl: 'tpls/add.html'
                },
                'type@add': {
                    templateUrl: 'tpls/type.html'
                },
                'addcon@add': {
                    templateUrl: 'tpls/addcon.html'
                }
            }
        })
        .state('modify', {
            url: '/modify/:Id',
            views: {
                '': {
                    templateUrl: 'tpls/modify.html'
                },
                'type@modify': {
                    templateUrl: 'tpls/type.html'
                },
                'modifycon@modify': {
                    templateUrl: 'tpls/modifycon.html'
                }
            }
        })
        .state('show', {
            url: '/show/:Id',
            views: {
                '': {
                    templateUrl: 'tpls/show.html'
                },
                'type@show': {
                    templateUrl: 'tpls/type.html'
                },
                'showcon@show': {
                    templateUrl: 'tpls/showcon.html'
                }
            }
        })
});