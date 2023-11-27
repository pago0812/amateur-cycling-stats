import { format } from "date-fns";
import { es } from "date-fns/locale";

const formatDateToMMDD = (date: Date) => {
  return format(new Date(date), "dd MMM yyyy", { locale: es });
};

export { formatDateToMMDD };
