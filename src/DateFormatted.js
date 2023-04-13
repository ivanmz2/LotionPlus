const options = {
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
};

const formatDate = (when) => {
  const formatted = new Date(when).toLocaleString("en-US", options);
  if (formatted === "Invalid Date") {
    return "";
  }
  return formatted;
};

function DateFormatted({ date }) {
  return <p className="note-when">{formatDate(date)}</p>;
}

export default DateFormatted;