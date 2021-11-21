import {useState} from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import '../style/ingredient.css'
function IngredientList() {
    let [ingredient, setIngredient] = useState("Item 1");
    let splideMoved = function(splide, prev, next, dest){
        var element = splide.Components.Elements.slides[dest];
        if(element){
            element = element.querySelector(".ing-desc");
            setIngredient(element.innerHTML);
        }
    };
    return (
      <div className="pt-5 d-flex flex-column justify-content-center bg-main-dark">
          <div className="p-0 p-md-5 mx-5">
              <div className="text-white fs-1 fw-bolder text-uppercase">Main Ingredients</div>
          </div>
          <div className="py-5">
            <Splide
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
            >
                <SplideSlide>
                    <div className="text-center ing-item">
                        <div className="circle mx-auto" style={{width:"200px", height: "200px"}}>
                            <div className="circle w-100 h-100 bg-white"></div>
                        </div>
                    </div>
                    <div className="text-center d-none ing-desc">Item 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit itaque eum quidem architecto, deleniti atque nam blanditiis qui laborum eligendi est numquam similique aut natus accusantium fugit id? Ullam, dolores!</div>
                </SplideSlide>
                <SplideSlide>
                    <div className="text-center  ing-item">
                        <div className="circle mx-auto" style={{width:"200px", height: "200px"}}>
                            <div className="circle w-100 h-100 bg-white"></div>
                        </div>
                    </div>
                    <div className="text-center d-none ing-desc">Item 2</div>
                </SplideSlide>
                <SplideSlide>
                    <div className="text-center ing-item">
                        <div className="circle mx-auto" style={{width:"200px", height: "200px"}}>
                            <div className="circle w-100 h-100 bg-white"></div>
                        </div>
                    </div>
                    <div className="text-center d-none ing-desc">Item 3</div>
                </SplideSlide>
                <SplideSlide>
                    <div className="text-center ing-item">
                        <div className="circle mx-auto" style={{width:"200px", height: "200px"}}>
                            <div className="circle w-100 h-100 bg-white"></div>
                        </div>
                    </div>
                    <div className="text-center d-none ing-desc">Item 4</div>
                </SplideSlide>
                <SplideSlide>
                    <div className="text-center ing-item">
                        <div className="circle mx-auto" style={{width:"200px", height: "200px"}}>
                            <div className="circle w-100 h-100 bg-white"></div>
                        </div>
                    </div>
                    <div className="text-center d-none ing-desc">Item 5</div>
                </SplideSlide>
                <SplideSlide>
                    <div className="text-center ing-item">
                        <div className="circle mx-auto" style={{width:"200px", height: "200px"}}>
                            <div className="circle w-100 h-100 bg-white"></div>
                        </div>
                    </div>
                    <div className="text-center d-none ing-desc">Item 6</div>
                </SplideSlide>
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