import { useEffect, useRef } from 'react';

interface EventComponentProps {
  value?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const EventComponent = ({ value, onChange }: EventComponentProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (!inputRef.current) {
      return;
    }

    inputRef.current.focus();
  }, []);

  return <input ref={inputRef} defaultValue={value} onChange={onChange} />;
};

export default EventComponent;
