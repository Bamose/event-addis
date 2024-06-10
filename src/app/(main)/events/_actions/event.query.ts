export async function getEventData() {
  const res = await fetch("http://localhost:8000/event", {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbmlkIjoiNzIwOTlmZDAtYjVjNS00NTlmLWJiODItYmNlNGRkYTAzZmFjIiwidXNlcmlkIjoiZWY4ZGQ4NDYtMTNmYi00NjMyLTk3MDktYmY4NWMyY2UwZDgxIiwiaWF0IjoxNzE3Njk5MjE5fQ.VFxCcWEfc2JTU3UhWDBEu5wkJhy8fO0KLtrrztTIG5M', 
      'Content-Type': 'application/json'
    }
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
    console.log(res)
  }
  console.log(res)
  return res.json();
}
