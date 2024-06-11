export async function getEventData() {
    const res = await fetch(
      `http://localhost:8000/event/allevents?timestamp=${Date.now()}`,
      {
        method: "GET",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbmlkIjoiZmFjOTZjZjUtZGU0ZC00Y2ExLThmNGUtMzE4YTNiYzdlZjUxIiwidXNlcmlkIjoiYTQwYWE5YWYtOWExMC00MTVhLWJlMGUtNjI2NTRkZWQwMzMwIiwiaWF0IjoxNzE4MDUyNzkyfQ.3gU8LA71vo0G4mQStuci2lCEWMFvJ2wmHJlLmKZB0W0",
          "Content-Type": "application/json",
        },
        cache: "no-store",
      }
    );
  
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
  
    return res.json();
  }
  
  export async function getEventByUser(id: string) {
    const res = await fetch(`http://localhost:8000/register/${id}`, {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbmlkIjoiZmFjOTZjZjUtZGU0ZC00Y2ExLThmNGUtMzE4YTNiYzdlZjUxIiwidXNlcmlkIjoiYTQwYWE5YWYtOWExMC00MTVhLWJlMGUtNjI2NTRkZWQwMzMwIiwiaWF0IjoxNzE4MDUyNzkyfQ.3gU8LA71vo0G4mQStuci2lCEWMFvJ2wmHJlLmKZB0W0",
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });
  
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
  
    return res.json();
  }
  