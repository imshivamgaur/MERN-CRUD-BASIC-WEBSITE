import { toast } from "react-toastify";
import { deleteProduct } from "../../api";
import { useProductStore } from "../../store/product";
import Card from "../components/Card";

const HomePage = ({ colorMode }) => {
  const { products, setProducts } = useProductStore();

  // Define the delete handler function
  const handleDelete = async (productId) => {
    const result = await deleteProduct(productId);

    if (result.success) {
      //update products state after deletion
      setProducts(products.filter((product) => product._id !== productId));
      toast.success("Product deleted successfully");
    } else {
      toast.error("Error deleting products");
    }
  };

  return (
    <>
      <div className={`  flex items-center justify-center`}>
        {products.length === 0 ? (
          <p className="text-center text-5xl font-bold">Loading...</p>
        ) : (
          <ul className="flex flex-wrap gap-8 r w-[1140px]  justify-center pt-10 pb-20 ">
            {products.map((product) => (
              <Card
                colorMode={colorMode}
                key={product._id}
                product={product}
                onDelete={()=>handleDelete(product._id)} //passing delete handler to each card
              />
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default HomePage;
