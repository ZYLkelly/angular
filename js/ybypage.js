/**
 * Created by Administrator on 2017/2/15.
 */

angular.module('ybyPage', []).directive('ybyPage', [function () {
    return {
        restrict: 'E',
        templateUrl: 'tpls/page.html',
        replace: true,
        scope: {
            conf: '='
        },
        link: function (scope, element, attrs) {

            scope.changeCurrentPage = function (item) {
                if(item == '...'){
                    return;
                }
                scope.conf.currentPage = item;

            }
            scope.prevPage = function () {
                if (scope.conf.currentPage > 1) {
                    scope.conf.currentPage -= 1;
                }
            }
            scope.nextPage = function () {
                if (scope.conf.currentPage < scope.conf.numberOfPages) {
                    scope.conf.currentPage += 1;
                }
            }
            function getPagination() {
                scope.conf.numberOfPages = Math.ceil(scope.conf.totalItems / scope.conf.itemsPerPage);
                scope.pageList = [];
                //for(var i=0;i<scope.conf.numberOfPages;i++){
                //    scope.pageList.push(i+1);
                //}
                if (scope.conf.numberOfPages > 6) {
                    if (scope.conf.currentPage <= 3) {
                        scope.pageList = [1, 2, 3, 4, '...', scope.conf.numberOfPages];
                    }
                    if (scope.conf.currentPage > 3 && scope.conf.currentPage < scope.conf.numberOfPages - 2) {
                        scope.pageList = [1, '...', scope.conf.currentPage - 1, scope.conf.currentPage, scope.conf.currentPage + 1, '...', scope.conf.numberOfPages]
                    }
                    if (scope.conf.currentPage >= scope.conf.numberOfPages - 2) {
                        scope.pageList = [1, '...', scope.conf.numberOfPages - 3, scope.conf.numberOfPages - 2, scope.conf.numberOfPages - 1, scope.conf.numberOfPages];
                    }
                } else {
                    for (var i = 1; i <= scope.conf.numberOfPages; i++) {
                        scope.pageList.push(i);
                    }
                }
                    if (scope.conf.onChange) {
                        scope.conf.onChange();
                    }

                }

                scope.$watch(function () {
                    return scope.conf.currentPage + ' ' + scope.conf.totalItems + ' ';
                }, getPagination)
            }
        }

    }])

