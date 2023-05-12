import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <div class="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
        <nav class="my-16 animate-fade-in">
          <ul class="flex items-center justify-center gap-4"></ul>
        </nav>
        <div class="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />

        <h1 class="z-10 text-4xl  text-transparent duration-1000 cursor-default text-edge-outline animate-title  font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text bg-white ">
          Ricardo Castro
        </h1>

        <div class="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
        <div class="my-16 text-center animate-fade-in">
          <h2 class="text-sm text-zinc-500 ">
            Hola, soy Ricardo Castro, Desarrollador Web Full Stack.
          </h2>
        </div>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Ricardo Castro: Web Developer",
  meta: [
    {
      name: "description",
      content:
        "Explore the project portfolio of full-stack web developer Ricardo Castro. Discover his expertise in multiple programming languages and frameworks, and learn how he can help create the perfect web solution for you.",
    },
  ],
};
