(function () {
    const header__btn_menu = document.getElementById( 'header__btn_menu' );
    const header__btn_search = document.getElementById( 'header__btn_search' );

    header__btn_menu.addEventListener( 'click', function() {
        const header__nav = document.getElementById( 'header__nav' );
        const header__btn_menu_open = document.getElementById( 'header__btn_menu_open' );
        const header__btn_menu_closed = document.getElementById( 'header__btn_menu_closed' );
        
        if ( header__nav.classList.contains( 'hidden' ) ) {
            this.classList.add('clicked');
            header__nav.classList.remove( 'hidden' );
            header__btn_menu_open.classList.add( 'hidden' );
            header__btn_menu_closed.classList.remove( 'hidden' );
        } else {
            header__nav.classList.add( 'hidden' );
            header__btn_menu_open.classList.remove( 'hidden' );
            header__btn_menu_closed.classList.add( 'hidden' );
            this.classList.remove('clicked');
        }
	} );

    header__btn_search.addEventListener('click', function () {
        const header__search = document.getElementById( 'header__search' );
        const header__btn_search_open = document.getElementById( 'header__btn_search_open' );
        const header__btn_search_closed = document.getElementById( 'header__btn_search_closed' );
        
        if ( header__nav.classList.contains( 'hidden' ) ) {
            this.classList.add('clicked');
            header__search.classList.remove( 'hidden' );
            header__btn_search_open.classList.add( 'hidden' );
            header__btn_search_closed.classList.remove( 'hidden' );
        } else {
            header__search.classList.add( 'hidden' );
            header__btn_search_open.classList.remove( 'hidden' );
            header__btn_search_closed.classList.add( 'hidden' );
            this.classList.remove('clicked');
        }
    });

})()