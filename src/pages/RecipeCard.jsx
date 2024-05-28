
// eslint-disable-next-line react/prop-types
const RecipeCard = ({ recipe }) => {
    // eslint-disable-next-line react/prop-types
    const {title, category, description, price}=recipe;
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4">
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{title}</div>
                <p className="text-gray-700 text-base mb-2">
                    <span className="font-semibold">Category: </span>{category}
                </p>
                <p className="text-gray-700 text-base mb-4">{description}</p>
                <div className="text-xl font-bold text-gray-900">${price}</div>
            </div>
        </div>
    );
}

export default RecipeCard;
