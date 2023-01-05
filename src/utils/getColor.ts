export const getBorderColor = (status: string) => {
  switch (status) {
    case "todo":
      return "error.light";
    case "inProgress":
      return "warning.light";
    case "completed":
      return "success.light";
    default:
      return "white";
  }
};

export const getPriorityColor = (priority: string) => {
  switch (priority) {
    case "high":
      return "error.light";
    case "normal":
      return "secondary.light";
    case "low":
      return "gray";
    default:
      return "white";
  }
};
export const getLabelColor = (priority: string) => {
  switch (priority) {
    case "high":
      return "rgba(255,0,255,1)";
    case "normal":
      return "rgba(50, 90, 255, 1)";
    case "low":
      return "rgba(248,248,248,1)";
    default:
      return "rgba(68,68,68,1)";
  }
};
