"use client";

import React, { useState, useEffect } from "react";
import story from "@/data/story";
import Scene from "@/components/Scene";

export default function StoryComponent() {
  const [currentSceneKey, setCurrentSceneKey] = useState(() => {
    return localStorage.getItem("currentScene") || "start";
  });

  useEffect(() => {
    localStorage.setItem("currentScene", currentSceneKey);
  }, [currentSceneKey]);

  const handleChoice = (nextSceneKey: any) => {
    setCurrentSceneKey(nextSceneKey);
  };

  const currentScene = story[currentSceneKey];

  return (
    <div>
      <Scene scene={currentScene} onChoice={handleChoice} />
    </div>
  );
}
