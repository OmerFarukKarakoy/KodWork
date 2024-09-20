const initialState = {
  favoritedJobs: [], 
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TO_FAVORITES':
      if (!action.payload || !action.payload.id) {
        console.error("ADD_TO_FAVORITES: job.id eksik");
        return state; 
      }

      const jobExists = state.favoritedJobs.some(job => job.id === action.payload.id);
      if (jobExists) return state;  
      return {
        ...state,
        favoritedJobs: [...state.favoritedJobs, action.payload],  
      };

    case 'REMOVE_FROM_FAVORITES':
      if (!action.payload || !action.payload.id) {
        console.error("REMOVE_FROM_FAVORITES: job.id eksik");
        return state;  
      }

      return {
        ...state,
        favoritedJobs: state.favoritedJobs.filter(job => job.id !== action.payload.id),  
      };

    default:
      return state;  
  }
}

export const addToFavorites = (job) => ({
  type: 'ADD_TO_FAVORITES',
  payload: job,  
});

export const removeFromFavorites = (job) => ({
  type: 'REMOVE_FROM_FAVORITES',
  payload: job, 
});
