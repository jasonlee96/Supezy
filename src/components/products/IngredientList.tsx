import {useState, useEffect, useRef} from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import '../style/ingredient.css'
import { useTranslation, Trans } from 'react-i18next';
import  IngredientItem  from "./Ingredient";
import {ProductViewModel} from "../../context/Model";
import { useGlobalState } from "../../context/Context";
import $ from "jquery";

export interface Ingredient{
    name: string,
    image: string,
    description: string,
}
function IngredientList({header, ingredients}:
    {
        header: string
        ingredients: Array<Ingredient>
    }) {
    let loaded = false;
    const { t, i18n } = useTranslation();
    const { state, setState } = useGlobalState();
    let [ingredient, setIngredient] = useState("");
    const splideRef = useRef<null | Splide>(null);
    let splideMoved = function(splide, prev, next, dest){
        var element = splide.Components.Elements.slides[dest];
        if(element){
            element = element.querySelector(".ing-desc");
            setIngredient(element.innerHTML);
        }
    };
    let splideUpdated = function(splide){
        if(loaded) return;
        var desc = splide.root.querySelector(".splide__slide.is-active").querySelector(".ing-desc").innerHTML;

        if(desc){
            setIngredient(desc);
            loaded = true;
        }
    }

    useEffect(function(){
        setTimeout(()=> {
        var desc = splideRef.current?.splide?.root?.querySelector(".splide__slide.is-active")?.querySelector(".ing-desc")?.innerHTML ?? "";

        if(desc){
            setIngredient(desc);
        }
    }, 300);
    }, [state.lang]);

    return (
      <div className="pt-5 d-flex flex-column justify-content-center bg-main-dark">
          <div className="p-0 p-md-5 pb-md-0 pb-0 mx-5">
              <div className="text-white fs-1 fw-bolder text-uppercase">{header}</div>
          </div>
          <div className="py-0">
            <Splide
            onVisible={splideUpdated}
            onMoved={splideMoved}
            className="py-5 ing-splide"
            options={{
                type   : 'loop',
                perPage: 5,
                focus  : 'center',
                autoplay: true,
                pagination: false,
                padding: "0px",
                breakpoints: {
                    1280: {
                        perPage: 3,
                    },
                    650:{
                        perPage:1,
                    }
              },
              updateOnMove:true
            }}
            ref={ splideRef }
            >
                {
                   ingredients.map((item) => <IngredientItem ingredient={item} key={item.name.replace(" ", "_").toString()} key1={item.name.replace(" ", "_").toString()}/>)
                }
            </Splide>
        </div>
        <div className="p-5 bg-main-overlay w-100">
            <div className="col-10 col-md-6 mx-auto text-center py-3">
                {ingredient}
            </div>
        </div>
      </div>
    );
  }
  
  export default IngredientList;