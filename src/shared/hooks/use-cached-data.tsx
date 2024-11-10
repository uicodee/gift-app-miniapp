import { useEffect, useState } from "react";

interface UseCachedDataOptions {
  cacheName?: string;
  fetchOptions?: RequestInit;
}

export const useCachedData = <T,>(
  url: string,
  options?: UseCachedDataOptions
): T | null => {
  const [data, setData] = useState<T | null>(null);
  const { cacheName = "default-cache", fetchOptions } = options || {};

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cache = await caches.open(cacheName);
        const cachedResponse = await cache.match(url);

        if (cachedResponse) {
          console.log("Cached data");
          const cachedData = await cachedResponse.json();
          setData(cachedData);
        } else {
          const response = await fetch(url, fetchOptions);
          if (!response.ok) {
            throw new Error(`Failed to fetch data: ${response.statusText}`);
          }
          const responseData = await response.json();
          await cache.put(url, new Response(JSON.stringify(responseData)));
          setData(responseData);
        }
      } catch (error) {
        console.error("Error fetching cached data:", error);
      }
    };

    fetchData();
  }, [url, cacheName, fetchOptions]);

  return data;
};
