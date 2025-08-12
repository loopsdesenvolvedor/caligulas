import Input from "./Input";

const Search = () => {
  return (
    <section className="absolute top-0 left-0" role="search">
      <form>
        <Input title="text" placeholder="Busque por um vídeo" />
      </form>
    </section>
  );
};

export default Search;
