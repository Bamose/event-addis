export async function getEventData() {
    const res = await fetch(
      `http://localhost:8000/event/allevents?timestamp=${Date.now()}`,
      {
        method: "GET",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbmlkIjoiMzg4NjBhOGQtNTE5MC00NWI0LWI3Y2UtOTZlNzljZmJiY2EzIiwidXNlcmlkIjoiNjE2ZjI0NzEtNGMwZC00NzA2LTg0YjgtMDM1NjRjYmVjZGMyIiwiaWF0IjoxNzE4MTY5MjgxfQ.6LPXobDWmU5Q_X8Gxi-2lqGg2Mu4QT0pDicTmGpUiZk",
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
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbmlkIjoiMzg4NjBhOGQtNTE5MC00NWI0LWI3Y2UtOTZlNzljZmJiY2EzIiwidXNlcmlkIjoiNjE2ZjI0NzEtNGMwZC00NzA2LTg0YjgtMDM1NjRjYmVjZGMyIiwiaWF0IjoxNzE4MTY5MjgxfQ.6LPXobDWmU5Q_X8Gxi-2lqGg2Mu4QT0pDicTmGpUiZk",
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });
  
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
  
    return res.json();
  }
  