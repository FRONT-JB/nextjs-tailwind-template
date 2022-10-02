interface TextProps {
  text?: string;
}

const Text = ({ text = 'Tailwind Init' }: TextProps) => {
  return <p className="font-bold text-xl cursor-default">{text}</p>;
};

export default Text;
