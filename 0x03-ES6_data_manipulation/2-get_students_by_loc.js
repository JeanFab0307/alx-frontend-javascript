export default function getStudenstByLocation(list, city) {
  if (!Array.isArray(list)) return [];

  return list.filter((student) => student.location === city);
}
