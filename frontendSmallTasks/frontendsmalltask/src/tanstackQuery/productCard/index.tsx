import { useQuery } from "@tanstack/react-query";
import "./style.css";
import { useEffect, useState } from "react";

interface Post {
     id: number;
     title: string;
     images: string[];
     brand: string;
}

interface ProductResponse {
     products: Post[];
}

const ProductCard = () => {
     const limit = 5;

     const [start, setStart] = useState(0)
     const { data, isLoading, error } = useQuery<ProductResponse>({
          queryKey: ["product"],
          queryFn: async () => {
               try {
                    const res = await fetch("https://dummyjson.com/products");
                    if (!res) throw new Error("Failed to fetch");
                    return res.json();
               } catch (err) {
                    console.error(err);
               }
          },
     });

     useEffect(() => {
          const observer = new IntersectionObserver((element) => {
               
                    const target = element[0];

               if (target.isIntersecting) {
                          
                     }

           }, {threshold: 1})
     }, [])

     console.log("data", data);
     if (isLoading) return <p>Loading...</p>;
     if (error) return <p>{error.message}</p>;

     return (
          <div className="post-card">
               {data && data?.products.slice(0, 20).length > 0 ? (
                    data?.products.map((product: Post) => (
                         <div key={product.id}>
                              <p>{product.title}</p>
                              <img src={product.images[0]} />
                         </div>
                    ))
               ) : (
                    <p>Not Found</p>
               )}
          </div>
     );
};

export default ProductCard;
