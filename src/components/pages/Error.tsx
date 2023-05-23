import MainNavigation from "./../MainNavigation";

function ErrorPage() {
  return (
    <>
      <MainNavigation />
      <main style={{ textAlign: "center" }}>
        <h1>An error occurred!</h1>
        <p>Could not find this page!</p>
      </main>
    </>
  );
}

export default ErrorPage;
