const SupportNav = () => {
    return (
        <>
            <nav className="support-nav">
                <div className="support-nav__link settings-link-tex">
                    <svg>
                        <use xlinkHref={process.env.PUBLIC_URL+'/icons/sprite.svg#quest'}></use>
                    </svg>
                </div>
            </nav>
        </>
    );
}

export default SupportNav;