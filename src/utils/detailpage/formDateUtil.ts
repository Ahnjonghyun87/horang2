export const formatDate = (dateString: string) => {
  const date = new Date(dateString);

  const koreaTimeOffset = 9 * 60 * 60 * 1000;
  const koreaTime = new Date(date.getTime() + koreaTimeOffset);

  const year = koreaTime.getFullYear();
  const month = String(koreaTime.getMonth() + 1).padStart(2, "0");
  const day = String(koreaTime.getDate()).padStart(2, "0");
  const hours = String(koreaTime.getHours()).padStart(2, "0");
  const minutes = String(koreaTime.getMinutes()).padStart(2, "0");

  return `${year}-${month}-${day} ${hours}:${minutes}`;
};
