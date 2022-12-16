const Filterbar = (props) => {
    /*
        <div className="searchbar">
            <input type="text" 
            onChange={props.handleChange}
            placeholder="Search album or artist">
            </input>
        </div>
        */

    return (
        <div className="wrap">
            <div className="search">
                <input type="text" className="searchTerm" onChange={props.handleChange} placeholder="Search for an album or an artist"/>
            </div>
        </div>
    )
}
export default Filterbar