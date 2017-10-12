"use strict";

;(function () {
  calculateRatings();

  function calculateRatings() {
    var ratingsDistribution = $("ratings-distribution"),
        allVotes = parseFloat(ratingsDistribution.attr("all-votes")),
        receivedVotes = 0,
        widthProgressBar = 0;

    ratingsDistribution.find("review-rating").each(function () {
      receivedVotes = parseFloat($(this).attr("receive-votes"));
      widthProgressBar = parseFloat(receivedVotes / allVotes * 100);

      if (widthProgressBar > 0) {
        $(this).find("progress-bar").css("width", widthProgressBar + "%");
      } else {
        $(this).find("progress-bar").hide();
      }
    });
  }
})();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRlbnQvcmF0aW5nL3JhdGluZy5qcyJdLCJuYW1lcyI6WyJjYWxjdWxhdGVSYXRpbmdzIiwicmF0aW5nc0Rpc3RyaWJ1dGlvbiIsIiQiLCJhbGxWb3RlcyIsInBhcnNlRmxvYXQiLCJhdHRyIiwicmVjZWl2ZWRWb3RlcyIsIndpZHRoUHJvZ3Jlc3NCYXIiLCJmaW5kIiwiZWFjaCIsImNzcyIsImhpZGUiXSwibWFwcGluZ3MiOiI7O0FBQUEsQ0FBRyxhQUFZO0FBQ2JBOztBQUVBLFdBQVNBLGdCQUFULEdBQTRCO0FBQzFCLFFBQUlDLHNCQUFzQkMsRUFBRSxzQkFBRixDQUExQjtBQUFBLFFBQ0VDLFdBQVdDLFdBQVdILG9CQUFvQkksSUFBcEIsQ0FBeUIsV0FBekIsQ0FBWCxDQURiO0FBQUEsUUFFRUMsZ0JBQWdCLENBRmxCO0FBQUEsUUFHRUMsbUJBQW1CLENBSHJCOztBQUtBTix3QkFBb0JPLElBQXBCLENBQXlCLGVBQXpCLEVBQTBDQyxJQUExQyxDQUErQyxZQUFZO0FBQ3pESCxzQkFBZ0JGLFdBQVdGLEVBQUUsSUFBRixFQUFRRyxJQUFSLENBQWEsZUFBYixDQUFYLENBQWhCO0FBQ0FFLHlCQUFtQkgsV0FBWUUsZ0JBQWdCSCxRQUFqQixHQUE2QixHQUF4QyxDQUFuQjs7QUFFQSxVQUFJSSxtQkFBbUIsQ0FBdkIsRUFBMEI7QUFDeEJMLFVBQUUsSUFBRixFQUFRTSxJQUFSLENBQWEsY0FBYixFQUE2QkUsR0FBN0IsQ0FBaUMsT0FBakMsRUFBMENILG1CQUFtQixHQUE3RDtBQUNELE9BRkQsTUFHSztBQUNITCxVQUFFLElBQUYsRUFBUU0sSUFBUixDQUFhLGNBQWIsRUFBNkJHLElBQTdCO0FBQ0Q7QUFDRixLQVZEO0FBV0Q7QUFDRixDQXJCRSxHQUFEIiwiZmlsZSI6ImNvbnRlbnQvcmF0aW5nL3JhdGluZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIjsgKGZ1bmN0aW9uICgpIHtcbiAgY2FsY3VsYXRlUmF0aW5ncygpO1xuXG4gIGZ1bmN0aW9uIGNhbGN1bGF0ZVJhdGluZ3MoKSB7XG4gICAgbGV0IHJhdGluZ3NEaXN0cmlidXRpb24gPSAkKFwicmF0aW5ncy1kaXN0cmlidXRpb25cIiksXG4gICAgICBhbGxWb3RlcyA9IHBhcnNlRmxvYXQocmF0aW5nc0Rpc3RyaWJ1dGlvbi5hdHRyKFwiYWxsLXZvdGVzXCIpKSxcbiAgICAgIHJlY2VpdmVkVm90ZXMgPSAwLFxuICAgICAgd2lkdGhQcm9ncmVzc0JhciA9IDA7XG5cbiAgICByYXRpbmdzRGlzdHJpYnV0aW9uLmZpbmQoXCJyZXZpZXctcmF0aW5nXCIpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgcmVjZWl2ZWRWb3RlcyA9IHBhcnNlRmxvYXQoJCh0aGlzKS5hdHRyKFwicmVjZWl2ZS12b3Rlc1wiKSk7XG4gICAgICB3aWR0aFByb2dyZXNzQmFyID0gcGFyc2VGbG9hdCgocmVjZWl2ZWRWb3RlcyAvIGFsbFZvdGVzKSAqIDEwMCk7XG5cbiAgICAgIGlmICh3aWR0aFByb2dyZXNzQmFyID4gMCkge1xuICAgICAgICAkKHRoaXMpLmZpbmQoXCJwcm9ncmVzcy1iYXJcIikuY3NzKFwid2lkdGhcIiwgd2lkdGhQcm9ncmVzc0JhciArIFwiJVwiKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICAkKHRoaXMpLmZpbmQoXCJwcm9ncmVzcy1iYXJcIikuaGlkZSgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59KCkpOyJdfQ==
