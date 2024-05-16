export const getSortValue = (value: string) => {
  switch (value) {
    case "":
      return "Sort by";
    case "byTitle=true":
      return "Title A-Z";
    case "byTitle=false":
      return "Title Z-A";
    case "byDate=true":
      return "Event date new";
    case "byDate=false":
      return "Event date old";
    case "byOrganizer=true":
      return "Organizer A-Z";
    case "byOrganizer=false":
      return "Organizer Z-A";

    default:
      break;
  }
};
