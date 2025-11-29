"use client";

import { useState, useEffect } from "react";
import React from "react";

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);
  const [openMealId, setOpenMealId] = useState(null);
  const [ingredients, setIngredients] = useState({});

  // Fetch meal list using ingredient
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

  //detailed meal data
  async function fetchMealDetails(mealId) {
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
      );
      const data = await res.json();
      const meal = data.meals[0];

      const ingList = [];
      for (let i = 1; i <= 20; i++) {
        const ing = meal[`strIngredient${i}`];
        const measure = meal[`strMeasure${i}`];
        if (ing && ing.trim() !== "") {
          ingList.push(`${ing} - ${measure}`);
        }
      }

      return ingList;
    } catch (error) {
      console.error("Error fetching ingredients:", error);
      return [];
    }
  }

  // Load meal ideas
  useEffect(() => {
    async function loadMealIdeas() {
      const mealResults = await fetchMealIdea(ingredient);
      setMeals(mealResults);
      setOpenMealId(null);
    }
    loadMealIdeas();
  }, [ingredient]);

  // Toggle dropdown & fetch ingredients
  async function toggleMeal(idMeal) {
    if (openMealId === idMeal) {
      setOpenMealId(null);
      return;
    }

    if (!ingredients[idMeal]) {
      const fetchedIngredients = await fetchMealDetails(idMeal);
      setIngredients((prev) => ({
        ...prev,
        [idMeal]: fetchedIngredients,
      }));
    }

    setOpenMealId(idMeal);
  }

  return (
    <div className="meal-ideas w-full text-left">
      <h2 className="text-2xl font-bold mb-4 text-center text-yellow-500">
        Meal Ideas {ingredient ? `for "${ingredient}"` : ""}
      </h2>

      {ingredient === "" ? (
        <p className="text-gray-400 text-center">
          Select an item to see meal ideas.
        </p>
      ) : meals.length === 0 ? (
        <p className="text-gray-400 text-center">
          No meal ideas found for {ingredient}.
        </p>
      ) : (
        <ul className="flex flex-col gap-4">
          {meals.map((meal) => (
            <li
              key={meal.idMeal}
              className="cursor-pointer bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition"
              onClick={() => toggleMeal(meal.idMeal)}
            >
              <div className="flex justify-between">
                <span className="text-lg font-semibold text-white">
                  {meal.strMeal}
                </span>
                <span className="text-yellow-400">
                  {openMealId === meal.idMeal ? "▲" : "▼"}
                </span>
              </div>

              {/* Ingredients*/}
              {openMealId === meal.idMeal && (
                <div className="mt-3 bg-gray-900 p-3 rounded border border-gray-700">
                  <p className="text-yellow-400 font-semibold mb-2">
                    Ingredients:
                  </p>

                  {ingredients[meal.idMeal] ? (
                    <ul className="list-disc ml-5 space-y-1 text-gray-300">
                      {ingredients[meal.idMeal].map((ing, i) => (
                        <li key={i}>{ing}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-400 text-sm">
                      Loading ingredients…
                    </p>
                  )}
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
