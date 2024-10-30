import { format } from "date-fns";
import { es } from "date-fns/locale";

const formatDateToMMDD = (date: Date) => {
  if (!date) {
    return "";
  }
  return format(new Date(date), "dd-MMM", { locale: es });
};

export { formatDateToMMDD };
