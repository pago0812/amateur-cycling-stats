"use client";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useQueryState, parseAsString } from "nuqs";

interface AcsSelect {
  name: string;
  title: string;
  options?: { value: string; t: string }[];
}

const SelectQueryParam = ({ title, name, options }: AcsSelect) => {
  const [queryValue, setQueryValue] = useQueryState(
    name,
    parseAsString.withDefault(options?.[0]?.value || "").withOptions({
      shallow: false,
    }),
  );

  return (
    <FormControl sx={{ minWidth: "120px" }} size="small">
      <InputLabel id="select-query-params-input">{title}</InputLabel>
      <Select
        labelId="select-query-params-input"
        id="select-query-params"
        value={queryValue || options?.[0]?.value}
        label={title}
        onChange={(e) => {
          setQueryValue(e.target.value);
        }}
      >
        {options?.map((option: any, i: number) => (
          <MenuItem key={i} value={option.value}>
            {option.t}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export { SelectQueryParam };
