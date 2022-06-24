import React from "react";
import IngrediensList from "./IngredientList";
import Instructions from "./Instructions";

function Recipe({name, ingredients, steps}){
    return (
        <section id={name.toLowerCase().replace(/ /g, '-')}>
            <h1>{name}</h1>
            <IngrediensList list={ingredients}/>
            <Instructions title="Cooking Instructions" steps={steps}/>
        </section>
    )
}

export default Recipe;

