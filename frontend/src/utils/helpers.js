import { format } from "date-fns";

export const capitalize = (name) => (
  name.charAt(0).toUpperCase() + name.slice(1)
)

export const formatDate = (date) => (
  format(new Date(date), 'PP')
)

export const formatTime = (time) => (
  time.split(":").slice(0, 2).join(":")
);
