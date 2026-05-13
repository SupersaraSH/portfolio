export type About = {
  headline: string;
  bio: string[]; // cada string es un párrafo
};

// TODO: Sara revisa y ajusta el texto a su voz
export const about: About = {
  headline: "Character Rigger con más de 10 años de experiencia. Ahora también developer.", // TODO: Sara ajusta
  bio: [
    "Llevo más de una década construyendo los esqueletos que hacen mover a los personajes en películas, series y proyectos de VFX. El rigging es resolución de problemas técnicos al servicio de la animación: cada rig que diseño tiene que ser robusto, intuitivo y capaz de aguantar lo que los animadores necesiten expresar.", // TODO: Sara ajusta
    "En 2025 completé el bootcamp de Full Stack Web Development en Socratech. No porque el rigging haya dejado de interesarme, sino porque la programación siempre ha sido parte de mi trabajo — Python, scripting, automatización — y quería llevar esa curiosidad más lejos.", // TODO: Sara ajusta
    "Hoy trabajo con las dos herramientas en paralelo. Este portfolio es la prueba de que no hay contradicción entre ellas.", // TODO: Sara ajusta
  ],
};
