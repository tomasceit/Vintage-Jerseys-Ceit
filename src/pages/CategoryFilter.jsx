import * as React from "react";
import { useParams } from "react-router";
import ItemsListContainer from "../containers/ItemsListContainer/ItemsListContainer.jsx";
import NotFound from "../pages/NotFound.jsx";

const CategoryFilter = () => {
  const { keyName } = useParams();
  const [categoryName, setCategoryName] = React.useState("");

  React.useEffect(() => {
    const url = `http://localhost:3001/categories/${keyName}`;
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw response;
        }
      })
      .then((dato) => setCategoryName(dato.name))
      .catch((error) => error.status === 404 && setCategoryName("404"));
  }, [keyName]);

  return (
    <>
      <h2 className="mt-3 ms-7">{categoryName} Retro Jerseys</h2>
      {categoryName === "404" ? (
        <NotFound />
      ) : (
        <ItemsListContainer filtro={keyName} />
      )}
    </>
  );
};

export default CategoryFilter;
