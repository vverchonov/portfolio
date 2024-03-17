import PageHolder from "../components/page-holder";

export default function ProjectsPage() {
  return (
    <PageHolder>
      <h1 className="text-3xl text-center mb-4 font-semibold">Projects</h1>
      <div
        className="mb-4"
        style={{
          width: "100%",
          height: "0",
          paddingBottom: "68%",
          position: "relative",
        }}
      >
        <iframe
          src="https://giphy.com/embed/zyQUOucy2duRW"
          width="100%"
          height="100%"
          style={{ position: "absolute" }}
          frameBorder="0"
          className="giphy-embed"
          allowFullScreen
        ></iframe>
      </div>
      <p></p>
      <p className="text-xl mb-2">Coding of the page is in progress...</p>
      <p className="text-xl">
        It takes time for a developer to plan the UI/UX of the web page to make
        sure the infromation is presented in the best possible way. Thank you
        for your patience!
      </p>
    </PageHolder>
  );
}
