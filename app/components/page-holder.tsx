


export default function PageHolder({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>){

    return(
        <main className="m-auto w-11/12 md:w-6/12 bg-white mb-3 rounded-lg p-4">
            {children}
        </main>
    );
}