export const FetchData = async (url, method) => {
  try {
    const response = await fetch(url, {
      method: method,
      headers: { "content-type": "application.json" },
    });
    const data = await response.json();
    if (response.ok) {
      return data;
    } else {
      alert(data.message);
    }
  } catch (error) {
    alert(error.message);
  }
};
