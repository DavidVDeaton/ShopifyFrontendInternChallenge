const Banner = ({showBanner}) => {

    if (showBanner === false) {
        return (
            <>
                <h2></h2>
            </>
        )
    }
    else {
        return (
            <>
                <h2 className="banner">Nominations Complete</h2>
            </>
        )
    }
}

export default Banner;