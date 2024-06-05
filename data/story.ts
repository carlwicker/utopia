const story = {
  start: {
    text: "You awaken in a dimly lit forest, the sound of rustling leaves fills the air. A path diverges into two.",
    choices: [
      { text: "Take the left path", nextScene: "leftPath" },
      { text: "Take the right path", nextScene: "rightPath" },
    ],
  },
  leftPath: {
    text: "The left path leads you to an ancient ruin. You see a figure in the shadows.",
    choices: [
      { text: "Approach the figure", nextScene: "approachFigure" },
      { text: "Inspect the ruin", nextScene: "inspectRuin" },
    ],
  },
  rightPath: {
    text: "The right path descends into a dark cave. You hear a faint whisper.",
    choices: [
      { text: "Follow the whisper", nextScene: "followWhisper" },
      { text: "Light a torch", nextScene: "lightTorch" },
    ],
  },
  approachFigure: {
    text: "The figure reveals themselves as an old sage. 'I've been expecting you,' he says.",
    choices: [
      { text: "Ask about your destiny", nextScene: "askDestiny" },
      { text: "Ignore him and move on", nextScene: "moveOnFromSage" },
    ],
  },
  inspectRuin: {
    text: "You find ancient inscriptions hinting at a hidden treasure.",
    choices: [
      { text: "Search for the treasure", nextScene: "searchTreasure" },
      { text: "Leave the ruin", nextScene: "leaveRuin" },
    ],
  },
  followWhisper: {
    text: "The whisper leads you to a hidden chamber with a mystical artifact.",
    choices: [
      { text: "Take the artifact", nextScene: "takeArtifact" },
      { text: "Leave it alone", nextScene: "leaveArtifact" },
    ],
  },
  lightTorch: {
    text: "The torch reveals ancient markings on the cave walls.",
    choices: [
      { text: "Read the markings", nextScene: "readMarkings" },
      { text: "Ignore them and proceed", nextScene: "proceedCave" },
    ],
  },
  askDestiny: {
    text: "The sage tells you of a prophecy. 'You are the chosen one to save this land,' he proclaims.",
    choices: [
      { text: "Accept your fate", nextScene: "acceptFate" },
      { text: "Reject the prophecy", nextScene: "rejectFate" },
    ],
  },
  moveOnFromSage: {
    text: "You walk past the sage, feeling a sense of missed opportunity.",
    choices: [{ text: "Continue on your path", nextScene: "continuePath" }],
  },
  searchTreasure: {
    text: "You uncover a hidden chamber with glittering treasures.",
    choices: [
      { text: "Take the treasure", nextScene: "takeTreasure" },
      { text: "Leave it alone", nextScene: "leaveTreasure" },
    ],
  },
  leaveRuin: {
    text: "You leave the ruin, but the mystery lingers in your mind.",
    choices: [{ text: "Continue on your path", nextScene: "continuePath" }],
  },
  takeArtifact: {
    text: "The artifact pulses with energy as you pick it up.",
    choices: [
      { text: "Harness its power", nextScene: "harnessPower" },
      { text: "Discard it", nextScene: "discardArtifact" },
    ],
  },
  leaveArtifact: {
    text: "You leave the artifact untouched, wondering what it could have done.",
    choices: [{ text: "Continue on your path", nextScene: "continuePath" }],
  },
  readMarkings: {
    text: "The markings reveal a secret path to a hidden valley.",
    choices: [
      { text: "Take the secret path", nextScene: "secretPath" },
      { text: "Ignore it", nextScene: "proceedCave" },
    ],
  },
  proceedCave: {
    text: "You proceed deeper into the cave, feeling the weight of unknown dangers.",
    choices: [{ text: "Continue forward", nextScene: "continueCave" }],
  },
  acceptFate: {
    text: "You embrace your destiny, feeling a surge of purpose.",
    choices: [{ text: "Begin your quest", nextScene: "beginQuest" }],
  },
  rejectFate: {
    text: "You reject the prophecy, determined to carve your own path.",
    choices: [{ text: "Forge your own way", nextScene: "forgePath" }],
  },
  continuePath: {
    text: "You continue on your journey, the world unfolding before you.",
    choices: [{ text: "Keep moving", nextScene: "end" }],
  },
  takeTreasure: {
    text: "You take the treasure, feeling its weight and worth.",
    choices: [{ text: "Continue your adventure", nextScene: "continuePath" }],
  },
  leaveTreasure: {
    text: "You leave the treasure, feeling a strange sense of honor.",
    choices: [{ text: "Continue your adventure", nextScene: "continuePath" }],
  },
  harnessPower: {
    text: "The artifact's power courses through you, enhancing your abilities.",
    choices: [{ text: "Use your new powers", nextScene: "newPowers" }],
  },
  discardArtifact: {
    text: "You discard the artifact, feeling a moment of doubt.",
    choices: [{ text: "Continue your journey", nextScene: "continuePath" }],
  },
  secretPath: {
    text: "The secret path leads you to a hidden valley filled with wonders.",
    choices: [{ text: "Explore the valley", nextScene: "exploreValley" }],
  },
  continueCave: {
    text: "You continue through the cave, facing its perils with courage.",
    choices: [{ text: "Keep moving", nextScene: "end" }],
  },
  beginQuest: {
    text: "Your quest begins now, with the weight of prophecy on your shoulders.",
    choices: [{ text: "Embrace your destiny", nextScene: "end" }],
  },
  forgePath: {
    text: "You forge your own path, determined and resolute.",
    choices: [{ text: "Face the unknown", nextScene: "end" }],
  },
  newPowers: {
    text: "With your new powers, you feel unstoppable.",
    choices: [{ text: "Use them wisely", nextScene: "end" }],
  },
  exploreValley: {
    text: "The valley reveals its secrets to you, a reward for your curiosity.",
    choices: [{ text: "Enjoy the discovery", nextScene: "end" }],
  },
  end: {
    text: "Your adventure comes to a satisfying conclusion. Well done!",
    choices: [],
  },
};

export default story;
