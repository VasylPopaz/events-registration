export const getSortValue = (value: string) => {
  switch (value) {
    case "":
      return "None";
    case "byTitle=true":
      return "Title A-Z";
    case "byTitle=false":
      return "Title Z-A";
    case "byDate=true":
      return "Oldest events";
    case "byDate=false":
      return "Newest events";

    case "byOrganizer=true":
      return "Organizer A-Z";
    case "byOrganizer=false":
      return "Organizer Z-A";

    default:
      break;
  }
};
