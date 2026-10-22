import { Search } from 'lucide-react';
import { cx } from '../lib/cx';

type SearchInputProps = {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  variant: 'topbar' | 'filter';
};

export function SearchInput({ label, placeholder, value, onChange, variant }: SearchInputProps) {
  return (
    <label className={cx('search-input', `search-input--${variant}`)}>
      <Search size={20} aria-hidden="true" />
      <input
        type="search"
        aria-label={label}
        placeholder={placeholder}
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </label>
  );
}