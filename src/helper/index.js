export const formatTime = (time) => {
  // Retrieves the current time in milliseconds and returns the time in mm:ss format
  const minute = Math.floor((time % 3600) / 60);
  const second = Math.floor((time % 3600) % 60);
  let timeFormated =
    (minute < 10 ? "0" : "") + minute + ":" + (second < 10 ? "0" : "") + second;
  return timeFormated;
};
