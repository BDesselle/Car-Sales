// Action Types
export const BUY_ITEM = "BUY_ITEM";
export const REMOVE_FEATURE = "REMOVE_FEATURE";

// Action Creators
export const buyItem = newItem => {
  // Action
  return { type: BUY_ITEM, payload: newItem };
};
export const removeFeature = removedFeature => {
  // Action
  return { type: REMOVE_FEATURE, payload: removedFeature };
};
