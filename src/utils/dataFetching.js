export const fetchData = async (
  localStorageItem,
  setDataState,
  apiFunction
) => {
  const storedData = localStorage.getItem(localStorageItem);
  if (!storedData) {
    const data = await apiFunction();
    localStorage.setItem(localStorageItem, JSON.stringify(data));
    setDataState(data[localStorageItem]);
  } else {
    const parsedData = storedData ? JSON.parse(storedData) : null;

    const lastFetchDate = parsedData?.fetchDate
      ? new Date(parsedData.fetchDate)
      : null;
    const currentTime = new Date();
    const cooldown = 1 * 60 * 60 * 1000; // 1 hour cooldown
    const shouldFetchData =
      !lastFetchDate || currentTime - lastFetchDate >= cooldown;

    if (shouldFetchData) {
      const data = await apiFunction();
      localStorage.setItem(localStorageItem, JSON.stringify(data));
      setDataState(data[localStorageItem]);
    } else {
      const data = JSON.parse(localStorage.getItem(localStorageItem));
      setDataState(data[localStorageItem]);
    }
  }
};
