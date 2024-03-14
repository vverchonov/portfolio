type Props = {
  text: string;
};

export default function Button(props: Props) {
  return (
    <button className="bg-blue hover:text-black text-white py-2 px-4 rounded">
      {props.text}
    </button>
  );
}
