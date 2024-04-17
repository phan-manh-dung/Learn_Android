export const updateEmail = (email) => async (dispatch) => {
  try {
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 3000);
    });

    console.log('Đã cập nhật email');
  } catch (error) {}
};
