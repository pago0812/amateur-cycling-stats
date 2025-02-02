import { endOfYear, format, startOfYear, intervalToDuration } from "date-fns";
import { es } from "date-fns/locale";

const formatDateToMMDD = (date?: Date) => {
  if (!date) {
    return "";
  }
  return format(new Date(date), "dd-MMM", { locale: es });
};

const dateStartOfYear = (year?: number) => {
  const date = year ? new Date(year, 1, 1) : new Date();
  const dateFormat = format(startOfYear(date), "yyyy-MM-dd", { locale: es });

  return dateFormat;
};

const dateEndOfYear = (year?: number) => {
  const date = year ? new Date(year, 1, 1) : new Date();
  const dateFormat = format(endOfYear(date), "yyyy-MM-dd", { locale: es });

  return dateFormat;
};

export { formatDateToMMDD, dateStartOfYear, dateEndOfYear };
