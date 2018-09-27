export default (dateString) => {
  const timeZoneOffset = new Date().getTimezoneOffset() * 60000;
  return new Date(new Date(dateString).getTime() + timeZoneOffset);
}
