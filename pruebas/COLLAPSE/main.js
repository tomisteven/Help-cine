document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {
        menuWidth: 240,
        edge: 'left',
        closeOnClick: true,
        draggable: true
    });
  });