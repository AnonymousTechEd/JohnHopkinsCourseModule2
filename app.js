(function() {
    'use strict';

    angular.module('ShoppingListApp', [])
        .controller('ShoppingListAddController', ShoppingListAddController)
        .controller('ShoppingListShowController', ShoppingListShowController)
        .controller('ShoppingListShowController2', ShoppingListShowController2)
        .service('ShoppingListService', ShoppingListService);

    ShoppingListAddController.$inject = ['ShoppingListService'];

    function ShoppingListAddController(ShoppingListService) {
        var itemAdder = this;

        itemAdder.itemName = "";
        itemAdder.itemQuantity = "";

        itemAdder.addItem = function() {
            ShoppingListService.addItem(itemAdder.itemName, itemAdder.itemQuantity);
        }
    }


    ShoppingListShowController.$inject = ['ShoppingListService'];

    function ShoppingListShowController(ShoppingListService) {
        var showList = this;

        showList.items = ShoppingListService.getItems(1);

        showList.removeItem = function(itemIndex) {
            ShoppingListService.removeItem(itemIndex, 1);
        };
        showList.BuyItem = function(itemIndex) {
            ShoppingListService.BuyItem(itemIndex);
        };
    }
    ShoppingListShowController2.$inject = ['ShoppingListService'];

    function ShoppingListShowController2(ShoppingListService) {
        var showList2 = this;

        showList2.items = ShoppingListService.getItems();

        showList2.removeItem = function(itemIndex) {
            ShoppingListService.removeItem(itemIndex);
        };
    }






    function ShoppingListService() {
        var service = this;

        // List of shopping items
        var items = [{name: "Cookies",quantity: 10},{name: "Potatoes",quantity: 5},{name: "Water Bottles",quantity: 4},{name: "Pineapple",quantity: 1},{name: "Apples",quantity: 5} ];
        var items2 = [];

        service.addItem = function(itemName, quantity) {
            var item = {
                name: itemName,
                quantity: quantity
            };
            items.push(item);
        };

        service.removeItem = function(itemIndex, which) {
            if (which == 1) {
                items.splice(itemIndex, 1);
                } else {
                    items2.splice(itemIndex, 1);
                }
        };
        service.BuyItem = function(itemIndex) {
            var item = items[itemIndex]
            items.splice(itemIndex, 1);
            items2.push(item)
        };
        service.getItems = function(which) {
            if (which == 1) {
            return items;
            } else {
                return items2
            }
        };
    }

})();