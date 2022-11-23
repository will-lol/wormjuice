onmessage = (e) => {
  let data = e.data.imageData;
  let count = 0;
  for (let i = 3; i < data.length; i += 4) {
    if (data[i] > 50) {
      count++;
    }
  }
  result = count / (e.data.canvas.width * e.data.canvas.height);
  postMessage(result);
};
