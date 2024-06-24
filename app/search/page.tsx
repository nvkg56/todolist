export default function search() {
  async function newSearch(formData: FormData) {
    "use server";
    const query = formData.get("searchText");
    console.log(`You search for: ${query}`, typeof { query });
  }

  return (
    <form action={newSearch}>
      <input
        type="text"
        className="text-slate-900"
        name="searchText"
        placeholder="Google Here ..."
      />
      <button type="submit" name="searchButton">
        Search
      </button>
    </form>
  );
}
