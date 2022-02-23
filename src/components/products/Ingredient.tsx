import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import '../style/ingredient.css';
import {Ingredient} from './IngredientList';
import { Image } from "../common";

function IngredientItem({ingredient, key1}:
    {
        ingredient: Ingredient,
        key1: string
    }
) {
    return (
        <SplideSlide>
        <div className="text-center  ing-item" id={"ig-list-"+key1}>
            <div className="circle mx-auto" style={{width:"200px", height: "200px"}}>
                <div className="circle w-100 h-100">
                    <Image image={process.env.PUBLIC_URL + "/" +ingredient.image} css="w-100 h-100"></Image>
                    
                </div>
            </div>
        </div>
        <div className="text-center d-none ing-desc">{ingredient.name}</div>
        </SplideSlide>
    );
  }
  
  export default IngredientItem;