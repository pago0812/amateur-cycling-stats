"use client";
import { useQueryState } from "next-usequerystate";

interface AcsSelect {
  name: string;
  title: string;
  options?: { value: any; t: string }[];
}

const SelectQueryParam = ({ title, name, options }: AcsSelect) => {
  const [queryValue, setQueryValue] = useQueryState<any>(
    name,
    options?.[0]?.value
  );
  return (
    <div>
      <label>{title}</label>
      <select
        value={queryValue || options?.[0]?.value}
        onChange={(e) => {
          setQueryValue(e.target.value);
        }}
        name={name}
        id={`select-${name}`}
      >
        {options?.map((option: any, i: number) => (
          <option key={i} value={option.value}>
            {option.t}
          </option>
        ))}
      </select>
    </div>
  );
};

export { SelectQueryParam };
