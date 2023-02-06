var modifyDataString = (dateAll) => {
  let date = dateAll.substring(4, 15);
  date = date.split(" ")
  let newDate = ""

  const months = {
    "Jan": "01",
    "Feb": "02",
    "Mar": "03",
    "Apr": "04",
    "May": "05",
    "Jun": "06",
    "Jul": "07",
    "Aug": "08",
    "Sep": "09",
    "Oct": "10",
    "Nov": "11",
    "Dec": "12",
  };
  newDate = date[1]+"/"+months[date[0]]+"/"+date[2]
  return newDate;
};

export { modifyDataString };
