interface EventComponentProps {
  value?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const EventComponent = ({ value, onChange }: EventComponentProps) => {
  return <input defaultValue={value} onChange={onChange} />;
};

export default EventComponent;
