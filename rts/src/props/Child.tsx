interface ChildProps {
  color?: string;
  onClick: () => void;
}

export const Child = ({ color, onClick }: ChildProps): JSX.Element => {
  return (
    <div>
      {color}
      <button onClick={onClick}>Click me</button>
    </div>
  );
};
