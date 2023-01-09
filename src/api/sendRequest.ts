type Method = "GET" | "POST" | "PUT" | "DELETE";

function requestOptions(method: Method, data: unknown): RequestInit {
  if (method === "GET") {
    return {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
    };
  }

  return {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
}

export async function sendRequest<T>(
  url: string,
  method: Method,
  data: unknown = {}
): Promise<T> {
  const response = await fetch(url, requestOptions(method, data));

  if (!response.ok) {
    throw new Error(`An error occured in FetchAPI : ${response.status}`);
  }

  return (await response.json()) as Promise<T>;
}
