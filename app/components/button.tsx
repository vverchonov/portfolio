type Props = {
  text: string;
  onClick?: any;
};

export default function Button(props: Props) {
  return (
    <button
      onClick={props.onClick && props.onClick}
      className="bg-blue hover:bg-orange-400 hover:text-black text-white py-2 px-4 rounded"
    >
      {props.text}
    </button>
  );
}
