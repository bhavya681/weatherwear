import clothingSuggestions from './data';

export const getOutfitRecommendation = (temp) => {
  for (let suggestion of clothingSuggestions) {
    if (temp >= suggestion.tempRange[0] && temp < suggestion.tempRange[1]) {
      return suggestion.suggestions;
    }
  }
  return [];
};
