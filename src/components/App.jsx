import BookList from "./Product";


export default function App() {
  const favBooks = [
  { id: "id-1", name: "JS for beginners" },
  { id: "id-2", name: "React basics" },
  { id: "id-3", name: "React Router overview" }
];
  return (
    <>
	  <h1>Books of the week</h1>
      <BookList books={favBooks} />
    </>
  );
};