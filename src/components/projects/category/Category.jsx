import "./category.scss"

const Category = () => {
    return (
        <div className="category">
            <h1>Select a category you would like to see my projects on:</h1>
            <div className="category-list">
                <h2>Machine Learning</h2>
                <h2>App Development</h2>
                <h2>Web Development</h2>
                <h2>All</h2>
            </div>
        </div>
    )
}