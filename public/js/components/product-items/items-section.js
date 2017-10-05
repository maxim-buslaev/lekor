"use strict";

;(function () {
  removeItemsThatDoNotFit();

  function removeItemsThatDoNotFit() {
    if (document.documentElement.clientWidth > 1439) {
      var blockWithItems = $("block-for-items");
      blockWithItems.css("height", parseFloat(blockWithItems.find("item").css("height")));
    }
  }
})();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QtaXRlbXMvaXRlbXMtc2VjdGlvbi5qcyJdLCJuYW1lcyI6WyJyZW1vdmVJdGVtc1RoYXREb05vdEZpdCIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwiY2xpZW50V2lkdGgiLCJibG9ja1dpdGhJdGVtcyIsIiQiLCJjc3MiLCJwYXJzZUZsb2F0IiwiZmluZCJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxDQUFHLGFBQVk7QUFDYkE7O0FBRUEsV0FBU0EsdUJBQVQsR0FBbUM7QUFDakMsUUFBSUMsU0FBU0MsZUFBVCxDQUF5QkMsV0FBekIsR0FBdUMsSUFBM0MsRUFBaUQ7QUFDL0MsVUFBSUMsaUJBQWlCQyxFQUFFLGlCQUFGLENBQXJCO0FBQ0FELHFCQUFlRSxHQUFmLENBQW1CLFFBQW5CLEVBQ0VDLFdBQVdILGVBQWVJLElBQWYsQ0FBb0IsTUFBcEIsRUFBNEJGLEdBQTVCLENBQWdDLFFBQWhDLENBQVgsQ0FERjtBQUdEO0FBQ0Y7QUFDRixDQVhFLEdBQUQiLCJmaWxlIjoicHJvZHVjdC1pdGVtcy9pdGVtcy1zZWN0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiOyAoZnVuY3Rpb24gKCkge1xuICByZW1vdmVJdGVtc1RoYXREb05vdEZpdCgpO1xuXG4gIGZ1bmN0aW9uIHJlbW92ZUl0ZW1zVGhhdERvTm90Rml0KCkge1xuICAgIGlmIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGggPiAxNDM5KSB7XG4gICAgICBsZXQgYmxvY2tXaXRoSXRlbXMgPSAkKFwiYmxvY2stZm9yLWl0ZW1zXCIpO1xuICAgICAgYmxvY2tXaXRoSXRlbXMuY3NzKFwiaGVpZ2h0XCIsXG4gICAgICAgIHBhcnNlRmxvYXQoYmxvY2tXaXRoSXRlbXMuZmluZChcIml0ZW1cIikuY3NzKFwiaGVpZ2h0XCIpKVxuICAgICAgKTtcbiAgICB9XG4gIH1cbn0oKSk7Il19
