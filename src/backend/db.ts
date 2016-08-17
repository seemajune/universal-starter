// Our API for demos only
export const fakeDataBase = {
  get() {
    let res = { data: 'Hi Seema from the server.' };
    return Promise.resolve(res);
  }
};
