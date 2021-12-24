import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
function Customrecipe() {

  let resultjson = []
  let result = []
  const [relateddata, setRelateddata] = useState([])
  let [filterarray, setfilterarray] = useState([])

  useEffect(() => {
    async function loadProducts() {
      const food_data = [
        {
            "uuid": "fa0a597e-63e0-45fb-bca0-d5226d1d1124",
            "created": "2021-08-03T11:42:20.910175+00:00",
            "author": "bexlovestobake",
            "name": "Easy Mince Pies",
            "difficulty": "Easy",
            "cook_time": "PT20M",
            "prep_time": "PT30M",
            "yield": "18",
            "description": "Our easiest mince pie recipe and great fun to make with kids. No rolling required! Press the raw, crumbly pastry directly into your tin for a short, biscuity finish.",
            "images": [
                    "https://live.staticflickr.com/304/31993751072_2304d6343e_6k.jpg"
                    ],
            "ingredients": [
                {
                    "ingredient": "cold butter",
                    "measurement-weight": 225,
                    "measurement-type": "g",
                    "measurement-size": null,
                    "note": "diced"
                },        
                {
                    "ingredient": "plain flour",
                    "measurement-weight": 350,
                    "measurement-type": "g",
                    "measurement-size": null,
                    "note": null
                },
                {
                    "ingredient": "golden caster sugar",
                    "measurement-weight": 100,
                    "measurement-type": "g",
                    "measurement-size": null,
                    "note": null
                },
                {
                    "ingredient": "mincemeat",
                    "measurement-weight": 280,
                    "measurement-type": "g",
                    "measurement-size": null,
                    "note": null
                },
                {
                    "ingredient": "egg",
                    "measurement-weight": null,
                    "measurement-type": null,
                    "measurement-size": "1 small",
                    "note": "beaten"
                },
                {
                    "ingredient": "icing sugar",
                    "measurement-weight": null,
                    "measurement-type": null,
                    "measurement-size": null,
                    "note": "to dust"
                }
            ],
            "instructions": [
                {
                "steps": [
                        "To make the pastry, rub the butter into the flour, then mix in the golden caster sugar and a pinch of salt.",
                        "Combine the pastry into a ball – don’t add liquid – and knead it briefly. The dough will be fairly firm, like shortbread dough. You can use the dough immediately, or chill for later.",
                        "Heat the oven to 200C/180C fan/gas 6. Line 18 holes of two 12-hole patty tins, by pressing small walnut-sized balls of pastry into each hole.",
                        "Spoon the mincemeat into the pies. Take slightly smaller balls of pastry than before and pat them out between your hands to make round lids, big enough to cover the pies.",
                        "Top the pies with their lids, pressing the edges gently together to seal – you don’t need to seal them with milk or egg as they will stick on their own. Will keep frozen for up to one month.",
                        "Brush the tops of the pies with the beaten egg. Bake for 20 mins until golden. Leave to cool in the tin for 5 mins, then remove to a wire rack. To serve, lightly dust with the icing sugar. Will keep for three to four days in an airtight container."
                    ]
                }
            ],
            "secondary-instructions": [],
            "nutrition": [
                {
                    "serving": "Per pie",
                    "kcal" : "222",
                    "fat" : "11g",
                    "saturates" : "7g",
                    "carbs" : "30g",
                    "sugars" : "12g",
                    "fibre" : "1g",
                    "protein" : "2g",
                    "salt" : "0.3g"
                }
            ],
            "categories": [
                    "Christmas",
                    "Mince Pies",
                    "Kid Friendly"
            ]
        },
        {
            "uuid": "54f48df0-11db-440c-a22d-0b4c1ba00fcd",
            "created": "2021-09-12T10:32:19.255468+00:00",
            "author": "MrBarryLewis",
            "name": "Soft Burger Buns",
            "difficulty": "Easy",
            "cook_time": "PT12M",
            "prep_time": "PT25M",
            "yield": "9-12 (depending on size)",
            "description": "Combine the ingredients for brioche with a burger bun recipe to make a deliciously sweet, soft, light dough. It could also be shaped into hot dog rolls.",
            "images": [
                    "https://live.staticflickr.com/65535/50146269562_d63bb02d0a_4k.jpg"
                    ],
            "ingredients": [
                {
                    "ingredient": "whole milk",
                    "measurement-weight": 200,
                    "measurement-type": "ml",
                    "measurement-size": null,
                    "note": "plus extra for brushing"
                },        
                {
                    "ingredient": "unsalted butter",
                    "measurement-weight": 50,
                    "measurement-type": "g",
                    "measurement-size": null,
                    "note": null
                },
                {
                    "ingredient": "plain flour",
                    "measurement-weight": 500,
                    "measurement-type": "g",
                    "measurement-size": null,
                    "note": "plus extra for dusting"
                },
                {
                    "ingredient": "caster sugar",
                    "measurement-weight": null,
                    "measurement-type": null,
                    "measurement-size": "1 tbsp",
                    "note": null
                },
                {
                    "ingredient": "egg",
                    "measurement-weight": null,
                    "measurement-type": null,
                    "measurement-size": "1 small",
                    "note": "beaten"
                },
                {
                    "ingredient": "fast-action dried yeast",
                    "measurement-weight": 7,
                    "measurement-type": "g",
                    "measurement-size": null,
                    "note": null
                },
                {
                    "ingredient": "sesame seeds",
                    "measurement-weight": null,
                    "measurement-type": null,
                    "measurement-size": null,
                    "note": "optional"
                }
            ],
            "instructions": [
                {
                "steps": [
                        "Put the milk, butter and 100ml water in a pan and gently heat until the butter is melted. Set aside to cool until just warm.",
                        "Tip the flour, sugar, yeast and 1 tsp salt into a large bowl and gradually work in the milk mixture, then the egg, until you have a smooth dough. Tip the dough onto a floured surface or into a stand mixer fitted with a dough hook and knead until elastic and shiny. Divide into 12 (about 80g each) pieces and roll into tight balls. Transfer to baking trays lined with baking parchment, leaving plenty of space between them, and put in a warm place to prove for 30-45 mins.",
                        "Heat oven to 200C/180C fan/gas 6. Press the rolls down gently using your hands, then brush over some milk and scatter over the sesame seeds, if you like (or, dust with some flour). Bake for 10-12 mins until risen and lightly golden. Leave to cool completely, then serve. Make up to two days ahead and keep in an airtight container."
                    ]
                }
            ],
            "secondary-instructions": [],
            "nutrition": [
                {
                    "serving": "Per serving (12)",
                    "kcal": "210",
                    "fat": "5g",
                    "saturates": "3g",
                    "carbs": "35g",
                    "sugars": "3g",
                    "fibre": "2g",
                    "protein": "6g",
                    "salt": "0.4g"
                }
            ],
            "categories": [
                    "Bread",
                    "BBQ"
            ]
        },
        {
            "uuid": "206879ef-f812-4822-b1ef-d159a0680a71",
            "created": "2021-10-11T14:55:48.265874+00:00",
            "author": "bexlovestobake",
            "name": "Chocolate Orange Babka",
            "difficulty": "Medium",
            "cook_time": "PT40M",
            "prep_time": "PT40M",
            "yield": "serves 14-16",
            "description": "Make a chocolate orange babka for a showstopping treat at Christmas. Babka is an enriched bread dough usually made in a loaf tin, or shaped as a wreath.",
            "images": [
                    "https://live.staticflickr.com/65535/50592572557_973a49013e_b.jpg"
                    ],
            "ingredients": [
                {
                    "ingredient": "whole milk",
                    "measurement-weight": 100,
                    "measurement-type": "ml",
                    "measurement-size": null,
                    "note": null
                },        
                {
                    "ingredient": "strong white bread flour",
                    "measurement-weight": 550,
                    "measurement-type": "g",
                    "measurement-size": null,
                    "note": "plus extra for dusting"
                },
                {
                    "ingredient": "caster sugar",
                    "measurement-weight": 100,
                    "measurement-type": "g",
                    "measurement-size": null,
                    "note": null
                },
                {
                    "ingredient": "fast-action dried yeast",
                    "measurement-weight": 7,
                    "measurement-type": "g",
                    "measurement-size": null,
                    "note": null
                },
                {
                    "ingredient": "eggs",
                    "measurement-weight": null,
                    "measurement-type": null,
                    "measurement-size": "4 large",
                    "note": "at room temperature"
                },
                {
                    "ingredient": "unsalted butter",
                    "measurement-weight": 150,
                    "measurement-type": "g",
                    "measurement-size": null,
                    "note": "cut into cubes"
                },
                {
                    "ingredient": "light brown soft sugar",
                    "measurement-weight": 50,
                    "measurement-type": "g",
                    "measurement-size": null,
                    "note": null
                },
                {
                    "ingredient": "cocoa powder",
                    "measurement-weight": 30,
                    "measurement-type": "g",
                    "measurement-size": null,
                    "note": null
                },
                {
                    "ingredient": "dark chocolate",
                    "measurement-weight": 125,
                    "measurement-type": "g",
                    "measurement-size": null,
                    "note": null
                },
                {
                    "ingredient": "unsalted butter",
                    "measurement-weight": 100,
                    "measurement-type": "g",
                    "measurement-size": null,
                    "note": "chopped"
                },
                {
                    "ingredient": "oranges",
                    "measurement-weight": null,
                    "measurement-type": null,
                    "measurement-size": "3",
                    "note": "zested"
                }
            ],
            "instructions": [
                {
                "steps": [
                        "Heat the milk in a small pan over a low heat until warm, but not hot. Set aside. Put the flour into the bowl of a stand mixer. Add ½ tsp salt to one side of the bowl and the sugar and yeast to the other. Mix each side into the flour with your hands, then using the dough hook attachment until fully combined.",
                        "Pour in the warm milk, then, with the mixer on medium, add the eggs one at a time. Keep mixing the dough for 10 mins until smooth, then gradually add the butter, one or two cubes at a time, until fully incorporated, about 5-8 mins. Scrape down the sides of the bowl – the dough will be very soft.",
                        "Scrape the dough into a large bowl, cover with a clean tea towel and leave to rise for 1 hr 30 mins-2 hrs until doubled in size. Once doubled, chill for 1 hr.",
                        "Line a large baking sheet with baking parchment and set aside. To make the filling, put all the filling ingredients and a large pinch of sea salt flakes in a small saucepan over a low-medium heat, stirring continuously until everything has melted together. Transfer to a bowl, leave to cool completely, then transfer to the fridge and chill for 40 mins, stirring every 20 mins until the mixture has thickened but is still spreadable.",
                        "Remove the dough from the fridge, and roll out on a lightly floured surface to a roughly 70 x 40cm rectangle. Spread the filling evenly over the dough using a spatula or palette knife. With a shorter end closest to you, roll the dough up into a tight sausage. Transfer to a board, seam-side down, and cut in half across the length so you have two long pieces. Lay the two pieces out in front of you, parallel to one another, and cross them over each other along the length in a plait-like pattern. Curl into a circle and join the ends to make a wreath, then carefully transfer to the lined sheet.",
                        "Cover with a tea towel and leave to rise for 1 hr until doubled in size. Heat the oven to 180C/160C fan/gas 4 and bake the babka for 35-40 mins until golden. Serve warm, or leave to cool completely, then keep wrapped. Will keep wrapped at room temperature for up to three days."
                    ]
                }
            ],
            "secondary-instructions": [
                "2a642266-2434-4209-92f9-1fff1d43642f"
            ],
            "nutrition": [
                {
                    "serving": "Per serving (16)",
                    "kcal": "393",
                    "fat": "19g",
                    "saturates": "11g",
                    "carbs": "46g",
                    "sugars": "19g",
                    "fibre": "3g",
                    "protein": "8g",
                    "salt": "0.1g"
                }
            ],
            "categories": [
                    "Bread",
                    "Christmas",
                    "Traditional"
            ]
        },
        {
            "uuid": "2a642266-2434-4209-92f9-1fff1d43642f",
            "created": "2021-10-11T12:05:40.548782+00:00",
            "author": "bexlovestobake",
            "name": "Orange Syrup",
            "difficulty": "Easy",
            "cook_time": "PT10M",
            "prep_time": "PT5M",
            "yield": "Around 250ml or 1 cup",
            "description": "Make an orange syrup, ideal for pouring over cakes and babkas.",
            "images": [],
            "ingredients": [
                {
                    "ingredient": "caster sugar",
                    "measurement-weight": 100,
                    "measurement-type": "g",
                    "measurement-size": null,
                    "note": null
                },
                {
                    "ingredient": "oranges",
                    "measurement-weight": null,
                    "measurement-type": null,
                    "measurement-size": "3",
                    "note": "zested and juiced"
                }
            ],
            "instructions": [
                {
                "steps": [
                        "Simmer the sugar, orange juice and zest over a high heat for 5-10 mins until thickened. Pour into a jug or directly over a dessert"                
                    ]
                }
            ],
            "secondary-instructions": [
            ],
            "nutrition": [
            ],
            "categories": [
                    "Side Dish",
                    "Syrup"
            ]
        }
    ]
    if(filterarray!=""){
      food_data.map((jsonObject) => {
        // let filterarray = ["egg","plain flour"]
        let checker = (arr, target) => target.every(v => arr.includes(v));
        let ingredientsArray = [];
        jsonObject.ingredients.map((data) => {
          ingredientsArray.push(data.ingredient)
        })
        if(checker(ingredientsArray, filterarray)){
          resultjson.push(jsonObject)
          // setresultjson(oldArray => [...oldArray, jsonObject])

        } else{
        }
  
      })
    }
    if(resultjson.length!=0){
      setRelateddata(resultjson)
    }else{
      setRelateddata([])
    }

    }

    loadProducts();
  }, [ filterarray ]);
  
  
  // setRelateddata(resultjson)
  const [incredient, setincredient] = useState({
    first_incredient: '',
    second_incredient: '',
    third_incredient: '',      
    forth_incredient: '',
  });
  const handlefirstSumbit = () => {
    
    if(incredient.first_incredient != ""){
      let dataarray = Object.keys(incredient).map((key) => [incredient[key]]);
     
      for(let i=0;i<4;i++){
        if(dataarray[i]!=0){
          result.push(dataarray[i].toString())
        }
      }
      setfilterarray(result);
      // setfilterarray(oldArray => [...oldArray, incredient.first_incredient])
    }
    

  }
  const handlesecondSumbit = () => {

    if(incredient.second_incredient != ""){
      let dataarray = Object.keys(incredient).map((key) => [incredient[key]]);
     
      for(let i=0;i<4;i++){
        if(dataarray[i]!=0){
          result.push(dataarray[i].toString())
        }
      }
      setfilterarray(result);
      
    }
  }
  const handlethirdSumbit = () => {

    if(incredient.third_incredient != ""){
      let dataarray = Object.keys(incredient).map((key) => [incredient[key]]);
     
      for(let i=0;i<4;i++){
        if(dataarray[i]!=0){
          result.push(dataarray[i].toString())
        }
      }
      setfilterarray(result);

    }
  }
  const handleforthSumbit = () => {

    if(incredient.forth_incredient != ""){
      let dataarray = Object.keys(incredient).map((key) => [incredient[key]]);
      for(let i=0;i<4;i++){
        if(dataarray[i]!=0){
          result.push(dataarray[i].toString())
        }
      }
      setfilterarray(result);

    }
  }

  const changeincredient = (event) =>{
    const {value,name} = event.target;
    setincredient({ ...incredient, [name]: value});
  }

  return (
    <>
      <Header />
      
      <div className="container-fluid">
        <div className="row">
            <div className="col-xs-6 col-sm-3">
                <div className="thumbnail">
                <h2>CUSTOMIZE RECIPE</h2>
                    
                    <div className="img-wrapper">
                        <img src="img/instagram/eggs.jpg" alt="400"/>

                    </div>
                    <div className="dropdown">
                    <input type="text" className = "dropbtn" placeholder="select below.." style = {{backgroundColor: "white",color: "black"}} onChange={changeincredient}  name="first_incredient" />
                        <button  onClick={handlefirstSumbit} className="dropbtn">eggs,<br></br>whole milk</button>
                        
                        
                    </div>
                </div>

            </div>
            <div className="col-xs-6 col-sm-3">
                <div className="thumbnail">
                    <div className="img-wrapper">
                        <img src="img/instagram/bread.jpg" alt="800"/>
                    </div>
                    <div className="dropdown">
                    <input type="text" className = "dropbtn" placeholder="select below.." style = {{backgroundColor: "white",color: "black"}} onChange={changeincredient}  name="second_incredient" />

                        <button onClick={handlesecondSumbit} className="dropbtn">strong white bread flour,<br></br>unsalted butter</button>
                        
                    </div>
                </div>
            </div>
            <div className="col-xs-6 col-sm-3">
                <div className="thumbnail">
                    <div className="img-wrapper">
                        <img src="img/instagram/cocoa.jpg" alt="400"/>
                    </div>
                    <div className="dropdown">
                        <input type="text" className = "dropbtn" placeholder="select below.." style = {{backgroundColor: "white",color: "black"}} onChange={changeincredient}  name="third_incredient" />

                        <button onClick={handlethirdSumbit} className="dropbtn">caster sugar,<br></br>cocoa powder</button>
                        
                    </div>
                </div>
            </div>
            <div className="col-xs-6 col-sm-3">
                <div className="thumbnail">
                    <div className="img-wrapper">
                        <img src="img/instagram/yeast.jpg" alt="800" />
                    </div>
                    <div className="dropdown">
                        <input type="text" className = "dropbtn" placeholder="select below...." style = {{backgroundColor: "white",color: "black"}} onChange={changeincredient}  name="forth_incredient" />

                        <button onClick={handleforthSumbit} className="dropbtn"> fast-action dried yeast,<br></br>mincemeat</button>
                         </div>
                </div>
            </div>
            {/* <button type="button" className="block"><a href="/shop">Contact</a></button> */}
        </div>
    </div>
    <section className="product-details spad">
        <div className="container">
          {relateddata?.map((val, idx) =>{
            return (
            <div className="row" key = {idx}>
                <div className="col-lg-6">
                    <div className="product__details__img">
                        <div className="product__details__big__img">
                            <img className="big_img" src={val.images} alt=""/>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="product__details__text">
                        <div className="product__label">Cupcake</div>
                        <h4>{val.name}</h4>
                        <ul>
                            <li>Auther: <span>{val.author}</span></li>
                            <li>Cooktime: <span>{val.cook_time}</span></li>
                            <li>Preptime: <span>{val.prep_time}</span></li>
                        </ul>
                        {/* <h5>£26.41</h5> */}
                        <p>{val.description}</p>
                        <ul>
                            <li>SKU: <span>17</span></li>
                            <li>Category: <span>{val.categories.toString()}</span></li>
                            <li>Tags: <span>Gadgets, minimalisstic</span></li>
                        </ul>
                        
                    </div>
                </div>
            </div>)
          }
          )} 
        </div>
    </section>

    <section className="related-products spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <div className="section-title">
                        <h2>Baking tools</h2>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="related__products__slider owl-carousel">
                    <div className="col-lg-3">
                        <div className="product__item">
                            <div className="product__item__pic set-bg" data-setbg="img/shop/mixer.jpg">
                                <div className="product__label">
                                   
                                </div>
                            </div>
                            <div className="product__item__text">
                                <h6><a href="#">mixer</a></h6>
                                <div className="product__item__price">£32.00</div>
                                <div className="cart_add">
                                    <a href="#">Add to cart</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="product__item">
                            <div className="product__item__pic set-bg" data-setbg="img/shop/set.jpg">
                                <div className="product__label">
                                    
                                </div>
                            </div>
                            <div className="product__item__text">
                                <h6><a href="#">mixer set tools</a></h6>
                                <div className="product__item__price">£30.00</div>
                                <div className="cart_add">
                                
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="product__item">
                            <div className="product__item__pic set-bg" data-setbg="img/shop/scale.jpg">
                                <div className="product__label">
                                   
                                </div>
                            </div>
                            <div className="product__item__text">
                                <h6><a href="#">scale</a></h6>
                                <div className="product__item__price">£31.00</div>
                                <div className="cart_add">
                                    <a href="#">Add to cart</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="product__item">
                            <div className="product__item__pic set-bg" data-setbg="img/shop/flour2.jpg">
                                <div className="product__label">
                                  
                                </div>
                            </div>
                            <div className="product__item__text">
                                <h6><a href="#">super fine</a></h6>
                                <div className="product__item__price">£25.00</div>
                                <div className="cart_add">
                                    <a href="#">Add to cart</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="product__item">
                            <div className="product__item__pic set-bg" data-setbg="img/shop/flour3.jpg">
                                <div className="product__label">
                             
                                </div>
                            </div>
                            <div className="product__item__text">
                                <h6><a href="#">spoons</a></h6>
                                <div className="product__item__price">£05.00</div>
                                <div className="cart_add">
                                    <a href="#">Add to cart</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="product__item">
                            <div className="product__item__pic set-bg" data-setbg="img/shop/flour1.jpg">
                                <div className="product__label">
                                   
                                </div>
                            </div>
                            <div className="product__item__text">
                                <h6><a href="#">flour</a></h6>
                                <div className="product__item__price">£14.00</div>
                                <div className="cart_add">
                                    <a href="#">Add to cart</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
      
      <Footer />
    </>
  );
}

export default Customrecipe;
