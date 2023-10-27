import React from 'react';

function Checkbox({ checked, onChange, label }) {
  return (
    <>
      <input
        onChange={onChange}
        checked={checked}
        id="default-radio-2"
        type="radio"
        name="CNPJ"
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
      />
      <label
        for="default-radio-2"
        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        {label}
      </label>
    </>
  );
}

export default Checkbox;
