import React, { useEffect, useRef } from 'react';

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
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleSelect = (option: Option) => {
    onSelect(option);
    setIsOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="dropdown" tabIndex={-1} ref={dropdownRef}>
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
