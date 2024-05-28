import axios from "axios";
import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
export default function RecipeRow({ recipe }) {

  const handleDelete=async (id)=>{
    let confirmation = confirm("Are you sure you want to delete this product?");
    if(confirmation){
      await axios.delete(`http://localhost:3000/recipes/${id}`);
      alert("Product deleted successfully")

    }else{
      alert("Product deletion canceled")
    }
    window.location.reload();

  }
  return (
    <tr>
      <th>{recipe?.id}</th>
      <td>{recipe?.title}</td>
      <td>{recipe?.price}</td>
      <td>{recipe?.category}</td>
      <td className="flex gap-4">
        <Link
          to={`/dashboard/edit-recipe/${recipe?.id}`}
          className="btn btn-xs btn-neutral"
        >
          Edit
        </Link>
        <button className="btn btn-xs btn-error" onClick={()=>handleDelete(recipe?.id)}>Delete</button>
      </td>
    </tr>
  );
}
