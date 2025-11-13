"use client";

/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */


import { useState, useEffect} from 'react';
import React from 'react';

export default function MealIdeas({ingredient}){
    const [meals,setMeals] = useState([]);
    

    //API for the Meal via chosen ingredient
    async function fetchMealIdea(ingredient) {
    
    if (!ingredient) return [];
        try {
        const response = await fetch(
            `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
        );
        const data = await response.json();
        return data.meals || [];
        } catch (error) {
        console.error("Error fetching meal ideas:", error);
        return [];
        }
    }

    async function loadMealIdeas() {
        const mealResults = await fetchMealIdea(ingredient);
        setMeals(mealResults);
    }

    useEffect(() =>{
        loadMealIdeas();
    }, [ingredient]);


     return (
    <div className="meal-ideas w-full text-left">
      <h2 className="text-2xl font-bold mb-4 text-center text-yellow-500">
        Meal Ideas {ingredient ? `for "${ingredient}"` : ""}
      </h2>
      {ingredient === "" ? (
        <p className="text-gray-400 text-center">Select an item to see meal ideas.</p>
      ) : meals.length === 0 ? (
        <p className="text-gray-400 text-center">
          No meal ideas found for {ingredient}.
        </p>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {meals.map((meal) => (
            <li
              key={meal.idMeal}
              className="flex items-center cursor-pointer gap-3 bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition"
            >
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="w-20 h-20 rounded-md object-cover border border-gray-600"
              />
              <span className="text-lg font-semibold text-white">{meal.strMeal}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}