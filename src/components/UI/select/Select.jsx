import React from 'react';

const SelectUI = React.forwardRef(({ options, ...props }, ref) => {
  return (
    <select ref={ref} {...props}>
      {options.map((element) => (
        <option key={element.value} value={element.value} {...element.styles}>
          {element.title}
        </option>
      ))}
    </select>
  );
});

export default SelectUI;
