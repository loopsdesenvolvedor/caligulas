import Title from "@/components/Title";

const Home = () => {
  return (
    <div>
      <main>
        <Title
          title="Vídeos recentes - Caligulas"
          tag="h1"
          className="mt-[24px] flex items-center relative pl-5 before:content-[''] before:inline-block before:w-[3px] before:h-4 before:bg-yellow-default before:mr-2 text-[18px] font-medium"
        />
      </main>
    </div>
  );
};

export default Home;
