export const UPDATE_EMAIL = 'UPDATE_EMAIL';
export const UPDATE_ID = 'UPDATE_ID';

const initialState = {
  email: '',
  score: 0,
  address: '',
  id: '', // cccd
};

// phải có hành động cập nhật trạng thái
// payload là dữ liệu cần cập nhật cho trạng thái trong store
export default function actionForReducer(state = initialState, payload) {
  switch (payload.type) {
    case UPDATE_EMAIL: // nếu gọi case này thì initialState.email sẽ được cập nhật
      return {
        ...state,
        email: payload.email,
      };
    case UPDATE_ID:
      return {
        ...state,
        id: payload.id,
      };
    default:
      return state;
  }
}
