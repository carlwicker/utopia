import React from "react";

const Scene = ({ scene, onChoice }: any) => {
  return (
    <div className="p-4 max-w-lg mx-auto">
      <p className="text-lg mb-4">{scene.text}</p>
      <div>
        {scene.choices.map((choice: any, index: any) => (
          <button
            key={index}
            onClick={() => onChoice(choice.nextScene)}
            className="block w-full bg-blue-500 text-white py-2 px-4 mb-2 rounded hover:bg-blue-600"
          >
            {choice.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Scene;
