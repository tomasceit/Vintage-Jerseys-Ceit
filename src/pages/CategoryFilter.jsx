import { useParams } from "react-router";
import ItemsListContainer from "../containers/ItemsListContainer/ItemsListContainer";

const CategoryFilter = () => {

  const { keyName } = useParams();

  return (
    <>
      <ItemsListContainer filtro={keyName} />
    </>
  );
};

export default CategoryFilter;
