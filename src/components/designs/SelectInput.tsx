import React from "react";
import ClearIcon from "@mui/icons-material/Clear";

interface SelectInputProps {
  title: string;
  oprions: string[];
  selectedItemName: string;
  setSelectedItemName: Function;
  loading: boolean;
}

function SelectInput({
  title,
  oprions,
  selectedItemName,
  setSelectedItemName,
  loading,
}: SelectInputProps) {
  return (
    <div className={styles.main}>
      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>
          <cite>{title}</cite>
        </legend>

        <select
          name={title}
          id={title}
          value={selectedItemName}
          onChange={(e) => setSelectedItemName(e.target.value)}
          className={styles.input}
        >
          <option value="">None</option>
          {!loading &&
            oprions.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          {loading && <option className="animate-pulse">Loading...</option>}
        </select>
        {selectedItemName.length > 0 && (
          <button
            onClick={() => setSelectedItemName("")}
            className="p-2 rounded-full hover:bg-gray-200"
          >
            <ClearIcon fontSize="small" />
          </button>
        )}
      </fieldset>
    </div>
  );
}

export default SelectInput;

const styles = {
  main: " w-full flex items-start justify-center",
  fieldset:
    "w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px] border px-4 py-2 rounded-lg shadow-lg flex",
  legend: "font-semibold",
  input: "w-full focus:outline-none p-2 bg-white",
};
