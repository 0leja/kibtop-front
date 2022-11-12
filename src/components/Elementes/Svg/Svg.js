const Svg = ({symbol, className}) => {
    return (
        <>
            <svg className={className}>
                <use xlinkHref={process.env.PUBLIC_URL+`/icons/sprite.svg#${symbol}`}></use>
            </svg>
        </>
    );
}

export default Svg;