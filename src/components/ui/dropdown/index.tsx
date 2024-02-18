import React from 'react';

type Option = {
  label: string;
  value: string;
  id: string;
};

type DropdownProps = {
  title: string;
  options: Option[];
  onSelect: (option: Option) => void;
  suffixIcon?: React.ReactNode;
};

const Dropdown: React.FC<DropdownProps> = ({
  onSelect,
  options,
  suffixIcon,
  title,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleSelect = (option: Option) => {
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div
      className="dropdown"
      onBlur={() => setTimeout(() => setIsOpen(false), 100)}
      tabIndex={-1}
    >
      <button onClick={() => setIsOpen(!isOpen)}>
        {title}
        {suffixIcon}
      </button>
      {isOpen && (
        <div className={`dropdown-menu ${isOpen ? 'show' : ''}`}>
          {options.map((option) => (
            <button key={option.id} onClick={() => handleSelect(option)}>
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
