import { Child } from './Child';

const Parent = () => {
  return <Child onClick={() => console.log('Clicked')} />;
};

export default Parent;
