function AsideCheckbox() {
    return (
        <div className="aside">
            <h3 className="aside-title">Categories</h3>
            <div className="checkbox-filter">
                <div className="input-checkbox">
                    <input type="checkbox" id="category-1" />
                    <label htmlFor="category-1">
                        <span />
                        Laptops
                        <small>(120)</small>
                    </label>
                </div>
                <div className="input-checkbox">
                    <input type="checkbox" id="category-2" />
                    <label htmlFor="category-2">
                        <span />
                        Smartphones
                        <small>(740)</small>
                    </label>
                </div>
                <div className="input-checkbox">
                    <input type="checkbox" id="category-3" />
                    <label htmlFor="category-3">
                        <span />
                        Cameras
                        <small>(1450)</small>
                    </label>
                </div>
                <div className="input-checkbox">
                    <input type="checkbox" id="category-4" />
                    <label htmlFor="category-4">
                        <span />
                        Accessories
                        <small>(578)</small>
                    </label>
                </div>
                <div className="input-checkbox">
                    <input type="checkbox" id="category-5" />
                    <label htmlFor="category-5">
                        <span />
                        Laptops
                        <small>(120)</small>
                    </label>
                </div>
                <div className="input-checkbox">
                    <input type="checkbox" id="category-6" />
                    <label htmlFor="category-6">
                        <span />
                        Smartphones
                        <small>(740)</small>
                    </label>
                </div>
            </div>
        </div>
    )
}

export default AsideCheckbox;