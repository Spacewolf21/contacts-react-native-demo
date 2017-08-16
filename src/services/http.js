function hasValidResponse(response) {
  if (response.status >= 200 && response.status < 300) {
    return true;
  }

  return false;
}

export async function get(url) {
  const response = await fetch(url);

  if (hasValidResponse(response)) {
    return response.json();
  }

  throw new Error(response.statusText);
  // return fetch(url).then(response => response.json());
}
