export function getRandomName() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  for (var i = 0; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}
export function getUniquePost() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  for (var i = 0; i < 20; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return "Post text is " + text;
}
export function getBid() {
  var text = "";
  var possible = "123456789";
  for (var i = 0; i < 4; i++)
    firsttext += possible.charAt(Math.floor(Math.random() * possible.length));
  for (var i = 0; i < 4; i++)
    secondtext += possible.charAt(Math.floor(Math.random() * possible.length));
  for (var i = 0; i < 4; i++)
    thirdtext += possible.charAt(Math.floor(Math.random() * possible.length));
  return firsttext +"-"+ secondtext+"-"+thirdtext;
}
export function getCurrentDateTime() {
  const now = new Date();

  const year = now.getFullYear();
  const month = formatTimeComponent(now.getMonth() + 1);
  const day = formatTimeComponent(now.getDate());
  const hours = formatTimeComponent(now.getHours());
  const minutes = formatTimeComponent(now.getMinutes());
  const seconds = formatTimeComponent(now.getSeconds());
  const milliseconds = now.getMilliseconds();

  return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}.${milliseconds}`;
}