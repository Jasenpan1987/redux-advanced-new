import { SAVE_COMMENT, FETCH_COMMENTS } from "actions/types";
export default function(state = [], action) {
  switch (action.type) {
    case SAVE_COMMENT: {
      return [action.payload, ...state];
    }

    case FETCH_COMMENTS: {
      return [
        ...state,
        ...action.payload.data.slice(0, 20).map(comment => comment.name)
      ];
    }

    default: {
      return state;
    }
  }
}
