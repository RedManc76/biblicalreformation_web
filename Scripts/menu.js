document.addEventListener('DOMContentLoaded', function() {

    if (window.innerWidth <= 768) {

        var burgerContainer = document.querySelector('.burger-container');
        var header = document.querySelector('.header');
        var mobileMenuItems = document.querySelectorAll('.mobile_menu-item');

        burgerContainer.addEventListener('click', function() {
            header.classList.toggle('menu-opened');
            if (header.classList.contains('menu-opened')) {
                menuOpen();
            } else {
                menuClose();
            }
        });

        function menuOpen() {
            mobileMenuItems.forEach(function(menuItem, index) {
                menuItem.style.transition = 'transform 0s, opacity 0s';
                menuItem.style.opacity = '0';
                menuItem.style.transform = 'scale(1.5)';
                setTimeout(function() {
                    menuItem.style.transition = 'transform .5s cubic-bezier(0.4, 0.01, 0.165, 0.99), opacity .6s cubic-bezier(0.4, 0.01, 0.165, 0.99)';
                    menuItem.style.opacity = '1';
                    menuItem.style.transform = 'scale(1) translateY(-50px)';
                }, index * 60 + 200);
            });
        }

        function menuClose() {
            var len = mobileMenuItems.length;
            mobileMenuItems.forEach(function(menuItem, index) {
                setTimeout(function() {
                    menuItem.style.transition = 'transform 0s, opacity 0s';
                    menuItem.style.opacity = '0';
                    menuItem.style.transform = 'scale(1.5)';
                }, (len - index) * 60 + 200);
            });
        }

        document.querySelectorAll('.mobile_menu-item').forEach(function(menuItem) {
            menuItem.addEventListener('click', function() {
                var submenu = menuItem.querySelector('.mobile_submenu');
                var allSubmenus = document.querySelectorAll('.mobile_submenu');
                var allMenuItemElements = document.querySelectorAll('.mobile_menu-item');
                var allSubmenuItemElements = document.querySelectorAll('.mobile_submenu-item');

                // Close all open submenus
                allSubmenus.forEach(function(sub) {
                    if (sub !== submenu) {
                        sub.style.display = 'none';
                    }
                });

                allMenuItemElements.forEach(function(item) {
                    item.style.marginTop = '0px';
                });

                allSubmenuItemElements.forEach(function(submenuItem) {
                    submenuItem.style.transition = 'transform 0s, opacity 0s';
                    submenuItem.style.opacity = '0';
                    submenuItem.style.transform = 'scale(0)';
                });

                if (submenu) {
                    submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
                    if (submenu.style.display === 'block') {
                        menuItem.style.borderBottom = '0px';
                        var submenuItems = submenu.querySelectorAll('.mobile_submenu-item');
                        submenuItems.forEach(function(submenuItem, index) {
                            setTimeout(function() {
                                submenuItem.style.display = 'block';
                                submenuItem.style.transition = 'transform .5s cubic-bezier(0.4, 0.01, 0.165, 0.99), opacity .6s cubic-bezier(0.4, 0.01, 0.165, 0.99)';
                                submenuItem.style.opacity = '1';
                                submenuItem.style.transform = 'scale(1)';
                            }, index * 50 + 100);
                        });
                    } else {
                        menuItem.style.borderBottom = '1px solid #333';
                    }
                }
            });
        });
    }

    window.onscroll = function() {
        if (window.innerWidth > 768) {
            var navbar = document.getElementById('navbar');
            var placeholder = document.querySelector('.placeholder');
            var header = document.querySelector('.mainhead');
            if (window.pageYOffset > header.offsetHeight) {
                navbar.classList.add('sticky');
                placeholder.style.display = 'block';
            } else {
                navbar.classList.remove('sticky');
                placeholder.style.display = 'none';
            }
        }
    };

});