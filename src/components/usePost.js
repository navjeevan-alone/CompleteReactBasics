function usePost({ url, data }) {
  // custom hook parameters : url,method,headers,body
  fetch(url, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(data),
  }).then((res) => {
    console.log("New blog added");
    // throw Error("Can't compelete add blog");
  });
  //   return <div>usePost</div>;
}

export default usePost;
