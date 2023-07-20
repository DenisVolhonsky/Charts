const getData = async () => {
  try {
    const response = await fetch("http://localhost:8000/employees");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const postData = async (employee) => {
  try {
    const response = await fetch("http://localhost:8000/employees", {
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(employee)
    })
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export { getData, postData };
