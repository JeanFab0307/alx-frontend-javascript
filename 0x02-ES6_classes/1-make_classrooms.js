import ClassRoom from "./0-classroom";

export default function initializeRooms() {
  let classRooms = [];
  classRooms.push(new ClassRoom(19));
  classRooms.push(new ClassRoom(20));
  classRooms.push(new ClassRoom(34));

  return classRooms
}