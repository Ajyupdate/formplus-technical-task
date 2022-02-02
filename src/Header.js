const Header = () => {
    return ( 
        <div className="header-inputs">
            <div className="search-box">
                <form className="input-and-icon">
                    <input type="search" placeholder="Search templates"/>
                    <i className="fa fa-search icon"></i>
                </form>
            </div>

            <div>
                <form className="header-left">
                    <p>Sort By:</p>
                    <fieldset>
                        <legend>Categories</legend>
                            <select name="devices">
                                <option value="ipod">Agriculture</option>
                                <option value="radio">Technology</option>
                                <option value="computer">Education</option>
                            </select>
                    </fieldset>

                    <fieldset>
                        <legend>Order</legend>
                        <select name="devices">
                            <option value="ipod">Default</option>
                            <option value="radio">Ascending</option>
                            <option value="computer">Decending</option>
                        </select>
                    </fieldset>

                    <fieldset>
                    <legend>Date</legend>
                    <select name="devices">
                        <option value="ipod">Date</option>
                        <option value="radio">Last Week</option>
                        <option value="computer">This Week</option>
                    </select>
                    </fieldset>
                </form>
            </div>
            
        </div>
    );
}
 
export default Header;